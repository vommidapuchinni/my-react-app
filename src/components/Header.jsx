import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header style={{padding:10, borderBottom:"1px solid #ddd"}}>
      <nav>
        <Link to="/" style={{marginRight:10}}>Home</Link>
        <Link to="/about" style={{marginRight:10}}>About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}

