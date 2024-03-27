import { useState } from 'react'
import './Nav.css'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Outlet } from "react-router-dom";


function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      href: "/home"
    },
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Contacs",
      href: "/contacts"
    },
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">Brger Menu</p>
          </NavbarBrand>
        </NavbarContent>
       
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default Nav
