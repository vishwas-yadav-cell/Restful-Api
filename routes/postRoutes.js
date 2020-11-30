const router = require('express').Router();
const Posts = require('../model/posts');

// @GET get all posts:
router.get('/', async (req, res) => {
    try {
        const data = await Posts.find({});
        res.json(data);
    } catch (err) {
        console.error({ Message: err });
    };
});

// @POST save a post:
router.post('/', async (req, res) => {
    try {
        const post = new Posts({
            title: req.body.title,
            body: req.body.body
        });

        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        console.error({ Message: err });
    }
});

// @GET get a particular post:
router.get('/:postId', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.postId);

        res.json(post);
    } catch (err) {
        console.error({ Message: err });
    }
});

// @patch update a particular post:
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Posts.findByIdAndUpdate(req.params.postId, req.body);
        res.json(updatedPost);
    } catch (err) {
        console.error({ Message: err });
    }
});

// @DELETE delete a particular post:
router.delete('/:postId', async (req, res) => {
    try {
        const delPost = await Posts.findByIdAndDelete(req.params.postId);
        res.json(delPost);
    } catch (err) {
        console.error({ Message: err });
    }
});

module.exports = router;