const _ = require("lodash");
const cachingUtil = require("./cache");
const cache = new cachingUtil(60000);

const blogAnalytics = (blogs) => {
  const totalBlogs = blogs.length;
  const longestTitleBlog = _.maxBy(blogs, (blog) => blog.title.length);
  const privacyBlogs = _.filter(blogs, (blog) =>
    _.includes(_.toLower(blog.title), "privacy")
  ).length;
  const uniqueTitles = _.uniqBy(blogs, "title").map((blog) => blog.title);
  return {
    totalBlogs,
    longestTitle: longestTitleBlog ? longestTitleBlog.title : "",
    privacyBlogs,
    uniqueTitles,
  };
};

const searchBlogs = (blogs, query) => {
  return _.filter(blogs, (blog) =>
    _.includes(_.toLower(blog.title), _.toLower(query))
  );
};

exports.getBlogAnalytics = cache.memoize(blogAnalytics);

exports.searchInBlogs = cache.memoize(searchBlogs);
