import React from 'react'
import Header from '../examples/Header'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const examples = ({ data }) => {
    const {
        site: {
            info: { author },
        },
    } = data
    return (
        <Layout>
            <p>∫∫ Hello from examples page ∫∫</p>
            <Header />
            <h4>{author}</h4>
        </Layout>
    )
}

export const data = graphql`
    query MyQuery {
        site {
            info: siteMetadata {
                title
                author
                data
                description
                person {
                    age
                    name
                }
            }
        }
    }
`

export default examples
