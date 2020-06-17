import express from 'express'
import routes from './routes'

const app = express()

const port = 5000

app.use(express.json())
app.use(routes)

// Caso a rota não exista 
app.use((req, res) => {
    return res.status(404).json({ msg: 'Not Found' })
})


app.listen(port, () => console.log(`Server running on port ${port}...`))