const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.use((error, req, res, next) => {
  res.status(400).send({
    error: error.message
  });
});


app.listen(port, () => {
  console.log('Server is up on ' + port);
});

// const main = async function () {
//   // const task = await Task.findById('615a7bfb01264b962ee74387');
//   // await task.populate('owner');
//   // console.log(task.owner);

//   const user = await User.findById('615a7bdc01264b962ee7437d');
//   await user.populate('tasks');
//   console.log(user.tasks);
// }

// main();