import React from "react";

export default function Card({title, children}){
  return (
    <div style={{border:"1px solid #ddd", padding:12, borderRadius:8, marginBottom:10}}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

