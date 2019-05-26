import React from 'react';
import { Input, Button, Form, Card, Avatar, Icon } from 'antd';

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

const Home = () => {
  return (
    <div>
      {
        dummy.isLoggedIn && <Form encType="multipart/form-data" style={{marginBottom: '20px'}}>
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
      }
      {
        dummy.mainPosts.map((c) => {
          return (
            <Card 
              key={+c.createdAt} 
              cover={c.img && <img alt="example" src={c.img}/>}
              actions={[
                <Icon type="retweet" key="retweet" />,
                <Icon type="heart" key="heart" />,
                <Icon type="message" key="message" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
              extra={<Button>Follow</Button>}
              >
              <Card.Meta
                avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                title={c.User.nickname}
                description={c.content}
              />
            </Card>
          )
        })
      }
    </div>
  )
};

export default Home;