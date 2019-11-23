import React from 'react'
import Head from 'next/head'
import '../global.css'
import Nav from '../components/nav'

function Index() {
  return (
    <div>
    <Head>
      <title>Home Page</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" 
      content="width=device-width, initial-scale=1.0" key="viewport"/>
    </Head>
    <Nav></Nav>
      <section id="home" className="container">
        <div className="content row">
          <div className="col-12 content-detail">
            <h1>Hero Section</h1>
          </div>
        </div>
        <div className="content row">
          <div className="col-6 content-detail">
            <h1>Content 1 - Info</h1>
          </div>
          <div className="col-6 content-detail">
            <h1>Content 1 - Image</h1>
          </div>
          
        </div>
        <div className="content row">
          <h1>Content Section 2</h1>
        </div>
      </section>
      
      <style jsx>{`
        
      `}</style>
    </div>
  )
}

export default Index
