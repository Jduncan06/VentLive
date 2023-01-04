import { useState } from "react";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { HashLink as NavLink } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navContainer">
      <Navbar className="navbar-dark" fixed="top" z-index="5" expand="md">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav sticky="top" className="ms-auto navigation" navbar>
            <NavItem className="navBorderTop">
              <NavLink
                className="nav-link"
                to="/#Shows"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "#F16A74" }}
              >
                Shows
              </NavLink>
            </NavItem >
            <NavItem className='navBorder'>
              <NavLink
                className="nav-link"
                to="/#About"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "#F16A74" }}
              >
                About
              </NavLink>
            </NavItem >
            <NavItem className='navBorder'>
              <NavLink
                className="nav-link"
                to="/#Vent"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "#F16A74" }}
              >
                Vent!
              </NavLink>
            </NavItem>
            <NavItem className='navBorderBottom'>
              <NavLink
                className="nav-link"
                to="/#Contact"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "#F16A74" }}
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1760472957675164');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1760472957675164&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
