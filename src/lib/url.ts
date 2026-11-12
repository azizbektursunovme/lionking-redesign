// Prefixes internal links with the configured base path,
// so the same build works at the domain root and under /<repo>/ on GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}
