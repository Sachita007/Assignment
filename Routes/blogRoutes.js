const express = require("express");
const blogController = require("./../Controllers/blogController");
const api = require("./../Utils/api");

const router = express.Router();

router.route("/blog-stats").get(api.fetchBlogs, blogController.getBlogStats);
router.route("/blog-search").get(api.fetchBlogs, blogController.searchBlogs);

module.exports = router;
