import { Container, UncontrolledCarousel } from "reactstrap";

const Banner = ({ items }) => {
  return (
    <Container className="mt-3">
      {items && Array.isArray(items) && (
        <UncontrolledCarousel
          items={items?.map((i, k) => ({ ...i, key: k }))}
        />
      )}
    </Container>
  );
};

export default Banner;
