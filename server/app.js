const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const questions = [
  {
    id: 1,
    question: "",
    answer: 2,
    options: [jawabanA,JawabanB,jawabanC, jawabanD]
  },
  {
    id: 2,
    question: "",
    answer: 2,
    options: [jawabanA,JawabanB,jawabanC, jawabanD]
  },
  {
    id: 3,
    question: "",
    answer: 2,
    options: [jawabanA,JawabanB,jawabanC, jawabanD]
  },
  {
    id: 4,
    question: "",
    answer: 2,
    options: [jawabanA,JawabanB,jawabanC, jawabanD]
  },
  {
    id: 5,
    question: "",
    answer: 2,
    options: [jawabanA,JawabanB,jawabanC, jawabanD]
  }
]

let id = 0
const users = []

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('getQuestion', (data) => {
    console.log('getQuestion dari client >>>', data);
    socket.emit("sendQuestion", questions)
  })

  socket.on('answer', (data) => {
    console.log('answer dari client >>>', data); // data => {id, index}
    let answerResult = false
    questions.forEach(e => {
      if (e.id === data.id) {
        if (e.answer === data.index) {
          answerResult = true
        }
      }
    })
    socket.broadcast.emit("sendAnswerResult", answerResult)
  })

  socket.on('getScore', (data) => {
    console.log('getScore dari client >>>', data);
    let score = 0
    users.forEach(e => {
      if (e.id === data.id) {
        score = e.score
      }
    })
    socket.broadcast.emit("sendScore", score)
  })

  
  socket.on('username', (data) => {
    console.log('username dari client >>>', data);
    if (users.length !== 5) {
      id++
      users.push({
        id,
        username: data.username,
        score: 0
      })
      socket.broadcast.emit("loginSuccess", 'Login Success')
    } else {
      socket.broadcast.emit("loginFail", 'Login Fail')
    }
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});