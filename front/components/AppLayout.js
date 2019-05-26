import React from 'react';
import {Menu, Input, Row, Col, Card, Avatar } from "antd";
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

const dummy = {
  nickname: 'Ryan cho',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
}

const AppLayout = ({children}) => {
  return (
    <div>
      <Menu mode={"horizontal"}>
        <Menu.Item key={"home"}><Link href={"/"}>NodeBird</Link></Menu.Item>
        <Menu.Item key={"profile"}><Link href={"/profile"}>Profile</Link></Menu.Item>
        <Menu.Item key={"mail"}>
          <Input.Search enterButton style={{verticalAlign:'middle'}}/>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <Card
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
          </Card> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout;