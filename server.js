const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* Home Route */
app.get('/', (req, res) => {
    res.send('Online Quiz System Running');
});

/* Register User */
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const sql =
        'INSERT INTO users(name,email,password) VALUES(?,?,?)';

    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            res.status(500).json({
                message: 'Registration Failed'
            });
        } else {
            res.json({
                message: 'Registration Successful'
            });
        }
    });
});

/* Login User */
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql =
        'SELECT * FROM users WHERE email=? AND password=?';

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            res.status(500).json({
                message: 'Login Error'
            });
        } else if (result.length > 0) {
            res.json({
                message: 'Login Successful',
                user: result[0]
            });
        } else {
            res.status(401).json({
                message: 'Invalid Email or Password'
            });
        }
    });
});

/* Get All Questions */
app.get('/questions', (req, res) => {
    const sql = 'SELECT * FROM questions';

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({
                message: 'Error Fetching Questions'
            });
        } else {
            res.json(result);
        }
    });
});

/* Save Quiz Result */
app.post('/result', (req, res) => {
    const { user_id, score, total_questions } = req.body;

    const sql =
        'INSERT INTO results(user_id,score,total_questions) VALUES(?,?,?)';

    db.query(
        sql,
        [user_id, score, total_questions],
        (err, result) => {
            if (err) {
                res.status(500).json({
                    message: 'Result Save Failed'
                });
            } else {
                res.json({
                    message: 'Result Saved Successfully'
                });
            }
        }
    );
});

/* Start Server */
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});