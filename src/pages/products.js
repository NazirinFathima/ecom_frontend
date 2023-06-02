import { getProducts } from "@all/apis/homeApis";
import ProductsList from "@all/widgets/ProductList";
import Footer from "@all/widgets/footer";
import NavbarWid from "@all/widgets/navbar";

export const getStaticProps = async () => {
  const products = await getProducts();
  return { props: { products } };
};

const Products = ({ products }) => {
  return (
    <>
      <NavbarWid />
      <ProductsList products={products} />
      <Footer />
    </>
  );
};

export default Products;
