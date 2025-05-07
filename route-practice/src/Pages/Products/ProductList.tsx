import { useEffect, useState } from "react"
import type { Product } from "../../types/product.type"
import { Link } from "react-router-dom"
import { BarLoader } from "react-spinners"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            setProducts(data.products)
        }
        getProduct()
    }, [])
    

    if (!products) return <BarLoader />

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Products List</h2>
        <ul>
          {products.map(product => (
            <li key={product.id} className="mb-4 p-4 border rounded-md hover:shadow-md transition">
              <p className="text-lg font-medium text-gray-700">{product.title}</p>
              <Link 
                to={`/products/${product.id}`} 
                className="text-blue-600 hover:underline"
              >
                View Product Detail
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    )
}

export default ProductList