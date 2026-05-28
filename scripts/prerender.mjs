import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const templatePath = resolve(distDir, "index.html");
const serverEntryPath = resolve(distDir, "server/entry-server.js");

const template = await readFile(templatePath, "utf8");
const { render } = await import(serverEntryPath);
const appHtml = render();

const html = template
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  .replaceAll('href="/assets/', 'href="./assets/')
  .replaceAll('src="/assets/', 'src="./assets/');

await writeFile(templatePath, html);
await rm(resolve(distDir, "server"), { recursive: true, force: true });
