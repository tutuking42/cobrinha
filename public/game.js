export default function createGame() {

const state = {
    players: {},
    fruits: {},
    screen: {
        width: 10,
        height: 10
    }
}

function addFruit(command) {
    const fruitId = command.fruitId
    const fruitX = command.fruitX
    const fruitY = command.fruitY

    state.fruits[fruitId] = {
        x: fruitX,
        y: fruitY
    }
    
}

function removeFruit(command) {
    const fruitId = command.fruitId

    delete state.fruits[fruitId]
    
}


function addPlayer(command) {
    const playerId = command.playerId
    const playerX = command.playerX
    const playerY = command.playerY

    state.players[playerId] = {
        x: playerX,
        y: playerY
    }
    
}

function removePlayer(command) {
    const playerId = command.playerId

    delete state.players[playerId]
    
}


function movePlayer(command) {
    const keyPressed = command.keyPressed
    const player = state.players[command.playerId]
    //console.log(`game.movingPlayer() -> Moving ${command.playerId} with ${keyPressed}`)

    const acceptMoves = {
        ArrowUp(player) {
            //console.log('Moving player up')
            if (player.y - 1 >= 0) {
                player.y -= 1
            } //pra cima
        },

        ArrowDown(player) {
            //console.log('Moving player down')
            if (player.y + 1 < state.screen.height) {
            player.y += 1
            } //pra baixo

        },

        ArrowLeft(player) {
            //console.log('Moving player left')
            if (player.x - 1 >= 0) {
                player.x -= 1
            } // esquerda
        },

        ArrowRight(player) {
            //console.log('Moving player right')
            if (player.x + 1 < state.screen.width) {
                player.x += 1
            } //direita
        }

    }


    const moveFunction = acceptMoves[keyPressed]
    const playerId = command.playerId


    if (player && moveFunction) {
        moveFunction(player)
        checkForFruitCollision(playerId)

    }          

}

function checkForFruitCollision(playerId) {
    
    const player = state.players[playerId]


    for (const fruitId in state.fruits) {
        const fruit = state.fruits[fruitId]
        console.log(`Checking ${playerId} and ${fruitId}`)

        if (player.x === fruit.x && player.y === fruit.y) {
            console.log(`COLLISION between ${playerId} and ${fruitId}`)
            removeFruit({fruitId: fruitId})

            

        }

    }
    
}

return {
    addPlayer,
    removePlayer,
    addFruit,
    removeFruit,
    movePlayer,
    state
}

        }