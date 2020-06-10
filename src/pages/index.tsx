import React, { useState } from "react"
import { Link } from "gatsby"

import { Layout, Image, SEO } from "components"

const IndexPage:React.FC = ({
  
}) =>{



  return  (
    <Layout>
      <SEO title="Home" />
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image/>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage