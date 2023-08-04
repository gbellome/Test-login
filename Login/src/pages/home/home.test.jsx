import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Main from 'src/utils/Main/Main'
import { useState } from 'react'
import { MuiColorInput } from 'mui-color-input'

const Home = () => {
  const [expanded, setExpanded] = useState(false)
  const [valuePickColorPrimary, setValuePickColorPrimary] = useState('#A12C34')
  const [valuePickColorSecondary, setValuePickColorSecondary] =
    useState('#2D2D2D')

  const handleChengeColorPrimary = (newValue) =>
    setValuePickColorPrimary(newValue)
  const handleChengeColorSecondary = (newValue) =>
    setValuePickColorSecondary(newValue)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <Main>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 5 }}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                General
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Modo oscuro"
                  labelPlacement="start"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                />
                <FormControlLabel
                  control={
                    <MuiColorInput
                      sx={{ border: 0, m: 1 }}
                      value={valuePickColorPrimary}
                      onChange={handleChengeColorPrimary}
                    />
                  }
                  label="Color primario"
                  labelPlacement="start"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                />
                <FormControlLabel
                  control={
                    <MuiColorInput
                      sx={{ border: 0, m: 1 }}
                      value={valuePickColorSecondary}
                      onChange={handleChengeColorSecondary}
                    />
                  }
                  label="Color secundario"
                  labelPlacement="start"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                />
              </FormGroup>
              <Box sx={{ display: 'flex', justifyContent: 'end', m: 2 }}>
                <Button variant="contained">Guardar</Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Main>
  )
}

export default Home
