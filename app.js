const app = require('express')();

app.get('/', (_, res) => {
    res.json({ message: 'Hello Bang' })
})


app.listen(3000, () => console.log('running bwang'))