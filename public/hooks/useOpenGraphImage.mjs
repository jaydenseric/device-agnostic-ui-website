// @ts-check

import { createElement as h, useMemo } from "react";
import useHead from "ruck/useHead.mjs";
import useRoute from "ruck/useRoute.mjs";

/**
 * React hook to set the Open Graph image head tag.
 * @param {string} urlPath URL path.
 * @param {number} [priority] Priority.
 */
export default function useOpenGraphImage(urlPath, priority) {
  const route = useRoute();

  useHead(
    "1-4-open-graph-image",
    useMemo(
      () =>
        h("meta", {
          name: "og:image",
          content: `${route.url.origin}${urlPath}`,
        }),
      [route.url.origin, urlPath],
    ),
    priority,
  );
}
