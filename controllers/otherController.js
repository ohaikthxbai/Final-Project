

let testData = [
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    { id: 3, name: 'PLayer 3' },
    { id: 4, name: 'Player 4' },
]

module.exports = {
    // no need to return because of single line arrow function
    // findAll: (req, res) => res.json(userData),
    // findById: (req, res) => res.json(userData.filter(user => user.id === +req.params.id))
    testRoute: (req, res) => res.json(testData)
}