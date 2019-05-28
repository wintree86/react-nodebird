const express = require('express');
const db = require('./models');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');

const app = express();
// db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/posts',postsRouter);

app.get('/', (req, res) => {
  res.send('hello server');
})


app.listen(8080, () => {
  console.log('server is running on localhost:8080');
}) 