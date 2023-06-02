const ProductImgs = ({ product }) => {
  const { img1, img2, img3 } = product || {};
  return (
    <div className="pdp-image">
      <img className="single-product-img img-fluid" alt="Sample" src={img1} />
      <div className="single-product-sub">
        <img className="imgs" alt="Sample" src={img2} />
        <img className="imgs" alt="Sample" src={img3} />
      </div>
    </div>
  );
};

export default ProductImgs;
