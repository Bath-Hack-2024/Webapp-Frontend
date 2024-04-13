import StyledLink from "./StyledLink"
import "@/css/Header.css";

function Header() {
  return (
    <div data-testid="header-container" id="header-container">
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </div>
  )
}

export default Header;