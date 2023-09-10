import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
<div className="nav">
<div className="container">
<img src="/assets/images/logo-1.png" alt="" />
    <Link href={"/"}>
        <h1>home</h1>
    </Link>
</div>
</div>
  )
}
