import { graphql } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { postContent } from '../styles/pages/post.module.css';

export default function BlogPost({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Head
        title={frontmatter.title}
        description={frontmatter.info}
        keywords={frontmatter.tags}
        url={frontmatter.slug}
      />
      <div>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div
          className={postContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: {
        slug: {
          eq: $slug
        }
      }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        info
        tags
      }
    }
  }
`;
