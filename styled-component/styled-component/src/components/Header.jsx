import { Link } from 'react-router';
import Button from './Button';
import {
  StyledHeader,
  StyledUl,
  StyledLi,
  Container,
} from './styles/Header.styled';
import { TiHome } from 'react-icons/ti';
import { FaCartShopping } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';

function Header() {
  return (
    <StyledHeader bg="lightblue">
      <h3>LOGO</h3>
      <Container>
        <StyledUl>
          <StyledLi>
            <Link to="/landing">
              <TiHome />
              Home
            </Link>
          </StyledLi>

          <StyledLi>
            <Link to="/products">
              <FaCartShopping />
              Products
            </Link>{' '}
          </StyledLi>

          <StyledLi>
            <Link to="/contact">
              {' '}
              <MdMessage />
              Contact US
            </Link>
          </StyledLi>
        </StyledUl>
        <Button>
          <Link to="/login">SIGN UP</Link>
        </Button>
      </Container>
    </StyledHeader>
  );
}

export default Header;
