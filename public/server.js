import express from 'express'
import http from 'http'
import createGame from './game.js'

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))

const  game = createGame()
game.addPlayer({ playerId: 'player1', playerX: 0, playerY: 8})
game.addPlayer({ playerId: 'player2', playerX: 4, playerY: 7})
game.addPlayer({ playerId: 'player3', playerX: 3, playerY: 9})
game.addFruit({ fruitId: 'fruit1', fruitX: 6, fruitY: 8})
game.addFruit({ fruitId: 'fruit2', fruitX: 5, fruitY: 4})
game.addFruit({ fruitId: 'fruit3', fruitX: 2, fruitY: 5})
game.addFruit({ fruitId: 'fruit4', fruitX: 7, fruitY: 9})
game.addFruit({ fruitId: 'fruit5', fruitX: 1, fruitY: 9})
game.addFruit({ fruitId: 'fruit6', fruitX: 2, fruitY: 2})

console.log(game.state)

server.listen(3000, () => {
    console.log(`> Server listening on port: 3000`)

})