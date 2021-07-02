import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import { client } from "./grapql.config"
import App from "./AppV2"

const rootElement = document.getElementById("root")
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    rootElement
)
