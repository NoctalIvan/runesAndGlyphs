const games = {}

module.exports = (app) => {
    // create a game with two players, returns the id
    app.post('/game/:id1/:id2', (req, res) => {
        const id = Math.random().toString()
        const player1 = null // get player 1
        const player2 = null // get player 2

        const game = null

        res.send(game) // id, status & all events
    })

    // summon a rune in a game
    app.post('/game/:id/summon/:index', (req, res) => {
        // check & do action
        const game = null
        res.send(game) // id, status & all events
    })

    // attack a rune in a game
    app.post('/game/:id/attack/:index1/:index2', (req, res) => {
        // check & do action
const game = null
        res.send(game) // id, status & all events
    })
}