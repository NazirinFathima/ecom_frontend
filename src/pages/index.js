import { getHomeCarousels, getHomeProducts } from "@all/apis/homeApis";
import Banner from "@all/widgets/bannerCarousel";
import Footer from "@all/widgets/footer";
import NavbarWid from "@all/widgets/navbar";
import ProductCarousel from "@all/widgets/productCarousel";

export const getStaticProps = async () => {
  const carousels = await getHomeCarousels("topBanner");
  const banner = await getHomeCarousels("secondBanner");
  const featured = await getHomeProducts("featured");
  const trending = await getHomeProducts("trending");
  return { props: { carousels, banner, featured, trending }, revalidate: 60 };
};

export default function Home({ carousels, banner, featured, trending }) {
  return (
    <>
      <NavbarWid />
      <Banner items={carousels} />
      <ProductCarousel items={featured} title="Noon Special" />
      <Banner items={banner} />
      <ProductCarousel items={trending} title="Deserts" />
      <Footer />
    </>
  );
}
