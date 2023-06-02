import Footer from "@all/widgets/footer";
import NavbarWid from "@all/widgets/navbar";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <>
      <NavbarWid />
      <Container className="mt-5">
        <Row>
          <Col>
            <h3>Hi,</h3>
            <br />
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque vero laboriosam autem blanditiis eos modi quis,
              voluptatibus tempora cumque soluta facere pariatur, sunt rerum
              saepe ut placeat velit sequi maiores dolore tempore et.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              natus, nostrum ratione dolores quasi saepe consectetur debitis
              necessitatibus! At itaque rem natus expedita, iste quasi quia
              ipsam laudantium quo libero ut, distinctio repellat vero inventore
              exercitationem incidunt minima sed. Similique beatae deleniti
              voluptatibus dolores. Commodi et quam quaerat blanditiis possimus
              exercitationem neque nesciunt quidem fugiat!
            </h5>
          </Col>
          <Col>
            <img
              className="img-fluid"
              src="https://i.postimg.cc/8CpZ6Bd5/beautiful-woman-cooking-in-her-kitchen-vector-24920863.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;
