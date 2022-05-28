import styledComponents from "styled-components"
import { categories } from "../data"
import CategoriesListItem from "./CategoriesListItem"


const Container = styledComponents.div`
  display: flex;
  padding: 20px;
`

const Categories = () => {
  return <Container>
      {categories.map(item => (
          <CategoriesListItem item={item} key={item.id} />
      ))}
    </Container>;
  
}

export default Categories