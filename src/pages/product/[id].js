import { getProduct } from "@all/apis/homeApis";
import Footer from "@all/widgets/footer";
import NavbarWid from "@all/widgets/navbar";
import ProductDetails from "@all/widgets/productDetails";
import ProductImgs from "@all/widgets/productImages";
import { Col, Container, Row } from "reactstrap";

export const getServerSideProps = async ({ params: { id } }) => {
  const product = await getProduct(id);
  return { props: { product } };
};

export default function Home({ product }) {
  return (
    <>
      <NavbarWid />
      <Container>
        <Row>
          <Col>
            <ProductImgs product={product} />
          </Col>
          <Col>
            <ProductDetails product={product} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
