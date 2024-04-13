import "@/css/Station.css";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SatelliteAlt from '@mui/icons-material/SatelliteAlt';

export interface StationProps {
  lat: number;
  lng: number;
  name: string;
}

function Station(props: StationProps) {
  return (
    <ListItem className="station" data-testid="station">
      <ListItemAvatar>
        <Avatar>
          <SatelliteAlt />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.name}
        secondary={`Latitude: ${props.lat}, Longitude: ${props.lng}`}
      />
    </ListItem>
  )
}

export default Station;