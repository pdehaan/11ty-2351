module.exports = function (eleventyConfig) {
  const { DateTime } = eleventyConfig;

  eleventyConfig.addFilter("date_fmt", function (date) {
    return DateTime.fromJSDate(date).toFormat("yyyy LLL dd");
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
