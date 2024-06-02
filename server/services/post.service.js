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
}
