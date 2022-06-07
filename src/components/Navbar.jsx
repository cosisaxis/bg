import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import React from "react";
import styledComponents from 'styled-components'
import { mobile } from "../responsiviness";

const Container = styledComponents.div`
   height: 80px;
   ${mobile({ height: "50px"})}
`;
const Wrapper = styledComponents.div`
    padding: 10px 20px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styledComponents.div`
   flex: 1;
   display: flex;
   align-items: center;
`;
const Languages = styledComponents.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchContainer = styledComponents.div`
     border: 0.5px solid lightgray;
     display: flex;
     align-items: center;
     margin-left: 25px;
     padding: 5px;
`;
const Input = styledComponents.input`
    border: none;
    ${mobile({ width: "50px" })}
`;
const Center = styledComponents.div`
   flex: 1;
   text-align: center;
`;
const Logo = styledComponents.h1`
   font-family: 'Lobster', cursive; 
   font-weight: bold;
   ${mobile({ fontSize: "24px" })}
`;
const Right = styledComponents.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItems = styledComponents.div`
    font-size: 14px;
    cursor: pointer;
    margin: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input />
            <Search style= {{color:"red", fontSize:"16px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BB</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Login</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
