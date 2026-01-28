export const DEFAULT_SITE_URL = "https://www.financequizzes.com";

type EnvLike = Record<string, string | undefined>;

function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = String(raw || "").trim();
  if (!trimmed) return DEFAULT_SITE_URL;

  try {
    const u = new URL(trimmed);
    return u.origin.replace(/\/+$/g, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function normalizePathname(pathname: string): string {
  if (!pathname) return "/";
  // Collapse duplicate slashes.
  const collapsed = pathname.replace(/\/{2,}/g, "/");
  if (collapsed === "/") return "/";
  // Remove trailing slash (policy: no trailing slash except root).
  return collapsed.replace(/\/+$/g, "");
}

export function getSiteUrlFromEnv(env: EnvLike = process.env): string {
  const raw = env.SITE_URL || env.PUBLIC_SITE_URL || env.ORIGIN || "";
  return normalizeSiteUrl(raw);
}

/**
 * Build an absolute canonical URL using a preferred, stable site origin.
 * - Strips query and hash
 * - Normalizes trailing slash (no trailing slash except root)
 * - Guarantees absolute URL
 */
export function buildCanonicalUrl(requestUrl: string, siteUrl: string): string {
  const base = normalizeSiteUrl(siteUrl);

  let pathname = "/";
  try {
    const u = new URL(requestUrl);
    pathname = normalizePathname(u.pathname);
  } catch {
    // If requestUrl is malformed, return base as a safe fallback.
    return base;
  }

  return `${base}${pathname}`;
}
