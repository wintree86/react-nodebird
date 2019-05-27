import React, {useState, useCallback, useEffect} from 'react';
import {Form, Button, Input} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const {imagePaths, isAddingPost, addedPost} = useSelector(state => state.post)

  useEffect(() => {
    setText('');
  },[addedPost === true])
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          text
        }
      })
    },
    [],
  )  

  const onChangeText = useCallback((e) => {
    setText(e.target.value)
  },[])

  return (
    <Form encType="multipart/form-data" style={{margin: '20px 0'}} onSubmit={onSubmit}>
      <Input.TextArea maxLength={140} placeholder="Write anything" value={text} onChange={onChangeText}/>
      <div>
        <input type="file" multiple hidden />
        <Button>Image Upload</Button>
        <Button type="primary" style={{float: 'right'}} htmlType="submit" loading={isAddingPost}>Tweet</Button>
      </div> 
      <div>
        {
          imagePaths.map((v,i) => {
            return (
              <div key={v} style={{display: 'inline-block'}}>
                <img src={'http://localhost:3065/'+v} style={{width: '200px'}} alt={v} />
                <div>
                  <Button>Remove</Button>
                </div>
              </div>
            )
          })
        }
      </div>
    </Form>
  )
}

export default PostForm;