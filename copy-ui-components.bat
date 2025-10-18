@echo off
REM Script to copy UI components from /components/ui/ to /src/components/ui/

echo Copying UI components...
echo.

REM Create destination directory if it doesn't exist
if not exist "src\components\ui" mkdir "src\components\ui"

REM Copy all files
xcopy /Y /Q "components\ui\*.*" "src\components\ui\"

echo.
echo Done! All UI components copied to src\components\ui\
echo.
echo NOTE: You need to manually fix version specifiers in imports.
echo See FIX_DEPLOYMENT.md for details.
echo.
echo Now run:
echo   git add .
echo   git commit -m "Add all UI components"
echo   git push
