import React from 'react'
import styledComponents from 'styled-components'
import { popularItems } from '../data'
import Product from './Product'

const Container = styledComponents.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
      {popularItems.map((item) => (
        <Product item ={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products