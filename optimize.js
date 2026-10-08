const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function convertToWebp(filename, width) {
  const filePath = path.join(publicDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filename}`);
    return;
  }
  
  const ext = path.extname(filename);
  const basename = path.basename(filename, ext);
  const newFilename = `${basename}.webp`;
  const newFilePath = path.join(publicDir, newFilename);
  
  try {
    let pipeline = sharp(filePath).resize(width).webp({ quality: 80 });
    await pipeline.toFile(newFilePath);
    
    console.log(`Converted and optimized ${filename} to ${newFilename}`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

async function run() {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      let width = 1200; // default
      if (file === 'hero.png') width = 1920;
      else if (file.startsWith('logo')) width = 400; // better sizing for logo
      else if (['Hose.png', 'hosecomponent.png', 'otherpic.png', 'otherpic2.png', 'otherpic3.png'].includes(file)) width = 800; // properly size components
      
      await convertToWebp(file, width);
    }
  }
}

run();
