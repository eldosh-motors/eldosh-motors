/**
 * Returns the correct URL for a public asset, taking into account
 * the Vite base path (used for GitHub Pages deployment).
 *
 * Usage: getImageUrl('/ELDOSH-EL-200-CC.png')
 * Local:  /ELDOSH-EL-200-CC.png
 * GitHub: /ELDOSH-SAYT/ELDOSH-EL-200-CC.png
 */
export const getImageUrl = (path: string): string => {
  // If it's an external URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // Safely resolve Vite BASE_URL or fallback
  const base = ((import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL) || '/ELDOSH-SAYT/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

