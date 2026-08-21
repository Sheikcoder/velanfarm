$ErrorActionPreference = "Stop"
$env:Path = "C:\nvm4w\nodejs;" + $env:Path
$root = "C:\Users\USER\Desktop\Nandini mam"
$proj = (Get-ChildItem -LiteralPath $root -Directory | Where-Object { $_.Name -like "Velan*Oyster*" } | Select-Object -First 1).FullName
if (-not $proj) { throw "Oyster Haven folder not found" }
Set-Location -LiteralPath $proj
Write-Host "Installing in: $proj"
Write-Host "node=$(node -v) npm=$(npm -v)"

if (Test-Path -LiteralPath ".\node_modules") {
  cmd /c "rmdir /s /q node_modules"
  Start-Sleep -Seconds 2
}
if (Test-Path -LiteralPath ".\node_modules") {
  $empty = Join-Path $env:TEMP "empty-nm-purge"
  if (Test-Path $empty) { Remove-Item $empty -Recurse -Force }
  New-Item -ItemType Directory -Path $empty | Out-Null
  $nm = Join-Path $proj "node_modules"
  & robocopy $empty $nm /MIR /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null
  Remove-Item -LiteralPath $nm -Recurse -Force -ErrorAction SilentlyContinue
  Remove-Item $empty -Recurse -Force
}
if (Test-Path -LiteralPath ".\package-lock.json") {
  Remove-Item -LiteralPath ".\package-lock.json" -Force
}
Write-Host "node_modules exists=$(Test-Path .\node_modules)"
npm install
Write-Host "npm install exit=$LASTEXITCODE"
if (Test-Path ".\node_modules\@rolldown\binding-win32-x64-msvc") {
  Write-Host "OK: rolldown Windows binding installed"
} else {
  Write-Host "MISSING: @rolldown/binding-win32-x64-msvc"
  Get-ChildItem ".\node_modules\@rolldown" -ErrorAction SilentlyContinue | Select-Object Name
}
exit $LASTEXITCODE
