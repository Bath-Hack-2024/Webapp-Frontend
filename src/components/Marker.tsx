interface MarkerProps {
  lat: number
  lng: number
  text: string
  onClick?: (markerId: string) => void
}

function Marker(props: MarkerProps) {
  const { text } = props;
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
      I'm marker {text}
    </div>
  )
}

export default Marker;