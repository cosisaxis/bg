import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'
import Deals from '../components/Deals'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styledComponents.div``
const Wrapper = styledComponents.div`
padding: 20px
`
const Name = styledComponents.h1`
font-weight: 300;
text-align: center
`
const Up = styledComponents.div` 
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`
const UpButton = styledComponents.button`
padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`
const UpTexts = styledComponents.div``
const UpText = styledComponents.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 20px;
`
const Bottom = styledComponents.div`
display: flex;
justify-content: space-between;
`
const Information = styledComponents.div`
flex: 3;
`
const Product = styledComponents.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styledComponents.div`
flex: 2;
display: flex;
`
const Image = styledComponents.img`
width: 200px;
`
const Details = styledComponents.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`
const ProductName = styledComponents.span`
`
const ProductId = styledComponents.span`
`
const ProductColor = styledComponents.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`
const ProductSize = styledComponents.span`
`
const PriceDetail = styledComponents.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmtContainer = styledComponents.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmt = styledComponents.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styledComponents.div`
font-size: 30px;
font-weight: 200;
`
const Hr = styledComponents.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Order = styledComponents.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const OrderName = styledComponents.h1`
font-weight: 200;
`
const OrderItem = styledComponents.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`
const OrderItemText = styledComponents.span`
`
const OrderItemPrice = styledComponents.span`
`
const Button = styledComponents.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Deals />
        <Wrapper>
            <Name>Your cart</Name>
            <Up>
                <UpButton>Continue your shopping</UpButton>
                <UpTexts>
                    <UpText>Shopping Bags(3)</UpText>
                    <UpText>Your Wishlist(5)</UpText>
                </UpTexts>
                <UpButton type='filled'>Checkout</UpButton>
            </Up>
            <Bottom>
                <Information>
                    <Product>
                        <ProductDetail>
                            <Image src= "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName>
                                    <b>Product: </b> Hats
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 78829292929
                                </ProductId>
                                <ProductColor color='red' />
                                <ProductSize>
                                    <b>Size: </b> 37.5
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmtContainer>
                                <Add />
                                <ProductAmt>5</ProductAmt>
                                <Remove />
                            </ProductAmtContainer>
                            <ProductPrice>$50</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                            <Details>
                                <ProductName>
                                    <b>Product: </b> Hats
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 78829292929
                                </ProductId>
                                <ProductColor />
                                <ProductSize>
                                    <b>Size: </b> 37.5
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmtContainer>
                                <Add />
                                <ProductAmt>5</ProductAmt>
                                <Remove />
                            </ProductAmtContainer>
                            <ProductPrice>$50</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Information>
                <Order>
                    <OrderName>Orders</OrderName>
                    <OrderItem>
                        <OrderItemText>Subtotal</OrderItemText>
                        <OrderItemPrice>$23</OrderItemPrice>
                    </OrderItem>
                    <OrderItem>
                        <OrderItemText>Shipping</OrderItemText>
                        <OrderItemPrice>$23</OrderItemPrice>
                    </OrderItem>
                    <OrderItem>
                        <OrderItemText>Shipping Discount</OrderItemText>
                        <OrderItemPrice>$23</OrderItemPrice>
                    </OrderItem>
                    <OrderItem type='total'>
                        <OrderItemText>Total</OrderItemText>
                        <OrderItemPrice>$23</OrderItemPrice>
                    </OrderItem>
                    <Button>Checkout Now</Button>
                </Order>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart