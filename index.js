const express = require('express')
const app = express()
const port = 8000

let Todos = [
    {id: 1, todo: "Clean room", complete: false, category: "Home"},
    {id: 2, todo: "Walk the dog", complete: true, category: "Pet"},
    {id: 3, todo: "Work out", complete: true, category: "Personal"},
    {id: 4, todo: "Finish homework", complete: false, category: "School"}
]

app.get('/todos', (req, res) => {
    res.send(Todos)
})

app.post('/todos' (req, res) => {
    Todos.push({
        id: 4,
        todo: req.query.todo,
        complete: false,
        category: "none"
    })
    res.send(Todos)
})

app.listen(port, () => {
    console.log(`example app listening ${port}`)
})