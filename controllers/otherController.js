

// let userData = [
//     { id: 1, name: 'Bex' },
//     { id: 2, name: 'Goku' },
//     { id: 3, name: 'Katie' },
//     { id: 4, name: 'Not Real Helen' },
//     { id: 5, name: 'Tony' }
// ]

module.exports = {
    // no need to return because of single line arrow function
    findAll: (req, res) => res.json(userData),
    findById: (req, res) => res.json(userData.filter(user => user.id === +req.params.id))
}