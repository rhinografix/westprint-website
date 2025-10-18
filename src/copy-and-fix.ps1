# PowerShell script to copy and fix all UI components

Write-Host "🚀 Copying and fixing all UI components...`n" -ForegroundColor Cyan

$sourceDir = "components\ui"
$destDir = "src\components\ui"

# Check if source directory exists
if (-not (Test-Path $sourceDir)) {
    Write-Host "❌ Source directory not found: $sourceDir" -ForegroundColor Red
    Write-Host "`nMake sure you are running this from the project root directory." -ForegroundColor Yellow
    exit 1
}

# Create destination directory if it doesn't exist
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    Write-Host "✓ Created directory: $destDir`n" -ForegroundColor Green
}

Write-Host "Copying and fixing files...`n" -ForegroundColor Yellow

$count = 0

Get-ChildItem -Path $sourceDir -File | ForEach-Object {
    $file = $_
    $sourcePath = $file.FullName
    $destPath = Join-Path $destDir $file.Name
    
    try {
        # Read source file
        $content = Get-Content $sourcePath -Raw
        
        # Remove all version specifiers
        $content = $content -replace '@radix-ui/([a-z-]+)@[\d.]+','@radix-ui/$1'
        $content = $content -replace 'lucide-react@[\d.]+','lucide-react'
        $content = $content -replace 'sonner@[\d.]+','sonner'
        $content = $content -replace 'next-themes@[\d.]+','next-themes'
        $content = $content -replace 'cmdk@[\d.]+','cmdk'
        $content = $content -replace 'vaul@[\d.]+','vaul'
        $content = $content -replace 'react-hook-form@[\d.]+','react-hook-form'
        $content = $content -replace 'react-day-picker@[\d.]+','react-day-picker'
        $content = $content -replace 'embla-carousel-react@[\d.]+','embla-carousel-react'
        $content = $content -replace 'input-otp@[\d.]+','input-otp'
        $content = $content -replace 'recharts@[\d.]+','recharts'
        $content = $content -replace 'class-variance-authority@[\d.]+','class-variance-authority'
        $content = $content -replace 'react-resizable-panels@[\d.]+','react-resizable-panels'
        
        # Write to destination
        $content | Set-Content $destPath -NoNewline
        Write-Host "  ✓ $($file.Name)" -ForegroundColor Green
        $count++
    }
    catch {
        Write-Host "  ✗ Error processing $($file.Name): $_" -ForegroundColor Red
    }
}

Write-Host "`n✅ Successfully copied and fixed $count files!`n" -ForegroundColor Green
Write-Host "Now run:" -ForegroundColor Cyan
Write-Host "  git add ." -ForegroundColor White
Write-Host "  git commit -m 'Add all UI components with fixed imports'" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White
Write-Host "`nYour Netlify build will succeed! 🎉" -ForegroundColor Green
