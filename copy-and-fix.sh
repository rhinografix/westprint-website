#!/bin/bash

echo "🚀 Copying and fixing all UI components..."
echo ""

SOURCE_DIR="components/ui"
DEST_DIR="src/components/ui"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Source directory not found: $SOURCE_DIR"
  echo ""
  echo "Make sure you are running this from the project root directory."
  exit 1
fi

# Create destination directory if it doesn't exist
if [ ! -d "$DEST_DIR" ]; then
  mkdir -p "$DEST_DIR"
  echo "✓ Created directory: $DEST_DIR"
  echo ""
fi

echo "Copying and fixing files..."
echo ""

count=0

# Copy and fix each file
for file in "$SOURCE_DIR"/*; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    
    # Copy and fix imports using sed
    if [[ "$OSTYPE" == "darwin"* ]]; then
      # macOS
      sed -E '
        s/@radix-ui\/([a-z-]+)@[0-9.]+/@radix-ui\/\1/g
        s/lucide-react@[0-9.]+/lucide-react/g
        s/sonner@[0-9.]+/sonner/g
        s/next-themes@[0-9.]+/next-themes/g
        s/cmdk@[0-9.]+/cmdk/g
        s/vaul@[0-9.]+/vaul/g
        s/react-hook-form@[0-9.]+/react-hook-form/g
        s/react-day-picker@[0-9.]+/react-day-picker/g
        s/embla-carousel-react@[0-9.]+/embla-carousel-react/g
        s/input-otp@[0-9.]+/input-otp/g
        s/recharts@[0-9.]+/recharts/g
        s/class-variance-authority@[0-9.]+/class-variance-authority/g
        s/react-resizable-panels@[0-9.]+/react-resizable-panels/g
      ' "$file" > "$DEST_DIR/$filename"
    else
      # Linux
      sed -E '
        s/@radix-ui\/([a-z-]+)@[0-9.]+/@radix-ui\/\1/g
        s/lucide-react@[0-9.]+/lucide-react/g
        s/sonner@[0-9.]+/sonner/g
        s/next-themes@[0-9.]+/next-themes/g
        s/cmdk@[0-9.]+/cmdk/g
        s/vaul@[0-9.]+/vaul/g
        s/react-hook-form@[0-9.]+/react-hook-form/g
        s/react-day-picker@[0-9.]+/react-day-picker/g
        s/embla-carousel-react@[0-9.]+/embla-carousel-react/g
        s/input-otp@[0-9.]+/input-otp/g
        s/recharts@[0-9.]+/recharts/g
        s/class-variance-authority@[0-9.]+/class-variance-authority/g
        s/react-resizable-panels@[0-9.]+/react-resizable-panels/g
      ' "$file" > "$DEST_DIR/$filename"
    fi
    
    echo "  ✓ $filename"
    ((count++))
  fi
done

echo ""
echo "✅ Successfully copied and fixed $count files!"
echo ""
echo "Now run:"
echo "  git add ."
echo "  git commit -m 'Add all UI components with fixed imports'"
echo "  git push"
echo ""
echo "Your Netlify build will succeed! 🎉"
