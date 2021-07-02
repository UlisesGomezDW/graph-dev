import React from "react"
import { useQuery } from "react-apollo"
import { gql } from "apollo-boost"

export default function App() {
    const query = gql`
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
    `

    const { loading, data, error } = useQuery(query)
    if (loading) return <p>loading...</p>
    if (error) return <p>error: {JSON.stringify(error)}</p>
    return (
        <code style={{ color: "red" }}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
    )
}
