import React, { useEffect, useState } from 'react'

const Shop = () => {
  const[items,setitems]=useState([]);
    let fatchData = async()=>{
      let res = await fetch("https://dummyjson.com/products")
      let data = await res.json()
      console.log(data.products)
      setitems(data.products)
    }
    useEffect(()=>{
      fatchData();
 },[] )
    console.log(items)
  return (
    <div>
     <div className=''>
      {
      items.map((ele)=>{
       return <div key={ele.id} className="card" style={{width: '18rem'}}>
        <img src={ele.products.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-truncate">{ele.products}</h5>
          <a href="#" className="btn btn-primary">viwe product</a>
        </div>
      </div>
      })
     }

    
   
     </div>
     
    </div>
  )
}

export default Shop
