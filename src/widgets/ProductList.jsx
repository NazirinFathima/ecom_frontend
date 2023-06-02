import { Container } from "reactstrap";
import Product from "./product";

const ProductsList = ({ products }) => {
  return (
    <Container className="d-flex flex-wrap justify-content-between">
      {products &&
        Array.isArray(products) &&
        products.map((each, i) => <Product key={i} data={each} />)}
    </Container>
  );
};

export default ProductsList;
