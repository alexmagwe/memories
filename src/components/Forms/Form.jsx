import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'
import { TextField, Button, Paper, Typography } from '@material-ui/core'
function Form() {
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    useEffect(() => {
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitting',postData)
        dispatch(createPost(postData))
    }
    const clear = () => {

    }
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant='h4' >Create a memory</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></TextField>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></TextField>
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={(file) => setPostData({ ...postData, selectedFile: file.base64 })} />

                </div>
                <Button type='submit' color='primary' fullWidth className={classes.buttonSubmit} variant='contained'>Create</Button>
                <Button onClick={clear} color='secondary' fullWidth variant='contained'>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form
