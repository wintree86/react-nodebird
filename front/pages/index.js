import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel={"stylesheet"} href={"https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.min.css"}/>
        <script src={"https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.min.js"}/>
      </Head>
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
    </>
  )
};

export default Home;