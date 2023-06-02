import { Container, Navbar, NavbarBrand } from "reactstrap";

const NavbarWid = () => {
  return (
    <Container>
      <Navbar className="my-2" color="light" light>
        <NavbarBrand href="/">Food House</NavbarBrand>
        <div>
          <NavbarBrand href="/products">
            <img src="https://img.icons8.com/ios/26/tableware.png" />
          </NavbarBrand>
          <NavbarBrand href="/order">
            <img
              src="https://img.icons8.com/ios/26/partially-shipped.png"
            />
          </NavbarBrand>
        </div>
      </Navbar>
    </Container>
  );
};

export default NavbarWid;
