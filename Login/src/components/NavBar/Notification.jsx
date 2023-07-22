import { CloseRounded } from '@mui/icons-material'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material'

const Notification = ({ item }) => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        disablePadding
        secondaryAction={
          <IconButton edge="end" aria-label="close">
            <CloseRounded fontSize="small" />
          </IconButton>
        }
      >
        <ListItemButton sx={{ py: 2 }}>
          <ListItemAvatar>
            <Avatar>{item.Icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.subName} />
        </ListItemButton>
      </ListItem>
    </>
  )
}

export default Notification
