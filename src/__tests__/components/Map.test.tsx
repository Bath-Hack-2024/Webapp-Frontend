import { render, screen } from "@testing-library/react";
import Map from "@/components/Map";

// mock the google-maps-react-markers package
jest.mock("google-maps-react-markers", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="google-map"></div>,
  };
});

describe("Map", () => {
  test("renders GoogleMap component with coordinates", () => {
    render(<Map />);
    const googleMapElement = screen.getByTestId("google-map");
    expect(googleMapElement).toBeInTheDocument();
  });
});