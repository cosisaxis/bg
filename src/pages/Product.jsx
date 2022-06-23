import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styledComponents from "styled-components";
import Deals from "../components/Deals";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsiviness";

const Container = styledComponents.div`
`;
const Wrapper = styledComponents.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styledComponents.div`
  flex: 1;
  padding: 0px 50px;
  
`;
const Image = styledComponents.img`
 width: 100%;
 object-fit: cover;
 height: 90vh;
 ${mobile({height: "40vh" })}
`;
const InfoContainer = styledComponents.div`
 flex: 1;
 ${mobile({padding: "10px" })}
`;
const Title = styledComponents.h2`
font-weight: bold;
`;
const Description = styledComponents.p`
margin: 20px 0px;
`;
const Price = styledComponents.span`
font-weight: 100;
font-size: 40px;
`;
const FilteringContainer = styledComponents.div`
 width: 50%;
 margin: 30px 0px;
 display: flex;
 justify-content: space-between;
 ${mobile({width: "100%" })}
`;
const Filter = styledComponents.div`
 display: flex;
 align-items: center;
`;
const FilterName = styledComponents.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColoring = styledComponents.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color}
`;
const FilterSizing = styledComponents.select`
 margin-left: 10px;
 padding: 5px;
`;
const FilterSizingOption = styledComponents.option`
`;

const ItemContainer = styledComponents.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
${mobile({width: "100%" })}
`
const PriceContainer = styledComponents.div`
display: flex;
align-items: center;
font-weight: 600;
`
const Amount = styledComponents.span`
width: 30px;
height: 30px;
border-radius: 30px;
border: 1px solid #FFB6C1;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styledComponents.button`
padding: 15px;
border: 2px solid #FF69B4;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover{
    background-color: #f8f4f4;
}
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Deals />
      <Wrapper>
        <ImageContainer>
          <Image src="https://www.nakedwardrobe.com/media/catalog/product/cache/5513ddbb0078207de620530b25cacea4/l/o/look6_1279-edit.jpeg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Dresses</Title>
          <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.
          </Description>
          <Price>20</Price>
          <FilteringContainer>
            <Filter>
              <FilterName>Colors</FilterName>
              <FilterColoring color="black" />
              <FilterColoring color="red" />
              <FilterColoring color="gray" />
            </Filter>
            <Filter>
              <FilterName>Sizing</FilterName>
              <FilterSizing>
                <FilterSizingOption>XS</FilterSizingOption>
                <FilterSizingOption>S</FilterSizingOption>
                <FilterSizingOption>M</FilterSizingOption>
                <FilterSizingOption>L</FilterSizingOption>
                <FilterSizingOption>XL</FilterSizingOption>
              </FilterSizing>
            </Filter>
          </FilteringContainer>
          <ItemContainer>
            <PriceContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
              <Button>Add to cart</Button>
            </PriceContainer>
          </ItemContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
