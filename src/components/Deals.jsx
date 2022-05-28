
import styledComponents from 'styled-components'

const Container = styledComponents.div`
  height: 30px;
  background-color: #FFB6C1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`
const Deals = () => {
    return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Deals;