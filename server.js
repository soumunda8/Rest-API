const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('HelloWorld')
});

app.listen(7777);

// git에 commit하지 않을 파일을 제외하는 파일이 있다.
// .gitignore