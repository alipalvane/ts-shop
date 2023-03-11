import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { BagFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
const Navbar = () => {
  const { cartQty, openCart, closeCart } = useCartContext();
  return (
    <NavbarBs className="bg-dark text-light mb-3">
      <Container className="mt-2">
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} className="text-light">
            Home
          </Nav.Link>
          <Nav.Link to="/shop" as={NavLink} className="text-light">
            Shop
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="text-light">
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-light"
          className="d-flex align-items-center justify-content-center position-relative"
          style={{
            width: "3rem",
            height: "3rem",
            fontSize: "1.2rem",
          }}
          onClick={openCart}
        >
          <BagFill />
          {cartQty ? (
            <div
              className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
              style={{
                color: "#fff",
                width: "1.3rem",
                height: "1.3rem",
                position: "absolute",
                fontSize: "1.2rem",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQty}
            </div>
          ) : null}
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
