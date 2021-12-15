import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { postContent, postInformation } from '../styles/pages/post.module.css';

export default function BlogPost({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  useEffect(() => {
    const postBody = document.querySelector('#postBody');
    postBody.querySelectorAll('a').forEach((link) => {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }, []);

  return (
    <Layout>
      <Head
        title={frontmatter.title}
        description={frontmatter.info}
        keywords={frontmatter.tags}
        url={frontmatter.slug}
      />
      <div>
        <div className={postInformation}>

        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        </div>
        <div
          id="postBody"
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
