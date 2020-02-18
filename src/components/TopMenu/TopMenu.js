import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from '../Cart';
import {ReactComponent as Logo } from "../../assets/svg/logo.svg";


import "./TopMenu.scss";


export default function TopMenu(props) {
    const { productsCart, getProductsCart, products } = props;

    
    return (
        <Navbar bg="dark" variant="dark" className="top-menu">
 <Container>
     <BrandNav/>
    {/* <MenuNav /> */ }
   <Cart productsCart={productsCart} 
   getProductsCart={getProductsCart}
   products={products}
   />
 </Container>
        </Navbar>

);
}

function BrandNav() {
    return (
    <Navbar.Brand>
        
   <Logo />
   <h2> ECOMERCE DE UNA TIENDA DE HELADOS</h2>
        
        </Navbar.Brand>
    );
}

function MenuNav() {
    return (
        <Nav className="mr-auto">
            <Nav.Link href = "#">Aperitivos</Nav.Link>
            <Nav.Link href = "#">confites</Nav.Link>
            <Nav.Link href = "#">cervezas </Nav.Link>

        </Nav>
    )
}