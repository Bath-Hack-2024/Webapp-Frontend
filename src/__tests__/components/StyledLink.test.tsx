import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import StyledLink from "@/components/StyledLink";

describe("StyledLink", () => {
  test("renders a link with correct props", () => {
    const to = "/some-path";
    const children = "Link Text";

    render(
      <BrowserRouter>
        <StyledLink to={to}>{children}</StyledLink>
      </BrowserRouter>
    );

    const linkElement = screen.getByText(children);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", to);
  });
});