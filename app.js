const express = require("express")
const data = require("./data.json")

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/projects/:id', (req, res) => {
    let projectId = parseInt(req.params.id)
    let project = data.projects.find(project => project.id === projectId)
    if (project) {
        res.render('project', project)
    } else {
        res.status(404).send("Sorry I can't find that!")
    }
})
app.get('/', (req, res) => {
    res.render('index', data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})