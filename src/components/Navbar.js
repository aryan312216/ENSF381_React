import React from 'react'
export default function navbar() {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-dark">
  <button type="button" className="btn btn-black btn-lg"><b>&#9776;</b></button>
  <div className="container-fluid justify-content-center text-center"> 
    <a className="navbar-brand" href="/">
      <h1>Lotion</h1>
      <h6>Like Lotion but worse</h6>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
</>

  
  

  
  )
}