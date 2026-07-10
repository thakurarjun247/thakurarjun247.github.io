# ============================================
#  Git automation for arjunthakur.dev (PowerShell)
#  Usage:  .\git.ps1 "your commit message"
#     or:  .\git.ps1        (prompts for message)
# ============================================

# Always run from the repo root
Set-Location 'D:\git\thakurarjun247.github.io'

# Clear any stale lock from a crashed/interrupted git run
if (Test-Path '.git\index.lock') {
    Write-Host "`nRemoving stale .git\index.lock..." -ForegroundColor Yellow
    Remove-Item '.git\index.lock' -Force
}

Write-Host "`nGit pull..." -ForegroundColor Cyan
git pull

Write-Host "`nGit add..." -ForegroundColor Cyan
git add .

Write-Host "`nGit status..." -ForegroundColor Cyan
git status

# Commit message: use argument if given, else prompt
$commitMessage = $args -join ' '
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = Read-Host "`nEnter a commit message"
}
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    Write-Host "`nNo commit message given. Aborting." -ForegroundColor Red
    return
}

Write-Host "`nGit commit..." -ForegroundColor Cyan
git commit -m "$commitMessage"

Write-Host "`nGit push..." -ForegroundColor Cyan
git push

Write-Host "`nDone!" -ForegroundColor Green
