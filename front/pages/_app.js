import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const NodeBird = ({Component}) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel={"stylesheet"} href={"https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.min.css"}/>
        <script src={"https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.min.js"}/>
      </Head>
      <AppLayout>
        <Component/>
      </AppLayout>
    </>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.elementType
}

export default NodeBird;
