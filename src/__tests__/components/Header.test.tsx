import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  test("renders a header", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("header-container")).toBeInTheDocument();
  });
});