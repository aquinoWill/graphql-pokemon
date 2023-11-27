import { Grid, Typography, GridProps, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Wrapper = styled(Grid)<GridProps>(({ theme }) => ({
  borderRadius: `30px`,
  justifyContent: `center`,
  margin: `0 ${theme.spacing(2)}`,
  padding: theme.spacing(2, 2, 4, 2),
  border: `2px solid ${theme.palette.primary.main}`
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[900],
  margin: theme.spacing(2),
  fontWeight: theme.typography.fontWeightBold
}))
