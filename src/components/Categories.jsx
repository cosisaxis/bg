import styledComponents from "styled-components"
import { categories } from "../data"
import CategoriesListItem from "./CategoriesListItem"
import { mobile } from "../responsiviness"

const Container = styledComponents.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
  return <Container>
      {categories.map(item => (
          <CategoriesListItem item={item} key={item.id} />
      ))}
    </Container>;
  
}

export default Categories