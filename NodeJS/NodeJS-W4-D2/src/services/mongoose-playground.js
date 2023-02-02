require('dotenv').config()
const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const Comment = require('../model/Comment');
const User = require("../model/User");

mongoose.connect(process.env.MONGO_URL);

/**
 * Insert Data
 */
const blogCreate = async () => {
  const user = await User.create({
    name: "hage",
    email: "hage@hage.com"
  });

  //method 1
  // const article = new Blog({
  //     title: 'New Post',
  //     slug: 'new-post',
  //     published: true,
  //     content: 'This is a new post',
  //     tags: ['new', 'featured']
  // })
  // await article.save();

  //method 2
  const article = await Blog.create({
    title: "New Post",
    slug: "new-post",
    published: true,
    content: "This is a new post",
    tags: ["new", "featured"],
    author: user._id
  });
};

/**
 * Retrieve all data
 */
const blogFind = async () => {
  const firstArticle = await Blog.find({});
  console.log(firstArticle);
};

/**
 * Retrieve first data
 */
const blogFindOne = async () => {
  const firstArticle = await Blog.findOne({});
  console.log(firstArticle);
};

/**
 * Retrieve single data by params and populate the referenced author details
 */
const blogFindOnewithUser = async () => {
  const firstArticle = await Blog.findOne({ slug: "new-post" }).populate(
    "author"
  );
  console.log(firstArticle);
};

/**
 * Update data
 */
const blogUpdate = async () => {
  const articleToUpdate = await Blog.findOne({});
  articleToUpdate.title = "An Awesome Post";
  await articleToUpdate.save();
  console.log(articleToUpdate);
};

/**
 * Retrieve data by id with projection
 */
const blogFindById = async () => {
  const articleById = await Blog.findById(
    "6294ed8b42d4e7d37e121704",
    "title slug content"
  ).exec();
  console.log(articleById);
};

/**
 * Remove single data
 */
const blogDelete = async () => {
  const blog = await Blog.deleteOne({ slug: "new-post" });
  console.log(blog);
};

/**
 * Remove all data
 */
const blogDeleteMany = async () => {
  const blog = await Blog.deleteMany({ slug: "new-post" });
  console.log(blog);
};

/**
 * Some useful mongoose methods for queries
 */
const blogUsefulMethods = async () => {
  const blogExists = await Blog.exists({ slug: "new-post" });
  console.log(blogExists);

  const blogFind = await Blog.findOne({ slug: "new-post" });
  console.log(blogFind);

  const blogWhere = await Blog.where("slug").equals("new-post");
  console.log(blogWhere);

  const blogWhere2 = await Blog.where("slug")
    .equals("new-post")
    .select("title content");
  console.log(blogWhere2);
};

/**
 * Insert Comment
 */
const commentCreate = async () => {
  const user = await User.findOne({ name: 'hage'})
  const article = await Blog.findOne({ author: user._id })

  if(article){
    await Comment.create({
      user: user._id,
      content: "im hungry",
      blog: article._id
    })
  }
}

/**
 * Retrieve single article and populate the reference author and comments details
 */

const blogFindOneArticleWithUserAndComment = async () => {
  // const articleWithoutPop = await Blog.findOne({ slug: "new-post" })
  // console.log(articleWithoutPop);
  const articleWithPop = await Blog
                            .findOne({ slug: "new-post" })
                            .populate("author")
                            .populate("comments")
  console.log(articleWithPop);
}

// blogCreate();
// blogFind();
// blogFindOne();
// blogFindOnewithUser();
// blogUpdate();
// blogFindById();
// blogDelete();
// blogDeleteMany();
// blogUsefulMethods();
// commentCreate()
blogFindOneArticleWithUserAndComment();
