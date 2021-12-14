module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.shafi.ml/',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-vscode',
          options: {
            theme: 'Monokai',
          },
        }],
      },
    },
  ],
};
