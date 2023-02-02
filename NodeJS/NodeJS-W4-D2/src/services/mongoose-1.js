require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, () => console.log("Connected to MONGO"))

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 7
    },
})

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, // i eat snakes for breakfast
    slug: {
        type: String,
        required: true,
        lowercase: true
    }, //i-eat-snakes-for-breakfast  =====> URL-friendly
    published: {
        type: Boolean,
        default: false
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: Date,
    comments: [
        {
            user: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User",
                required: true
            },
            content: String,
            vote: Number
        }
    ]
})

const User = mongoose.model('User', userSchema)
const Blog = mongoose.model('Blog', blogSchema)

const userCreate = async () => {
    const user = await User.create({ name: "Boke", email: "boke@boki.com" }) // create a new document in User collection
    console.log(user);
}
// userCreate()

const blogCreate = async () => {
    //create a new blog post object
    const article = new Blog({
        title: "Hoge post",
        slug: "hoge-post",
        published: true,
        content: "Awesome first post~",
        author: "63daddb05dadf343ffa6979e",
        tags: ["new","announcement","first-post"]
    })

    await article.save()
}

// blogCreate()

const checkUserExists = async () => {
    const user = await User.exists({ name: "hage" })

    if(user){
        //do something
        console.log("User exists! >>> ", user);
    }else{
        //return somewhere...
        console.log("User doesnt exist!");
    }
}
// checkUserExists()

const findAnArticle = async () => {
    const firstArticle = await Blog.findById('63dae3312f227e0e18e5ced2');
    console.log(firstArticle)
}
// findAnArticle()

const blogCreatePartTwo = async () => {
    //Get logged in user id
    const user = await User.exists({ name: "Hoge" })
    //create a new blog post object

    const article = new Blog({
        title: "Hoge post 2 ",
        slug: "hoge-post-2",
        published: true,
        content: "Awesome second post~",
        author: user._id,
        tags: ["new","announcement","second-post"]
    })

    const articleMadeByBoke = new Blog({
        title: "naisu",
        slug: "naisu",
        published: true,
        content: "post made by boke",
        author: "63daeaaabc7dd1bc0b521703",
        tags: ["naisu"]
    })

    console.log(article)

    // await article.save()
    await articleMadeByBoke.save()
}

// blogCreatePartTwo()

const blogFind = async () => {
    // const article = await Blog.findById("63dae61226d7e4eaa74341fe")
    // console.log(article);

    // const blogWhere = await Blog.where("author").equals("Hoge")
    // console.log(blogWhere)

    const blog = await Blog
                        .where("slug")
                        .equals("hoge-post-2")
                        .select("title author")
    // console.log(blog);

    const articleWithAuthor = await Blog.findOne({
        author: "63daeaaabc7dd1bc0b521703"
    })
    const aId = articleWithAuthor.author //id
    const foundUser = await User.findOne({ _id: aId })

    console.log(articleWithAuthor);
    console.log(foundUser)
    articleWithAuthor.author = foundUser
    // console.log(articleWithAuthor)

    const finalArticleWithPopulate = await Blog.find()
    console.log(">>>>>>>>>>>>>>>>>>>");
    console.log(finalArticleWithPopulate)
}


blogFind()
