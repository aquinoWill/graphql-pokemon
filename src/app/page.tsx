'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import MediaCard from '@/app/components/MediaCard'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import type { Query } from '@favware/graphql-pokemon'
import { client } from '@/app/server/ApolloClient/ApolloClient'

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

const GET_POKEMON_DETAILS = gql`
  {
    getPokemon(pokemon: dragonite) {
      sprite
      num
      species
      color
    }
  }
`

export default function HomePage() {
  const { loading, error, data } = useQuery<
    GraphQLPokemonResponse<'getPokemon'>
  >(GET_POKEMON_DETAILS, {
    client: client
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('Pokemon: ', data)

  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert severity='info' sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          This app uses the Next.js App Router and Material UI v5.
        </Alert>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard
              heading='CMYK'
              text='The CMYK color model'
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading='HSL and HSV'
              text='HSL (for hue, saturation, lightness)'
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading='RGB'
              text='An RGB color space is any additive color space based'
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading='CIELAB'
              text='The CIELAB color space, also referred to as L*a*b*'
            />
          </Grid>
        </Grid>
      </div>
      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0
          }
        }}
        variant='permanent'
        anchor='right'
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant='overline' sx={{ fontWeight: 500 }}>
              On this page
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
