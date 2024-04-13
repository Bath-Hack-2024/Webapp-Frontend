jest.mock('google-map-react', () => {
  interface MockGoogleMapReactProps {
    children: React.ReactNode;
  };
  const MockGoogleMapReact = (props: MockGoogleMapReactProps) => <div>{props.children}</div>;
  return MockGoogleMapReact;
});

import { render, screen } from "@testing-library/react";
import GoogleMap from "@/components/GoogleMap";

describe("GoogleMap", () => {
  test("renders a Google Map", async () => {
    render(<GoogleMap />);
    expect(screen.getByTestId("google-map")).toBeInTheDocument();
  });
});
