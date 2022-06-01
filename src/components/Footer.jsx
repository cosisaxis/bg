import { styled } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styledComponents from "styled-components";

const Container = styledComponents.div`
 display: flex;
`;
const Left = styledComponents.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
`;
const Logo = styledComponents.h1`
`;
const Desc = styledComponents.p`
 margin: 20px 0px;
`;
const SocialContainer = styledComponents.div`
 display: flex;
`;
const Socials = styledComponents.div`
  width: 40px;
  color: white;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: #${(props) => props.color}
`;
const Center = styledComponents.div`
 flex: 1;
 padding: 20px;
`;

const Title = styledComponents.h3`
  margin-bottom: 30px;
  font-weight: bold;
`;
const List = styledComponents.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;
const ListItems = styledComponents.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styledComponents.div`
 flex: 1;
 padding: 20px;
`;

const ContactItem = styledComponents.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
`;
const Payment = styledComponents.img`
width: 50%
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BB</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </Desc>
        <SocialContainer>
          <Socials color="3B5999">
            <Facebook />
          </Socials>
          <Socials color="E4405F">
            <Instagram />
          </Socials>
          <Socials color="55ACEE">
            <Twitter />
          </Socials>
          <Socials color="E60023">
            <Pinterest />
          </Socials>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Navigation</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Hair</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>Men's Fashion</ListItems>
          <ListItems>Women's Fashion</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 27th Fleetwood drive, May
          pen, Clarendon
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +18766898389
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> bohemianbabe@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
