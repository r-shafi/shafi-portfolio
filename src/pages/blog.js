import { graphql, Link } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { allPosts, date, postLink } from '../styles/pages/blog.module.css';

const Post = ({ post }) => {
  return (
    <div className={postLink}>
      <Link to={post.frontmatter.slug}>
        <h1>{post.frontmatter.title}</h1>
      </Link>
      <p className={date}>{post.frontmatter.date}</p>
      <p>{post.frontmatter.info}</p>
    </div>
  );
};

export default function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <Post key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Head title="Blog" description="Blog by Shafi Rayhan. I talk about JavaScript, CSS, React and other web stuffs!" />
      <div className={allPosts}>{Posts}</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            info
          }
        }
      }
    }
  }
`;
