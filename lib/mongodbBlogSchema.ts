import { Schema, model, models } from "mongoose";

export interface IBlog extends Document {
    title: string;
    content: string;
    authorId: string;   // will reference a User _id
    summary: string;
    media: {
        type: string;
        url: string;
    }[];
    slug: string;
    tags: string[];
    createdAt: Date;

}

const BlogSchema = new Schema<IBlog>({
    title: String,
    content: String,
    authorId: String,
    summary: String,
    media: [{ type: String, url: String }],
    slug: String,
    tags: [String],
    createdAt: { type: Date, default: Date.now },
});

// prevent redefining model (important for Next.js hot reload)
const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);

export default Blog;
