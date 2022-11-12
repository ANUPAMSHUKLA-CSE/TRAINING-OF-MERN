import React from 'react'

const Carddatachange=(props)=> {
    console.log(props.values);
    const{id,url,prodName,desc}=props.values;
  return (
    <div class="card" >
    <img src={url} class="card-img-top" alt="..."/>  {/* image tag needs closing otherwise it show the error */}
    <div class="card-body">
      <h5 class="card-title">{props.values.prodName}</h5>
      <p class="card-text">{desc}</p>
      <button class="btn btn-danger">APPLY</button>  
      {/* we use button in place of ahref */}
    </div>
  </div>
  )
}

export default Carddatachange