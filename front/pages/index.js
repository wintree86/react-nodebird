import React from 'react';
import PostForm from '../components/PostForm';
import MainPost from '../components/MainPost';

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
  ],
  createdAt: '2019-05-26'
}

const Home = () => {
  return (
    <div>
      { dummy.isLoggedIn && <PostForm /> }
      { dummy.mainPosts.map((c,idx) => <MainPost post={c} key={idx}/>) }
    </div>
  )
};

export default Home;