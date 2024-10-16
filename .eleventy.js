export default function (eleventyConfig) {
  // add passthrough
  eleventyConfig.addPassthroughCopy("./src/assets/");
  // watch scss files
  eleventyConfig.addWatchTarget("./src/scss/");
  // watch js files
  eleventyConfig.addWatchTarget("./src/js/");

  return {
    passthroughFileCopy: true,
    // markdownTemplateEngine: "njk",
    // templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
