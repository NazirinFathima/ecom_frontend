import { getOrders } from "@all/apis/homeApis";
import { useState } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Orders = () => {
  const [orders, setOrdes] = useState([]);
  const findOrder = async () => {
    const email = document.getElementById("email").value;
    const order = await getOrders(email);
    if (order && Array.isArray(order)) {
      setOrdes(order);
    }
  };
  return (
    <Container>
      <h4 className="mt-5">Find Orders</h4>
      <hr />
      <FormGroup row className="mt-5">
        <Label sm={1}>Email</Label>
        <Col sm={5}>
          <Input id="email" name="name" type="text" />
        </Col>
        <Col sm={1}>
          <Button onClick={findOrder} color="success" block>
            Search
          </Button>
        </Col>
      </FormGroup>
      <Row className="mt-5">
        {orders &&
          orders.map((each, i) => (
            <Col sm="6" key={i}>
              <Card body className="mt-3">
                <CardTitle tag="h5">#{each?.id}</CardTitle>
                <CardText>
                  Quantity : {each?.quantity}
                  <br />
                  Price : {each?.price}
                </CardText>
                {each?.status ? (
                  <span className="bg-success text-center p-2">Delivered</span>
                ) : (
                  <span className="bg-warning text-center p-2">pending</span>
                )}
                <br />
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Orders;
