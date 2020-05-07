require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'Gatsby Tutorial',
        description: 'some random description',
        author: '@thealmighty',
        data: ['item1', 'item2'],
        person: { name: 'Stefan', age: 32 },
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.SPACE_ID,
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ],
}
