const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const { authRouter } = require('./Routes/auth')
const { dataRouter } = require('./Routes/data')
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Database connected") })
    .catch((err) => { console.log(err) })

// app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/data', dataRouter);
app.use('/api/auth', authRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// console.log(dataRouter)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
}
)
