import { submitOrder } from "@all/apis/homeApis";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
} from "reactstrap";

const Address = ({ modal, setModal, id, quantity }) => {
  const router = useRouter();
  const [address, setAddress] = useState({});

  const submit = async () => {
    const orderData = {
      ...address,
      product: id,
      quantity,
    };
    if (address && address?.email && address?.phone) {
      order = await submitOrder(orderData);
      if (order && typeof order?.id === "string") {
        router.push("/confirm");
      }
    }
    setModal(false);
  };
  const fieldChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  return (
    <Modal isOpen={modal} toggle={() => setModal(!modal)}>
      <Container className="d-flex justify-content-center p-5">
        <Form className="w-100">
          <h1 className="text-center my-5">Checkout Address</h1>
          <FormGroup row>
            <Label sm={2}>Name</Label>
            <Col sm={10}>
              <Input onChange={fieldChange} name="name" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Email</Label>
            <Col sm={10}>
              <Input onChange={fieldChange} name="email" type="email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Phone</Label>
            <Col sm={10}>
              <Input onChange={fieldChange} name="phone" type="number" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Address</Label>
            <Col sm={10}>
              <Input onChange={fieldChange} name="address" type="textarea" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Pin</Label>
            <Col sm={10}>
              <Input onChange={fieldChange} name="pin" type="number" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}></Label>
            <Col sm={10}>
              <Button color="success" onClick={submit} block>
                Confirm
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    </Modal>
  );
};

export default Address;
