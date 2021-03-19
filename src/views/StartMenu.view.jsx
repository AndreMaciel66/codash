import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../images/codash-logo.png'
import styled from 'styled-components'

const StartMenu = () => {
    return (
      <StyledApp>

        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
          <Typography variant='h1'>Welcome to</Typography>
          <img src={logo} className="App-logo" alt="logo" style={{width: '38%'}} />
          <Button href='/dashboards'>
            <Typography color='primary' variant='h3'>&gt;_ get started</Typography>
          </Button>
        </Grid>
      </StyledApp>
    );
}

const StyledApp = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

export default StartMenu;