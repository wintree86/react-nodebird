import React from 'react'
import {Card, Avatar} from 'antd';

const dummy = {
  nickname: 'Ryan cho',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
}


const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">Twit<br/>{dummy.Post.length}</div>,
        <div key="twit">Followings<br/>{dummy.Followings.length}</div>,
        <div key="twit">Followers<br/>{dummy.Followers.length}</div>,
      ]}
    >
      <Card.Meta 
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  )
}

export default UserProfile;