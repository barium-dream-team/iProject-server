const app = require('express')();

app.get('/', (_, res) => {
    res.json({ message: 'Hello Bang' })
})

app.post('/register', async (req, res) => {
    const { email, password, address } = req.body;

    if (!email || !password || !address) {
        res.status(400).json({ message: 'ah' })
        return;
    }

    await User.create({ email, password, address })
    res.status(201).json({ message: 'nice' });
})


app.listen(3000, () => console.log('running bwang'))