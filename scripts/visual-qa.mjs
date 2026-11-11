import { chromium } from "playwright-core";
import os from "node:os";
import path from "node:path";
import fs from "node:fs/promises";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  headless: true
});
const output = path.join(os.tmpdir(), "freshfold-qa-20261111");
await fs.mkdir(output, { recursive: true });
const checks = [
  ["living-desktop", "/template-a", { width: 1440, height: 1100 }],
  ["living-mobile", "/template-a", { width: 390, height: 844 }],
  ["express-desktop", "/template-b", { width: 1440, height: 1100 }],
  ["express-mobile", "/template-b", { width: 390, height: 844 }]
];
for (const [name, route, viewport] of checks) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
  await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
  const metrics = await page.evaluate(() => ({
    title: document.title,
    width: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
    h1: document.querySelector("h1")?.textContent?.trim()
  }));
  await page.screenshot({ path: path.join(output, `${name}.png`), fullPage: false });
  console.log(JSON.stringify({ name, ...metrics, horizontalOverflow: metrics.width > metrics.viewport, errors }));
  await page.close();
}
await browser.close();
console.log(output);
