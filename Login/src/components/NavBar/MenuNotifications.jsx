import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Tooltip,
} from '@mui/material'
import { NotificationsRounded } from '@mui/icons-material'
import { useState } from 'react'

const MenuNotifications = () => {
  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <NotificationsRounded />
                ) : (
                  <NotificationsRounded />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <NotificationsRounded />
                ) : (
                  <NotificationsRounded />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Tooltip title="Notificaciones">
        <IconButton size="large" onClick={toggleDrawer(true)} color="inherit">
          <NotificationsRounded />
        </IconButton>
      </Tooltip>
      <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
        {list('right')}
      </Drawer>
    </>
  )
}

export default MenuNotifications
