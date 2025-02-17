import React from 'react'
import Product from './Product'

const ProductView = ({ products, setProducts }) => {

  const onDeleteClick = (id) => {
    setProducts(products.filter(product => product.id != id))
  }
  const onUpdateIsTaken = (id) => {
    const prods = [...products]
    prods.forEach(product => {
      if (product.id == id) product.is_taken = !product.is_taken
    })
    setProducts(prods)
  }
  const updateProduct = (id, data) => {
    const prods = [...products]
    prods.forEach(product => {
      if (product.id == id) {
        product.amount = data.amount;
        product.product_name = data.product_name;
      }
    })
    setProducts(prods)
  }


  if (!products.length) return <p className='text-center text-xl'>no products</p>
  return (
    <div className='flex flex-col gap-2 items-center'>
      {
        products.map(product =>
          <Product
            updateProduct={(data) => updateProduct(product.id,data)}
            key={product.id}
            product={product}
            onDeleteClick={() => onDeleteClick(product.id)}
            onUpdateIsTaken={() => onUpdateIsTaken(product.id)}
          />)
      }
    </div>
  )
}

export default ProductView