import React from "react";
import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "../BlogSummaryCard";

async function BlogPostList() {
  const posts = await getBlogPostList();

  return posts.map((post) => (
    <BlogSummaryCard
      key={post.slug}
      slug={post.slug}
      title={post.title}
      abstract={post.abstract}
      publishedOn={post.publishedOn}
    />
  ));
}

export default BlogPostList;
