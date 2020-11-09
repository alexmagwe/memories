import React,{useContext,useState} from 'react'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { idContext } from '../../../contexts'
import {deletePost,likePost} from '../../../actions/posts'
function Post({ post }) {
    const dispatch=useDispatch()
    let {setCurrentId}=useContext(idContext)
    const [localLikeCount, setLocalLikeCount] = useState(post.likeCount)
    const classes = useStyles()
    const handleEdit = () => {
        setCurrentId(post._id)
    }
    const handleLike = () => {
        setLocalLikeCount(prev=>prev+=1)
        dispatch(likePost(post._id))
    }

    const handleDelete = () => {
        let res=window.confirm('are you sure you want to delete')
        if (res){
        dispatch(deletePost(post._id))
    }

    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size='small' onClick={handleEdit}>
                    <MoreHorizIcon />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color={"textSecondary"}>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
                <Typography variant='h5' className={classes.title}>{post.title} </Typography>
            <CardContent>
                <Typography variant='body2' component='h2' gutterBottom color={'textSecondary'}>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color='primary' size='small' onClick={handleLike}><ThumbUpAltIcon fontSize='small' />
                    {localLikeCount}
                </Button>
                <Button color='primary' size='small' onClick={handleDelete}>
                    <DeleteIcon fontSize='small' />
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
