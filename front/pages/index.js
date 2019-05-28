import React, {useEffect} from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction, logoutAction} from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const {isLoggedIn, user} = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  
  // useEffect(() => {
  //   dispatch(loginAction);
  // }, [])


  return (
    <div>
      { user? <div>Login : {user.nickname}</div> : <div>Log out</div> }
      { isLoggedIn && <PostForm /> }
      { mainPosts.map((c,idx) => <PostCard post={c} key={idx}/>) }
    </div>
  )
};

export default Home;