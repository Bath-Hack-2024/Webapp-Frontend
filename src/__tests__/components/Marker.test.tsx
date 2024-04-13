import { render, screen } from "@testing-library/react";
import Marker from "@/components/Marker";

describe("Marker", () => {
  test("renders marker with correct ID", () => {
    const MarkerProps = {
      lat: 51.5074,
      lng: 0.1278,
      text: "London"
    };
    
    render(<Marker {...MarkerProps} />);
    const markerElement = screen.getByText(`I'm marker ${MarkerProps.text}`);
    expect(markerElement).toBeInTheDocument();
  });
});