import { Container } from "reactstrap";
import Product from "./product";

const ProductCarousel = ({ items, title }) => {
  return (
    <Container className="my-5">
      {items && Array.isArray(items) && (
        <>
          <h1 className="mb-5 border-bottom">{title || "Products"}</h1>
          <div className="d-flex justify-content-between flex-wrap">
            {items.map((e, k) => (
              <Product key={k} data={e} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default ProductCarousel;
