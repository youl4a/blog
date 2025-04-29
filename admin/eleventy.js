module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  return {
    dir: {
      input: "src",     // or whatever your input folder is
      output: "_site"
    }
  };
};