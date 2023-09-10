"use client"


import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Footer() {
  const [text] = useTypewriter({
    words : [ "jemy" ,  "front-end-developer"],
    loop : {}
  })
  return (
<div className="footer">
    <h2>made by {text}</h2>
</div>
  )
}
