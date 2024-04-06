import React,{useState} from 'react'
import a from "./product"
const Gallery = () => {
    const[demo,setDemo]=useState(a)
  return (
    <>
    {
       demo.map((ele)=>{
        const {image,name}=ele
        return <div class="card" >
<img src={image} height="auto" width="auto"class="card-img-top" alt={name}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">a pic taken from Product.js</p>
  </div>
</div>
       })
    }</>
)
}
export default Gallery