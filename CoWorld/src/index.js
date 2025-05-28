const express = require('express');
const app = express();
const port = 3000;

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, CoWorld!');
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});