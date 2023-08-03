import { Box, IconButton, List, Drawer, Tooltip } from '@mui/material'
import { NotificationsRounded } from '@mui/icons-material'
import { useState } from 'react'
import Notification from './Notification'

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

  const listNotifications = [
    {
      Icon: <NotificationsRounded />,
      name: 'Inbox',
      subName: 'hace 1 año',
    },
    {
      Icon: <NotificationsRounded />,
      name: 'Starred',
    },
    {
      Icon: <NotificationsRounded />,
      name: 'Send email',
    },
    {
      Icon: <NotificationsRounded />,
      name: 'Drafts',
    },
  ]

  return (
    <>
      <Tooltip title="Notificaciones">
        <IconButton size="large" onClick={toggleDrawer(true)} color="inherit">
          {/* <Badge color="secondary" variant="dot"> */}
          <NotificationsRounded />
          {/* </Badge> */}
        </IconButton>
      </Tooltip>
      <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {listNotifications.map((item) => (
              <Notification item={item} key={item} />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default MenuNotifications
