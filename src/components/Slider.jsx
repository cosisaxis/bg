import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styledComponents from "styled-components"


const Container = styledComponents.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Wrapper = styledComponents.div`
   height: 100%;
   display: flex;
   transform: translateX(0vw);
`
const Slide = styledComponents.div`
   display: flex;
   align-items: center;
   width: 100vw;
   height: 100vh;
`
const ImagesContainer = styledComponents.div`
   height: 100%;
   flex: 1;
`
const Image = styledComponents.img`
   height: 80%;
`
const InformationContainer = styledComponents.div`
    flex: 1;
    padding: 50px;
`
const Name = styledComponents.h1`
   font-size: 70px;
`
const Description = styledComponents.p`
   margin: 40px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;

`
const Button = styledComponents.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;

`
const Arrow = styledComponents.div`
   width: 50px;
   height: 50px;
   background-color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props=> props.direction === 'left' && "10px"};
   right: ${props=> props.direction === 'right' && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
   
`
const Slider = () => {
    const[slidingIndex, setSlidingIndex] = useState(0);
    const clicker = (direction) =>{

    };
  return (
      <Container>
          <Arrow direction='left' onClick={() => clicker("left")}>
              <ArrowLeftOutlined />
          </Arrow>
          <Wrapper>
             <Slide bg="f5fafd">
              <ImagesContainer>
                  <Image src="https://www.nakedwardrobe.com/media/catalog/product/cache/1/image/1800x/c9d61add4726113647d64de92311f176/n/a/naked__5222-edit.jpg" />
              </ImagesContainer>
              <InformationContainer>
                  <Name>FALL SALE</Name>
                  <Description>GET A 50% DISCOUNT FROM ALL OUR CATEGORIES</Description>
                  <Button>SHOW NOW</Button>

              </InformationContainer>
              </Slide>
             <Slide bg="fcf1ed">
              <ImagesContainer>
                  <Image src="https://www.nakedwardrobe.com/media/catalog/product/cache/1/image/1800x/c9d61add4726113647d64de92311f176/n/a/naked__5222-edit.jpg" />
              </ImagesContainer>
              <InformationContainer>
                  <Name>SUMMER SALE</Name>
                  <Description>GET A 50% DISCOUNT FROM ALL OUR CATEGORIES</Description>
                  <Button>SHOW NOW</Button>

              </InformationContainer>
              </Slide>
             <Slide bg="fbf0f4">
              <ImagesContainer>
                  <Image src="https://www.nakedwardrobe.com/media/catalog/product/cache/1/image/1800x/c9d61add4726113647d64de92311f176/n/a/naked__5222-edit.jpg" />
              </ImagesContainer>
              <InformationContainer>
                  <Name>FALL SALE</Name>
                  <Description>GET A 50% DISCOUNT FROM ALL OUR CATEGORIES</Description>
                  <Button>SHOW NOW</Button>

              </InformationContainer>
              </Slide>
          </Wrapper>
          <Arrow direction='right' onClick={() => clicker("right")} >
              <ArrowRightOutlined />
          </Arrow>

      </Container>
    
  )
}

export default Slider