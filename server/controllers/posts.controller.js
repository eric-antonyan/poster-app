import postService from "../services/post.service.js"

export default async (req, res) => {
  const data = await postService.find()
  res.send(data)
}