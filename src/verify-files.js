#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying UI component files...\n');

const sourceDir = path.join(process.cwd(), 'components', 'ui');
const destDir = path.join(process.cwd(), 'src', 'components', 'ui');

console.log(`Source: ${sourceDir}`);
console.log(`Destination: ${destDir}\n`);

// Count files in source
const sourceFiles = fs.readdirSync(sourceDir).filter(file => {
  return fs.statSync(path.join(sourceDir, file)).isFile();
});

// Count files in destination
const destFiles = fs.readdirSync(destDir).filter(file => {
  return fs.statSync(path.join(destDir, file)).isFile();
});

console.log(`📁 Source directory (/components/ui/):`);
console.log(`   Total files: ${sourceFiles.length}`);
console.log(`   Files: ${sourceFiles.join(', ')}\n`);

console.log(`📁 Destination directory (/src/components/ui/):`);
console.log(`   Total files: ${destFiles.length}`);
console.log(`   Files: ${destFiles.join(', ')}\n`);

// Find missing files
const missingFiles = sourceFiles.filter(file => !destFiles.includes(file));

if (missingFiles.length > 0) {
  console.log(`❌ MISSING ${missingFiles.length} FILES in /src/components/ui/:\n`);
  missingFiles.forEach(file => console.log(`   - ${file}`));
  console.log('\n⚠️  You need to run the copy script and push to GitHub!');
  console.log('\nRun these commands:');
  console.log('  node copy-and-fix.js');
  console.log('  git add .');
  console.log('  git commit -m "Add all UI components"');
  console.log('  git push');
} else {
  console.log('✅ All files are present in /src/components/ui/!');
  console.log('\nNext step: Push to GitHub');
  console.log('  git add .');
  console.log('  git commit -m "Add all UI components"');
  console.log('  git push');
}
