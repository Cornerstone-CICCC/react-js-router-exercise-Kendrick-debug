import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../../types/product.type'
import { BarLoader,  } from 'react-spinners'


const ProductDetail = () => {
    const [product, setProduct] = useState<Product>()
    const { id } = useParams()
    useEffect(() => {
        const getProductById = async () => {
            const res = await fetch(`http://dummyjson.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
            console.log(data)
        }
        getProductById()
    }, [id])

    if (!product) return <BarLoader />

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Product ID: {id}</h2>
  <ul className="space-y-2 text-gray-700 text-lg">
    <li>
      <span className="font-semibold">Product:</span> {product?.title}
    </li>
    <li>
      <span className="font-semibold">Price:</span> ${product?.price}
    </li>
  </ul>
</div>

    )
}

export default ProductDetail