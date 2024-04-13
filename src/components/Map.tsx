import GoogleMap from "google-maps-react-markers";

const coordinates = [
  { lat: 45.4046987, lng: 12.2472504, name: 'Venice' },
  { lat: 41.9027835, lng: 12.4963655, name: 'Rome' },
  { lat: 51.5073509, lng: -0.1277583, name: 'London' },
  { lat: 48.856614, lng: 2.3522219, name: 'Paris' },
  { lat: 40.7127753, lng: -74.0059728, name: 'New York' },
  { lat: 34.0522342, lng: -118.2436849, name: 'Los Angeles' },
  { lat: 37.7749295, lng: -122.4194155, name: 'San Francisco' },
  { lat: 35.6894875, lng: 139.6917064, name: 'Tokyo' },
  { lat: 22.3193039, lng: 114.1693611, name: 'Hong Kong' },
  { lat: -33.8688197, lng: 151.2092955, name: 'Sydney' },
]

const Map = () => {
  return (
    <div>
      <GoogleMap
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
        defaultZoom={5}
        mapMinHeight="100vh"
        onChange={(map) => console.log('Map moved', map)}
      >
        {coordinates.map(({ lat, lng, name }, index) => (
          <Marker
            key={index}
            lat={lat}
            lng={lng}
            markerId={name}
          // onClick={onMarkerClick} // you need to manage this prop on your Marker component!
          // draggable={true}
          // onDragStart={(e, { latLng }) => {}}
          // onDrag={(e, { latLng }) => {}}
          // onDragEnd={(e, { latLng }) => {}}
          />
        ))}
      </GoogleMap>
    </div>
  )
}

interface MarkerProps {
  lat: number
  lng: number
  markerId: string
  onClick?: (markerId: string) => void
}

const Marker = (props: MarkerProps) => {
  const { markerId } = props
  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: "50%",
        height: "24px",
        width: "24px",
        transform: "translate(-50%, -100%)",
        backgroundColor: "red",
      }}
    >
      I'm marker {markerId}
    </div>
  )
}

export default Map