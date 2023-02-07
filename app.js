const app = require('express')();

app.get('/', (_, res) => {
    res.json({ message: 'Hello Bang' })
})

app.post('/login', async (req, res) => {
    const {email, pass} = req.body;
    if (!email || !pass) {
        res.status(400).json({ message: 'yang bener aja dah' });
        return;
    }

    const user = await User.findOne({ where: { email } })

    res.json({ access_token: 'blablabla', user })
})

app.listen(3000, () => console.log('running bwang'))