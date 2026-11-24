import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const review = "Approved. The retry window now outlives the support contract. Marking this resolved.";
const directory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(directory, { recursive: true });
writeFileSync(join(directory, 'entry.txt'), review, 'utf8');
