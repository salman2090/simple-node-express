const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from my second node server by nodemon with autometic restart.');
});

const users = [
    {id: 0, name:'Ronaldo', email:'ronaldo@gmail.com', phone:'018273879878'},
    {id: 1, name:'Messi', email:'messi@gmail.com', phone:'01533879878'},
    {id: 2, name:'Neymar', email:'neymar@gmail.com', phone:'01967879878'},
    {id: 3, name:'Mo Salah', email:'mosalah@gmail.com', phone:'01343579878'},
    {id: 4, name:'Mbape', email:'mbape@gmail.com', phone:'016573879878'},
    {id: 5, name:'Pogba', email:'pogba@gmail.com', phone:'01434879878'}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
});

//app.METHOD
app.post('/users',(req, res)=> {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to Port', port)
}) 