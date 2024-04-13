import { render, screen } from "@testing-library/react";
import Stations from "@/components/Stations";

describe("Stations", () => {
  test("renders station names", () => {
    render(<Stations />);
    const stationElements = screen.getAllByRole("listitem");
    expect(stationElements).toHaveLength(10);
    expect(stationElements[0]).toHaveTextContent("Sydney");
    expect(stationElements[1]).toHaveTextContent("Melbourne");
    expect(stationElements[2]).toHaveTextContent("Brisbane");
    expect(stationElements[3]).toHaveTextContent("Perth");
    expect(stationElements[4]).toHaveTextContent("Adelaide");
    expect(stationElements[5]).toHaveTextContent("Gold Coast");
    expect(stationElements[6]).toHaveTextContent("Newcastle");
    expect(stationElements[7]).toHaveTextContent("Canberra");
    expect(stationElements[8]).toHaveTextContent("Wollongong");
    expect(stationElements[9]).toHaveTextContent("Sunshine Coast");
  });
});