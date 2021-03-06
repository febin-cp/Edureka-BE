const express = require ('express');
const connectDB = require ('./config/db');
const app = express();

app.get('/', (req,res)=>res.send('API Running'));

connectDB();
//Middleware
app.use(express.json({extended: false}));

app.use('/api/users/', require('./routes/apis/users'))
app.use('/api/auth/', require('./routes/apis/auth'))
app.use('/api/profiles/', require('./routes/apis/profile'))
app.use('/api/posts/', require('./routes/apis/posts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log('Server started on \${PORT}'));