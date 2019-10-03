const app = require('./app')
const { PORT } = require('./config')
const { PORT, }


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})