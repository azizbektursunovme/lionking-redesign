// Builds the preview for GitHub Pages and publishes dist/ to the gh-pages branch of origin.
// Usage: npm run deploy:pages   (needs push access to origin, e.g. after `gh auth login` + `gh auth setup-git`)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const git = (args, cwd) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();

const remote = git(['remote', 'get-url', 'origin']);
const match = remote.match(/github\.com[/:]([^/]+)\/([^/]+?)(\.git)?$/);
if (!match) throw new Error(`origin is not a GitHub repository: ${remote}`);
const [, owner, repo] = match;
const pagesUrl = `https://${owner.toLowerCase()}.github.io/${repo}/`;

// Preview build: served under /<repo>/ and hidden from search engines.
execFileSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, SITE_URL: `https://${owner.toLowerCase()}.github.io`, BASE_PATH: `/${repo}`, PUBLIC_NOINDEX: 'true' },
});

const dist = path.resolve('dist');
const name = git(['config', 'user.name']);
const email = git(['config', 'user.email']);
const sha = git(['rev-parse', '--short', 'HEAD']);

fs.rmSync(path.join(dist, '.git'), { recursive: true, force: true });
git(['init', '-q', '-b', 'gh-pages'], dist);
git(['add', '-A'], dist);
git(['-c', `user.name=${name}`, '-c', `user.email=${email}`, 'commit', '-q', '-m', `Deploy preview from ${sha}`], dist);
git(['push', '-q', '-f', remote, 'gh-pages'], dist);
fs.rmSync(path.join(dist, '.git'), { recursive: true, force: true });

console.log(`Published to the gh-pages branch: ${pagesUrl}`);
