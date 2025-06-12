const fs   = require('fs');
const path = require('path');

// ─── входные аргументы ──────────────────────────────────────────────────────────
const sources = process.argv.slice(2);
if (sources.length === 0) {
  console.error('Usage: node report.js <path ...>');
  process.exit(1);
}

// ─── вспомогательные функции ───────────────────────────────────────────────────
const seen = new Set();                      // защищает от повторов

function collectFiles(entry, bucket = []) {
  if (!fs.existsSync(entry)) return bucket;  // пропускаем битые пути

  const stat = fs.statSync(entry);
  if (stat.isDirectory()) {
    for (const item of fs.readdirSync(entry))
      collectFiles(path.join(entry, item), bucket);
  } else if (stat.isFile() && !seen.has(entry)) {
    bucket.push(entry);
    seen.add(entry);
  }
  return bucket;
}

function generateReport(files) {
  let report = `Review my code.
Focus on:

code cleanliness (readability, simplicity, no duplication);

clean architecture (proper layering, correct dependencies);

GRASP and SOLID principles;

correct use of GoF patterns.

Suggest specific improvements.
Highlight what is done well.
Don't rewrite everything — just comment and suggest.

`;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    report += `Content of ${file}\n\`\`\`\n${content}\n\`\`\`\n\n`;
  }
  return report;
}

// ─── основной поток ────────────────────────────────────────────────────────────
const allFiles = sources.flatMap(src => collectFiles(path.resolve(src)));
const output   = path.join(__dirname, 'report.txt');

fs.writeFileSync(output, generateReport(allFiles), 'utf8');
console.log(`Report generated: ${output}`);
