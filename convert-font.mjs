import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ttf2woff from 'ttf2woff';
import ttf2woff2 from 'ttf2woff2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ttfPath = path.join(__dirname, 'temp_fonts', '04B_03__.TTF');
const woffOutputPath = path.join(__dirname, 'public', 'fonts', '04b_03.woff');
const woff2OutputPath = path.join(__dirname, 'public', 'fonts', '04b_03.woff2');

// Read TTF file
const ttfBuffer = fs.readFileSync(ttfPath);

// Convert to WOFF
const woffResult = ttf2woff(ttfBuffer);
fs.writeFileSync(woffOutputPath, Buffer.from(woffResult.buffer));

// Convert to WOFF2
const woff2Result = ttf2woff2(ttfBuffer);
fs.writeFileSync(woff2OutputPath, woff2Result);

console.log('Font conversion completed!'); 