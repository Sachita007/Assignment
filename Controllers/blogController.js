const analytics = require("./../Utils/analytics");
const catchAsync = require("./../Utils/catchAsync");
const AppError = require("./../Utils/appError");

exports.getBlogStats = catchAsync(async (req, res, next) => {
  const blogData = req.data.blogs;
  const stats = analytics.getBlogAnalytics(blogData);
  res.status(200).json(stats);
});

exports.searchBlogs = catchAsync(async (req, res, next) => {
  const query = req.query.query;
  const blogs = req.data.blogs;
  const filteredBlogs = analytics.searchInBlogs(blogs, query);
  if (filteredBlogs.length === 0) {
    return next(new AppError("No blog found", 404));
  }
  res.status(200).json(filteredBlogs);
});
