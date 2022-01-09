import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("html-chapters");
  console.log("files: ", files);
  const paths = files.map((filename) => ({
    params: {
      chapter: filename.replace(".md", ""),
    },
  }));
  console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { chapter } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("html-chapters", chapter + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
