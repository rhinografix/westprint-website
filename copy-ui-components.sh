#!/bin/bash

# Script to copy UI components from /components/ui/ to /src/components/ui/
# and remove version specifiers from imports

echo "Copying UI components..."

# Create destination directory if it doesn't exist
mkdir -p src/components/ui

# Copy all files from components/ui to src/components/ui
for file in components/ui/*; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    echo "Processing $filename..."
    
    # Copy and fix imports using sed
    sed -E 's/@radix-ui\/([a-z-]+)@[0-9.]+/@radix-ui\/\1/g; s/lucide-react@[0-9.]+/lucide-react/g; s/sonner@[0-9.]+/sonner/g; s/next-themes@[0-9.]+/next-themes/g; s/cmdk@[0-9.]+/cmdk/g; s/vaul@[0-9.]+/vaul/g; s/react-hook-form@[0-9.]+/react-hook-form/g; s/react-day-picker@[0-9.]+/react-day-picker/g; s/embla-carousel-react@[0-9.]+/embla-carousel-react/g; s/input-otp@[0-9.]+/input-otp/g; s/recharts@[0-9.]+/recharts/g; s/class-variance-authority@[0-9.]+/class-variance-authority/g; s/react-resizable-panels@[0-9.]+/react-resizable-panels/g' "$file" > "src/components/ui/$filename"
  fi
done

echo "Done! All UI components copied to src/components/ui/"
echo ""
echo "Files copied:"
ls -1 src/components/ui/ | wc -l
echo ""
echo "Now run:"
echo "  git add ."
echo "  git commit -m 'Add all UI components'"
echo "  git push"
