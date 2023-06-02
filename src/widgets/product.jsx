import Link from "next/link";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Product = ({ data }) => {
  return (
    <Link className="nav-link my-2" href={`/product/${data?.id}`}>
      <Card className="card-outer">
        <img className="image" alt="Sample" src={data?.img1} />
        <CardBody>
          <CardTitle tag="h5">{data?.name}</CardTitle>
          <CardText className="d-flex justify-content-between">
            Rs. {data?.amount}
            <Button color="warning">Buy</Button>
          </CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default Product;
