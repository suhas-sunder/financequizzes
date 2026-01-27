const DEFAULT_TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
  "ref",
  "ref_src",
  "igshid",
]);

function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim().replace(/\/+$/, "");
  return trimmed;
}

function isValidAbsoluteUrl(maybe: string): boolean {
  try {
    const u = new URL(maybe);
    return Boolean(u.protocol && u.host);
  } catch {
    return false;
  }
}

/**
 * Preferred absolute site URL (scheme + host), without trailing slash.
 * Order of preference:
 * 1) process.env.SITE_URL (or process.env.PUBLIC_SITE_URL if present)
 * 2) request origin (scheme + host)
 */
export function getPreferredSiteUrl(request: Request): string {
  const envUrl =
    process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL ?? process.env.VITE_SITE_URL;

  if (envUrl && isValidAbsoluteUrl(envUrl)) return normalizeSiteUrl(envUrl);

  // Fallback to request origin (still stable for canonicalization).
  const requestOrigin = new URL(request.url).origin;
  return normalizeSiteUrl(requestOrigin);
}

export function stripTrackingParams(
  url: URL,
  extraDropKeys?: Iterable<string>,
): URL {
  const drop = new Set(DEFAULT_TRACKING_PARAMS);
  if (extraDropKeys) for (const k of extraDropKeys) drop.add(k);

  const next = new URL(url.toString());
  for (const key of Array.from(next.searchParams.keys())) {
    if (drop.has(key)) next.searchParams.delete(key);
  }
  return next;
}

/**
 * Canonical URL for a given request, anchored to the preferred site URL,
 * and stable across tracking parameters.
 *
 * - Always absolute.
 * - Never includes tracking params.
 * - Preserves the request pathname.
 * - Preserves a trailing slash for the homepage.
 */
export function buildCanonicalUrl(
  request: Request,
  siteUrl: string,
  options?: { dropParams?: string[] },
): string {
  const reqUrl = new URL(request.url);

  // Strip known tracking params while preserving meaningful params for other routes.
  const cleaned = stripTrackingParams(reqUrl, options?.dropParams);

  const origin = normalizeSiteUrl(siteUrl);
  const pathname = cleaned.pathname === "/" ? "/" : cleaned.pathname.replace(/\/+$/, "");

  const canonical = new URL(pathname, origin.endsWith("/") ? origin : `${origin}/`);
  // Keep homepage as trailing slash. Other paths without trailing slash.
  canonical.pathname = pathname;

  // Canonical should not include search or hash by default.
  canonical.search = "";
  canonical.hash = "";

  return canonical.toString();
}
