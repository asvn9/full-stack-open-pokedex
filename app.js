const express = require('express')
const app = express()

// fly dynamically sets a port
// more comments
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) // eslint-disable-line no-console
})
