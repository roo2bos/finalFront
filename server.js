// server.js
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors:{
    origin: ['http://localhost:3000'], // 클라이언트 주소
    methods:["GET","POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  // console.log('A client connected', socket.id);

  socket.on('userMessage', (message) => {//사용자의 입력된 데이터
    io.emit('userMessage', message);
  });
  socket.on('aiMessage', (message) => {//ai 데이터
    io.emit('aiMessage', message);
  });
});

io.on('connect_error', (error) => {
  console.error('연결 오류:', error);
  // 여기에서 연결 오류 처리를 할 수 있습니다.
});

io.on('disconnect', () => {
  console.log('연결이 끊어졌습니다.');
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
