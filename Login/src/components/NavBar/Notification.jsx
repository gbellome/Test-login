import { CloseRounded } from '@mui/icons-material'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material'

const Notification = ({ item, index, handle }) => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        key={index}
        disablePadding
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handle(item)}
          >
            <CloseRounded fontSize="small" />
          </IconButton>
        }
      >
        <ListItemButton sx={{ py: 2 }} key={index}>
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
