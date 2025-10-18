#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Batch copying all UI components...\n');

const sourceDir = path.join(__dirname, 'components', 'ui');
const destDir = path.join(__dirname, 'src', 'components', 'ui');

// Files that already exist in dest - skip these
const existingFiles = ['accordion.tsx', 'button.tsx', 'sonner.tsx', 'utils.ts'];

// Get all files from source
const allFiles = fs.readdirSync(sourceDir).filter(file => {
  return fs.statSync(path.join(sourceDir, file)).isFile();
});

// Filter out existing files
const filesToCopy = allFiles.filter(file => !existingFiles.includes(file));

console.log(`Found ${filesToCopy.length} files to copy\n`);

// Patterns to replace (remove version numbers)
const replacements = [
  { pattern: /@radix-ui\/([\w-]+)@[\d.]+/g, replacement: '@radix-ui/$1' },
  { pattern: /lucide-react@[\d.]+/g, replacement: 'lucide-react' },
  { pattern: /sonner@[\d.]+/g, replacement: 'sonner' },
  { pattern: /next-themes@[\d.]+/g, replacement: 'next-themes' },
  { pattern: /cmdk@[\d.]+/g, replacement: 'cmdk' },
  { pattern: /vaul@[\d.]+/g, replacement: 'vaul' },
  { pattern: /react-hook-form@[\d.]+/g, replacement: 'react-hook-form' },
  { pattern: /react-day-picker@[\d.]+/g, replacement: 'react-day-picker' },
  { pattern: /embla-carousel-react@[\d.]+/g, replacement: 'embla-carousel-react' },
  { pattern: /input-otp@[\d.]+/g, replacement: 'input-otp' },
  { pattern: /recharts@[\d.]+/g, replacement: 'recharts' },
  { pattern: /class-variance-authority@[\d.]+/g, replacement: 'class-variance-authority' },
  { pattern: /react-resizable-panels@[\d.]+/g, replacement: 'react-resizable-panels' },
];

let copiedCount = 0;
let errorCount = 0;

filesToCopy.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  
  try {
    // Read source file
    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Apply all replacements
    replacements.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, replacement);
    });
    
    // Write to destination
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`  ✓ ${file}`);
    copiedCount++;
  } catch (error) {
    console.error(`  ✗ Error processing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\n✅ Successfully copied ${copiedCount} files!`);
if (errorCount > 0) {
  console.log(`❌ Failed to copy ${errorCount} files`);
}

console.log('\n📊 Summary:');
console.log(`  Total in source: ${allFiles.length} files`);
console.log(`  Already in dest: ${existingFiles.length} files`);
console.log(`  Newly copied: ${copiedCount} files`);
console.log(`  Errors: ${errorCount} files`);
console.log(`\n✅ /src/components/ui/ now has ${existingFiles.length + copiedCount} files!`);
