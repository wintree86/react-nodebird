import React from 'react';
import {Menu, Input, Button} from "antd";
import Link from 'next/link';
import PropTypes from 'prop-types';

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
      <Link href="/signup"><Button>Signup</Button></Link>
      {children}
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout;