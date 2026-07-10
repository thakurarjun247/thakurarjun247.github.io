@echo off
rem ============================================
rem  Git automation for arjunthakur.dev
rem  Usage:  git.bat "your commit message"
rem     or:  git.bat        (prompts for message)
rem ============================================

rem Ensure we are in the repo root
cd /d D:\git\thakurarjun247.github.io

rem Clear any stale lock left by a crashed/interrupted git run
if exist ".git\index.lock" (
    echo. & echo Removing stale .git\index.lock...
    del ".git\index.lock"
)

rem Pull latest from remote
echo. & echo Git pull...
git pull

rem Stage all changes
echo. & echo Git add...
git add .

rem Show status
echo. & echo Git status...
git status

rem Commit message: use argument if given, else prompt
if "%~1"=="" (
    echo. & set /p commitMessage="Enter a commit message: "
) else (
    set commitMessage=%*
)

rem Abort if still empty
if "%commitMessage%"=="" (
    echo. & echo No commit message given. Aborting.
    goto :end
)

rem Commit
echo. & echo Git commit...
git commit -m "%commitMessage%"

rem Push
echo. & echo Git push...
git push

:end
echo. & echo Done!
pause
