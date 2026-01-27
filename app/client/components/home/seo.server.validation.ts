import assert from "node:assert/strict";
import { buildCanonicalUrl } from "./seo.server";

/**
 * Deterministic validation harness.
 * Run with a TS runner (tsx/ts-node) as part of CI or locally:
 *   tsx client/utils/seo.server.validation.ts
 */
function makeRequest(url: string) {
  return new Request(url, { method: "GET" });
}

(function run() {
  const siteUrl = "https://www.financequizzes.com";

  assert.equal(
    buildCanonicalUrl(makeRequest("https://www.financequizzes.com/"), siteUrl),
    "https://www.financequizzes.com/",
  );

  assert.equal(
    buildCanonicalUrl(makeRequest("https://www.financequizzes.com/?utm_source=x&utm_medium=y"), siteUrl),
    "https://www.financequizzes.com/",
  );

  assert.equal(
    buildCanonicalUrl(makeRequest("https://www.financequizzes.com/finance-quiz?utm_campaign=z"), siteUrl),
    "https://www.financequizzes.com/finance-quiz",
  );

  assert.equal(
    buildCanonicalUrl(makeRequest("http://localhost:3000/?gclid=123"), siteUrl),
    "https://www.financequizzes.com/",
  );
})();
