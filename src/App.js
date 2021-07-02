import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const Courses = () => (
    <Query
        query={gql`
            {
                characters(page: 2, filter: { name: "rick" }) {
                    info {
                        count
                    }
                    results {
                        name
                    }
                }
                location(id: 1) {
                    id
                }
                episodesByIds(ids: [1, 2]) {
                    id
                }
            }
        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>
            return (
                <code style={{ color: "red" }}>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </code>
            )
        }}
    </Query>
)
export default Courses
