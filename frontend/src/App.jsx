import React, { useEffect, useState } from 'react'
import API from './services/api'
import ProductForm from './components/ProductForm'
import ProductList from "./components/ProductList"
const App = () => {
    const [products,setProducts] = useState([])

    const fetchProducts = async ()=>{
        const res = await API.get()
        setProducts(res.data)
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    const addProduct = async (data)=>{
        await API.post('/', data)
        fetchProducts()
    }
    const deleteProduct = async (id)=>{
        await API.delete(`/${id}`)
        fetchProducts()
    }
  return (
    <div>
        <h1>mern fullstack CURD on ECOMM</h1>
        <ProductForm addProduct={addProduct} />
        <ProductList products={products} 
        deleteProduct={deleteProduct}/>
    </div>
  )
}

export default App