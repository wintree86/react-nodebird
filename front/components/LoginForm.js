import React, {useCallback} from 'react';
import {Form, Button, Input} from 'antd'
import Link from 'next/Link';
import {useDispatch, useSelector} from 'react-redux';
import {useInput} from '../pages/signup'
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
  const [userId, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const {isLoggingIn} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId,
        password
      }
    });
  }, [userId, password])

  return (<Form onSubmit={onSubmitForm} style={{padding: '20px'}}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br/>
        <Input name="user-id" value={userId} onChange={onChangeId} required/>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br/>
        <Input name="user-password" value={password} onChange={onChangePassword} required/>
      </div>
      <div style={{marginTop: '20px'}}>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
        <Link href="/signup"><Button>Signup</Button></Link>
      </div>
    </Form>
  )
}

export default LoginForm;