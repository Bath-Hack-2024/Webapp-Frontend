import { render, screen } from "@testing-library/react";
import GoogleMap from "@/components/GoogleMap";

describe("GoogleMap", () => {
  test("renders a Google Map", async () => {
    render(<GoogleMap />);
    expect(screen.getByTestId("google-map")).toBeInTheDocument();
  });
});
