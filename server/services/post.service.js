import PostModel from "../models/post.model.js";

export default class Post {
  constructor(title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
  }

  async save() {
    try {
      if (this.title && this.description && this.image) {
        const newPost = new PostModel({
          title: this.title,
          description: this.description,
          image: this.image
        });
        const post = await newPost.save()
        return post;
      } else {
        throw new Error("Missing required fields: title, description, or image");
      }
    } catch (err) {
      return { message: `Mongoose Error: ${err.message}` };
    }
  }

  static async find() {
    const data = await PostModel.find({})
    return data;
  }

  static async edit(id, title, description, image) {
    const update = await PostModel.findOneAndUpdate({_id: id}, {title, description, image})
    if (update) return {message: "Post successfully updated", success: true}
    return {message: "Post not found", success: false}
  }

  static async getById(id) {
    const post = PostModel.findOne({ _id: id })
    return post
  }
}
