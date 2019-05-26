import React from 'react';
import {Form, Button, Input} from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: 'Winnie the Pooh',
      },
      content: 'First Post',
      img: 'https://static.posters.cz/image/750/plakatok/winnie-the-pooh-friends-i12468.jpg'
    }
  ]
}

const PostForm = () => {
  return (
    <Form encType="multipart/form-data" style={{margin: '20px 0'}}>
      <Input.TextArea maxLength={140} placeholder="Write anything"></Input.TextArea>
      <div>
        <input type="file" multiple hidden />
        <Button>Image Upload</Button>
        <Button type="primary" style={{float: 'right'}} htmlType="submit">Tweet</Button>
      </div> 
      <div>
        {
          dummy.imagePaths.map((v,i) => {
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