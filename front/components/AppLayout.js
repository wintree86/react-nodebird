import React from 'react';
import {Menu, Input, Row, Col } from "antd";
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import {useSelector} from 'react-redux'

const AppLayout = ({children}) => {
  const {isLoggedIn} = useSelector(state => state.user);
  return (
    <div>
      <Menu mode={"horizontal"}>
        <Menu.Item key={"home"}><Link href={"/"}>NodeBird</Link></Menu.Item>
        <Menu.Item key={"profile"}><Link href={"/profile"}>Profile</Link></Menu.Item>
        <Menu.Item key={"mail"}>
          <Input.Search enterButton style={{verticalAlign:'middle'}}/>
        </Menu.Item>
      </Menu>
      <Row gutter={24}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <Link href="https://github.com/wintree86">
            <a target="_blank">Made by RyanCho</a>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout;