import styledComponents from "styled-components";
import { mobile } from "../responsiviness";
const Container = styledComponents.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styledComponents.img`
  width: 100%; 
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Information = styledComponents.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styledComponents.h1`
  color: white;
  margin-bottom: 20px
  font-weight: bold;
`;
const Button = styledComponents.button`
   border: none;
   padding: 10px;
   background-color: white;
   color: #FF1493;
   cursor: pointer;
   font-weight: bold;
`;

const CategoriesListItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Information>
        <Title>{item.title}</Title>
        <Button>BUY NOW</Button>
      </Information>
    </Container>
  );
};

export default CategoriesListItem;
