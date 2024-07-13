import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig(
  {
    tags: {
      aside: {
        render: component("./src/components/Aside.astro"),
        attributes: {
          type: { type: String },
          title: { type: String },
        },
      },
    },
  },
  {
    path: "src/content",
    schema: {
      path: "markdoc.config.mjs",
      type: "esm",
      property: "default",
      watch: true,
    },
  },
);
