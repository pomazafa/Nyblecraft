const express = require('express');
const userRouter = require('./resources/users/user.router');
const { PORT } = require('./common/config');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`);
)
