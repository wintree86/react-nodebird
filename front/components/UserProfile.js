import React, {useCallback} from 'react'
import {Card, Avatar, Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {LOG_OUT_REQUEST}from '../reducers/user';

const UserProfile = () => {
  const {me} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(
    () => {
      dispatch({
        type: LOG_OUT_REQUEST
      });
    },
    [],
  )

  return (
    <Card
      actions={[
        <div key="twit">Twit<br/>{me.Post.length}</div>,
        <div key="twit">Followings<br/>{me.Followings.length}</div>,
        <div key="twit">Followers<br/>{me.Followers.length}</div>,
      ]}
    >
      <Card.Meta 
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout}>Log Out</Button>
    </Card>
  )
}

export default UserProfile;