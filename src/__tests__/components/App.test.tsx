import { render, screen } from "@testing-library/react";
import App from "@/components/App";

// mock the google-maps-react-markers package
jest.mock("google-maps-react-markers", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="google-map"></div>,
  };
});

describe("App", () => {
  test("renders GoogleMap component", () => {
    render(<App />);
    const googleMapElement = screen.getByTestId("google-map");
    expect(googleMapElement).toBeInTheDocument();
  });
});