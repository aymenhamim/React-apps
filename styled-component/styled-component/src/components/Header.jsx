import { Link } from 'react-router';
import Button from './Button';
import {
  StyledHeader,
  StyledUl,
  StyledLi,
  Container,
} from './styles/Header.styled';
import Products from '../pages/Products';

function Header() {
  return (
    <StyledHeader bg="lightblue">
      <h3>LOGO</h3>
      <Container>
        <StyledUl>
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>

          <StyledLi>
            <Link to="/products">Products</Link>{' '}
          </StyledLi>

          <StyledLi>
            <Link to="/contact">Contact US</Link>
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
