import postService from "../services/post.service.js"

export default async (req, res) => {
    const { title, image, description } = req.body
    const {id} = req.params
    const post = postService.getById(id)
    if (!post) res.send({ message: "Incorrect post id, please check your post id", success: false })
    const updatePost = await postService.edit(id, title, image, description)
    res.send(updatePost)
}