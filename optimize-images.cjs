const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function optimizeFile(file, maxWidth, quality = 75) {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) return;

  const tempPath = path.join(publicDir, `temp_${file}`);
  const statBefore = fs.statSync(filePath).size;

  try {
    const inputBuffer = fs.readFileSync(filePath);
    let pipeline = sharp(inputBuffer);
    const meta = await pipeline.metadata();

    if (maxWidth && meta.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }

    const outputBuffer = await pipeline.webp({ quality, effort: 6 }).toBuffer();
    const statAfter = outputBuffer.length;

    if (statAfter < statBefore) {
      fs.writeFileSync(filePath, outputBuffer);
      console.log(`Optimized ${file}: ${Math.round(statBefore / 1024)}KB -> ${Math.round(statAfter / 1024)}KB (${Math.round((1 - statAfter / statBefore) * 100)}% saved)`);
    } else {
      console.log(`${file}: already optimal (${Math.round(statBefore / 1024)}KB)`);
    }
  } catch (err) {
    console.error(`Error optimizing ${file}:`, err.message);
  }
}

async function run() {
  console.log('Starting image optimization...');
  
  // Hero image: max 1600px width (plenty for high-DPI desktop), quality 75
  await optimizeFile('hero.webp', 1600, 75);
  
  // Large section images: max 1200px width
  await optimizeFile('warehouse.webp', 1200, 75);
  await optimizeFile('Workingmachine.webp', 1000, 75);
  await optimizeFile('components.webp', 1000, 75);
  await optimizeFile('Machinery.webp', 1000, 75);
  await optimizeFile('Machine.webp', 800, 75);
  await optimizeFile('truck.webp', 900, 75);
  await optimizeFile('car.webp', 900, 75);
  await optimizeFile('realpic.webp', 900, 75);
  await optimizeFile('realpic2.webp', 900, 75);
  
  // Component & product images: max 600px width
  await optimizeFile('Hose.webp', 600, 75);
  await optimizeFile('hosecomponent.webp', 600, 75);
  await optimizeFile('otherpic.webp', 600, 75);
  await optimizeFile('otherpic2.webp', 600, 75);
  await optimizeFile('otherpic3.webp', 600, 75);
  
  // Logos: max 300px width
  await optimizeFile('logo2.webp', 350, 80);
  await optimizeFile('logo.webp', 300, 80);

  console.log('Image optimization finished!');
}

run();
