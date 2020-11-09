import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import useStyles from './styles'
import { idContext } from './contexts'
import { getPosts } from './actions/posts'
import './index.css'
const App = () => {
    const dispatch = useDispatch()
    const [currentId,setCurrentId] = useState(null)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <idContext.Provider value={{currentId,setCurrentId}}>
            <Container maxWidth='lg'>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                    <Typography className={classes.heading} variant='h3' align='center'>Memories</Typography>
                    <img className={classes.image} src={memories} alt='memories' height='60' />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify='space-between' alignItems='stretch' spacing={1}>
                            <Grid item xs={12} sm={12} lg={8} md={6}>
                                <Posts />
                            </Grid>
                            <Grid item sm={12} lg={4} md={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </idContext.Provider>
    )
}
export default App;