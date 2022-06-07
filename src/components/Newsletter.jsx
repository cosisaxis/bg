import styledComponents from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsiviness";
const Container = styledComponents.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf5f5;
  color: black;
`;
const Title = styledComponents.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styledComponents.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styledComponents.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between;
//    border: 1px solid lightgray;
${mobile({ width: "80%" })}
`;
const Input = styledComponents.input`
     border: none;
     flex: 8;
     padding-left: 20px;
`;
const Button = styledComponents.button`
  flex: 1;
  border: none;
  color: white;
  background-color: #ff91a4;

`;

const Newsletter = () => {
  return (
    <Container>
      <Title> BB News</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
