const express = require('express');
const app = express();
const PORT = 5000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(PORT, '번 포트에서 대기 중');  
})