import { Request, Response } from 'express'
import { app } from './src/app'

app.get('/', (req, res) => {
  res.send('server is running')
})
app.get('/start', (req, res: Response) => {
  res.send('server is running with no issues ')
})

app.listen(process.env.port, () => {
  console.log('server is running')
})
