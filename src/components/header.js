import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
return (
    <h1>
      {props.headerTitle}
      <Link to="https://github.com/choijaewoong/gatsby-blog">Github</Link>
    </h1>
  )
}