import test from "node:test";
import assert from "node:assert/strict";

import { buildCanonicalUrl } from "./seoCanonical.server";

test("buildCanonicalUrl strips query/hash and normalizes trailing slash", () => {
  const siteUrl = "https://www.financequizzes.com";

  assert.equal(
    buildCanonicalUrl(
      "https://www.financequizzes.com/finance-quiz?utm_source=x&utm_medium=y#section",
      siteUrl,
    ),
    "https://www.financequizzes.com/finance-quiz",
  );

  assert.equal(
    buildCanonicalUrl("https://www.financequizzes.com/finance-quiz/", siteUrl),
    "https://www.financequizzes.com/finance-quiz",
  );

  // Force canonical onto the preferred origin.
  assert.equal(
    buildCanonicalUrl("http://example.com/finance-quiz?x=1", siteUrl),
    "https://www.financequizzes.com/finance-quiz",
  );

  // Root keeps trailing slash.
  assert.equal(
    buildCanonicalUrl("https://www.financequizzes.com/?utm=1", siteUrl),
    "https://www.financequizzes.com/",
  );
});
