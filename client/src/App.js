import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import PicNest from './images/PicNest.jpg'

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import useStyles from './styles.js';


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.image} variant="h2" align="center">PicNest</Typography>
        <img className={classes.image} src={PicNest} alt="PicNest" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>

        </Container>
      </Grow>
    </Container>

  );
}

export default App;
