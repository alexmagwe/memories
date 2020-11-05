import React ,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import useStyles from './styles'
import {getPosts} from './actions/posts'
const App = () => {
    const dispatch=useDispatch()
    const classes=useStyles()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h3' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={1}>
                        <Grid item xs={12} lg={3} sm={3}>
                            <Posts />
                        </Grid>
                        <Grid item s={12} lg={4} sm={6}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    )
}
export default App;