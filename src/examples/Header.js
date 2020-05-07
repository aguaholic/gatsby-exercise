import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    {
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

const Header = () => {
    const {
        site: {
            info: {
                title,
                person: { name, age },
            },
        },
    } = useStaticQuery(getData)

    return (
        <div>
            <h1>∫∫ {title} ∫∫</h1>
            <h2>
                ∫∫ {name}, {age} ∫∫
            </h2>
        </div>
    )
}

export default Header
