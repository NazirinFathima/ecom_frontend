import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Address from "./address";
import { useState } from "react";

const ProductDetails = ({ product }) => {
  const { id, name, description, amount } = product || {};
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleBuy = () => {
    setModal(true);
  };
  return (
    <div className="mt-5 ms-5">
      <h1>{name}</h1>
      <br />
      <p>{description}</p>
      <br />
      <h3>Rs. {quantity * amount}</h3>
      <br />
      <Row>
        <Col lg="8">
          <FormGroup>
            <Input
              onChange={(e) => setQuantity(e.target.value)}
              name="quantity"
              type="select"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <Button onClick={handleBuy} className="btn-success" block>
              Buy now
            </Button>
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <a href="tel:977461662" className="btn btn-warning d-block">
              <img
                src="https://img.icons8.com/ios-glyphs/24/phone-disconnected.png"
                alt="Phone Icon"
              />
            </a>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <div className="d-flex my-2">
        <img
          className="me-3"
          src="https://img.icons8.com/material/36/get-cash--v1.png"
        />
        <h6 className="mt-2">Cash on delivery </h6>
      </div>
      <Address id={id} modal={modal} quantity={quantity} setModal={setModal} />
    </div>
  );
};

export default ProductDetails;
