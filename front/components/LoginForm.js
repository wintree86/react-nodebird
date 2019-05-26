import React, {useCallback} from 'react';
import {Form, Button, Input} from 'antd'
import Link from 'next/Link';
import {useDispatch} from 'react-redux';
import {useInput} from '../pages/signup'
import { loginAction } from '../reducers/user';

const LoginForm = () => {
  const [userId, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(loginAction);
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
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><Button>Signup</Button></Link>
      </div>
    </Form>
  )
}

export default LoginForm;