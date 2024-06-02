import Post from "../services/post.service.js";

export default async (req, res) => {
  const { title, description, image } = req.body;

  if (title && description && image) {
    const newPost = new Post(title, description, image)
    console.log(newPost);
    const data = await newPost.save()
    res.send({user: data, message: data.createdAt ? "Post successfully created!" : "Post do not be created, problems!", success: data.createdAt ? true : false})
    // res.send({message: "Post successfully created", success: true})
  } else {
    res.send({message: "Please check you payload or Content-Type", success: false})
  }
};
