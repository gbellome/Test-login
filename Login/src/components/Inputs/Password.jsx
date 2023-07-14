import { useState, useEffect } from 'react'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import PasswordStrengthBar from 'react-password-strength-bar'

const Password = ({ caption, value, onChange, indicator }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <FormControl variant="outlined" fullWidth style={{ marginBottom: '-1rem' }}>
      <InputLabel htmlFor="outlined-adornment-password">{caption}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={caption}
      />
      {indicator && (
        <PasswordStrengthBar
          password={value}
          scoreWords={[
            'Poco segura',
            'Poco segura',
            'Segura',
            'Bastante segura',
            'Excelente',
          ]}
          minLength={6}
          shortScoreWord={''}
        />
      )}
    </FormControl>
  )
}

export default Password
