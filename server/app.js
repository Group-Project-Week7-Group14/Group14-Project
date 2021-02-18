const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const questions = [
  {
    id: 1,
    question: "Siapa penyanyi yang suka sepedahan?",
    answer: 0,
    options: ['Selena Gowes', 'Bambang tabung gas', 'Justin Bibir', 'Ed seret']
  },
  {
    id: 2,
    question: "Gubernur siapa yang suka nyanyi?",
    answer: 1,
    options: ['Anies Baskoro', 'Biduan Kamil', 'Ganjar Pranular', 'Wahidin Salim']
  },
  {
    id: 3,
    question: "Wakil presiden yang sering nonton streaming?",
    answer: 2,
    options: ["Ma'ruf Amin", 'Budi Yono', 'Muhammad Youtube Kalla', 'Adem Salik']
  },
  {
    id: 4,
    question: "Kenapa motor berhenti dilampu merah?",
    answer: 3,
    options: ['ada polisi', 'lampu merah', 'bukan lampu hijau', 'direm']
  },
  {
    id: 5,
    question: "Saat cuaca sedang mendung, ada 5 orang tapi hanya ada 1 payung. Bagaimana caranya agar mereka semua tidak kehujanan?",
    answer: 2,
    options: ['5 orang dempet-dempet', 'Cari pohon', 'Lari sajah', 'Berdoa']
  },
  {
    id: 6,
    question: "Benda kecil apa yang bisa ngeluarin orang?",
    answer: 0,
    options: ['Bel rumah', 'Sendal', 'Kerikil', 'Kunci']
  },
  {
    id: 7,
    question: "Jika kamu bangun, dia tidur. Jika kamu tidur, dia bangun.",
    answer: 3,
    options: ['Kelelawar', 'Polisi', 'Adik', 'Telapak Kaki']
  },
  {
    id: 8,
    question: "Buah apa yang berbahaya?",
    answer: 2,
    options: ['Buah Mateng', 'Apel', 'Buahaya tegangan tinggi', 'Buah simalakama']
  },
  {
    id: 9,
    question: "Bebek apa yang kaki nya 2?",
    answer: 1,
    options: ['DonalDuck', 'Semua bebek kakinya 2', 'C. Mickey Mouse', 'Bebek Angsa']
  },
  {
    id: 10,
    question: "Hewan apa yang kaya?",
    answer: 0,
    options: ['Burung Belibis', 'Kecoak', 'Singa', 'Katak']
  }
]

let id = 0
const users = []

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('getQuestion', (data) => {
    console.log('getQuestion dari client >>>', data);
    questions.forEach(e => {
      if (e.id === data.questionId) {
        socket.emit("sendQuestion", e)
      }
    })
  })

  socket.on('answer', (data) => {
    console.log('answer dari client >>>', data);
    let answerResult = false
    questions.forEach(e => {
      if (e.id === data.questionId) {
        if (e.answer === data.index) {
          answerResult = true
        }
      }
    })
    if (answerResult) {
      let newScore
      users.forEach(e => {
        if (e.id === data.userId) {
          e.score += 10
        }
        newScore = e.score
      })
      socket.broadcast.emit("sendAnswerResult", {answerResult, newScore})
    } else {
      socket.broadcast.emit("sendAnswerResult", {answerResult})
    }
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
    let newUser = {
      id,
      username: data.username,
      score: 0
    }

    if (users.length !== 5) {
      id++
      users.push(newUser)
      socket.broadcast.emit("loginSuccess", newUser)
    } else {
      socket.broadcast.emit("loginFail", 'Login Fail')
    }
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});