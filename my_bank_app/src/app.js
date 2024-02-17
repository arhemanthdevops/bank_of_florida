const express = require('express');
const sendMoneyRoute = require('./routes/sendMoney');
const receiveMoneyRoute = require('./routes/receiveMoney');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/sendMoney', sendMoneyRoute);
app.use('/receiveMoney', receiveMoneyRoute);

app.listen(port, () => {
    console.log(`Bank app listening at http://localhost:${port}`);
});
