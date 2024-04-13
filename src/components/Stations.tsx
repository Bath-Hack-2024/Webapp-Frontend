import { List } from "@mui/material"
import Station, { StationProps } from "./Station"

const stations: StationProps[] = [
  { lat: -33.8688, lng: 151.2093, name: "Sydney" },
  { lat: -37.8136, lng: 144.9631, name: "Melbourne" },
  { lat: -27.4698, lng: 153.0251, name: "Brisbane" },
  { lat: -31.9505, lng: 115.8605, name: "Perth" },
  { lat: -34.9285, lng: 138.6007, name: "Adelaide" },
  { lat: -28.0167, lng: 153.4000, name: "Gold Coast" },
  { lat: -32.9167, lng: 151.7500, name: "Newcastle" },
  { lat: -35.2809, lng: 149.1300, name: "Canberra" },
  { lat: -34.4240, lng: 150.8931, name: "Wollongong" },
  { lat: -26.6500, lng: 153.0667, name: "Sunshine Coast" },
]

export default function Stations() {
  return (
    <List>
      {stations.map((station, index) => (
        <Station {...station} key={index} />
      ))}
    </List>
  )
}