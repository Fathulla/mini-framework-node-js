const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const mongoose = require('mongoose');

const app = new Application()

const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://fathullarashidov:<password>@cluster0.d7ihlm2.mongodb.net/?retryWrites=true&w=majority";



app.use(jsonParser)  
app.use(parseUrl(`http:localhost:${PORT}`))

app.addRouter(userRouter)

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://fathullarashidov:1234@cluster0.d7ihlm2.mongodb.net/?retryWrites=true&w=majority")
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start()