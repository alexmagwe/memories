import React, { useState, useEffect, useContext } from 'react'
import FileBase from 'react-file-base64'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import { TextField, Button, Paper, Typography } from '@material-ui/core'
import { idContext } from '../../contexts'
function Form() {
    const initial = {
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    }
    const dispatch = useDispatch()
    const [previmg, setPrevImg] = useState('')
    const { currentId,setCurrentId } = useContext(idContext)
    const post = useSelector((state) => currentId ? (state.posts.find(post => post._id === currentId)) : null)
    const [postData, setPostData] = useState(initial)
    useEffect(() => {

    }, [])
    useEffect(() => {
        if (post) {
            setPrevImg(post.selectedFile)
            setPostData(post)
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId) {
            if (postData.selectedFile === previmg) {
                let filteredData = { ...postData }
                delete filteredData.selectedFile
                dispatch(updatePost(currentId, filteredData))

            }
            else {
                dispatch(updatePost(currentId, postData))
            }
        }
        else {
            dispatch(createPost(postData))
        }

    }
    const clear = () => {
        setPostData(initial)
    }
    const createNew = () => {
        setPostData(initial)
        setCurrentId(null)
    }
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant='h4' >{!post ? 'Create a memory' : 'Update memory'}</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></TextField>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></TextField>
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={(file) => setPostData({ ...postData, selectedFile: file.base64 })} />

                </div>
                <Button type='submit' color='primary' fullWidth className={classes.buttonSubmit} variant='contained'>{!post ? 'Create' : 'Update'}</Button>
                <Button onClick={clear} color='secondary' fullWidth variant='contained' className={classes.buttonSubmit}>Clear</Button>
                <Button onClick={createNew} className={classes.btn} fullWidth variant='contained'>New</Button>


            </form>
        </Paper>
    )
}

export default Form
