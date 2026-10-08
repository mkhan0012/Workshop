const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function optimizeImage(filename, width, options = {}) {
  const filePath = path.join(publicDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filename}`);
    return;
  }
  
  const tempPath = path.join(publicDir, `temp_${filename}`);
  
  try {
    let pipeline = sharp(filePath).resize(width);
    
    // Depending on extension, compress
    if (filename.endsWith('.png')) {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
    } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
      pipeline = pipeline.jpeg({ quality: 80 });
    }
    
    await pipeline.toFile(tempPath);
    
    // Replace original
    fs.renameSync(tempPath, filePath);
    console.log(`Optimized ${filename}`);
  } catch (err) {
    console.error(`Error optimizing ${filename}:`, err);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function run() {
  await optimizeImage('hero.png', 1920);
  await optimizeImage('logo2.png', 800);
  await optimizeImage('logo.png', 800);
  await optimizeImage('components.png', 1200);
  await optimizeImage('warehouse.png', 1200);
  await optimizeImage('truck.png', 1200);
  await optimizeImage('Machinery.png', 1200);
  await optimizeImage('car.png', 1200);
}

run();
