export interface StationProps {
  lat: number;
  lng: number;
  name: string;
}

function Station(props: StationProps) {
  console.log(`do something with: ${props}`)
  return (
    <div data-testid="station">
      <h2>{props.name}</h2>
      <p>Latitude: {props.lat}</p>
      <p>Longitude: {props.lng}</p>
    </div>
  )
}

export default Station;