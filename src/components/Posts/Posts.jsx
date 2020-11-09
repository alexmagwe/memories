import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
function Posts() {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    return (<>
        {
            !posts.length ? (<CircularProgress />) : (
                <Grid className={classes.mainContainer} container alignItems='stretch' spacing={2}>
                    { posts.length?posts.map(post =>
                        <Grid key={post._id} item xs={12} sm={12} md={6} lg={6}>
                            <Post post={post} />
                        </Grid>
                    ):null
                    }
                </Grid>
            )
        }
    </>
    )
}

export default Posts
