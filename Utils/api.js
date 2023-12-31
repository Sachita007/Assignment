const axios = require("axios");
const catchAsync = require("./catchAsync");

exports.fetchBlogs = catchAsync(async (req, res, next) => {
  const response = await axios.get(
    "https://intent-kit-16.hasura.app/api/rest/blogs",
    {
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    }
  );
  req.data = response.data;
  next();
});
