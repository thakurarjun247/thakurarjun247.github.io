# Downloads real service favicons into images/dash/ for the Control Panel page.
# Run once from the repo root:  powershell -ExecutionPolicy Bypass -File .\fetch-dashboard-icons.ps1
# Safe to delete this file afterwards.

$ErrorActionPreference = "Stop"
$dir = Join-Path $PSScriptRoot "images\dash"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$icons = @{
  "linkedin" = "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128"
  "gmail"    = "https://www.google.com/s2/favicons?domain=gmail.com&sz=128"
  "zoho"     = "https://www.google.com/s2/favicons?domain=zoho.com&sz=128"
  "zoom"     = "https://www.google.com/s2/favicons?domain=zoom.us&sz=128"
  "claude"   = "https://www.google.com/s2/favicons?domain=claude.ai&sz=128"
}

foreach ($name in $icons.Keys) {
  $out = Join-Path $dir "$name.png"
  Write-Host "Downloading $name -> $out"
  Invoke-WebRequest -Uri $icons[$name] -OutFile $out -UseBasicParsing
}

Write-Host "Done. Icons saved to $dir"
