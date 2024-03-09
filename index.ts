import { Request } from 'express'
import { app } from './src/app'

app.get('/', (req, res) => {
  res.send('server is runnign')
})

app.listen(process.env.port, () => {
  console.log('server is running')
})
