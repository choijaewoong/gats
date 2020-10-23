import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Content from "../components/content"

export default function Home() {
  return (
    <Layout>
      <Header headerTitle="My Blog Header" />
      <Content/>
    </Layout>
  )
}
