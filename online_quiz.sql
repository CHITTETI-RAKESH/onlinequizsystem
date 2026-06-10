
CREATE TABLE users (
    id INT  PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
    id INT PRIMARY KEY,
    question TEXT NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    option4 VARCHAR(255) NOT NULL,
    correct_answer VARCHAR(255) NOT NULL
);

CREATE TABLE results (
    id INT  PRIMARY KEY,
    user_id INT,
    score INT,
    total_questions INT,
    quiz_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO questions
(question, option1, option2, option3, option4, correct_answer)
VALUES
('What does HTML stand for?',
'Hyper Text Markup Language',
'High Text Machine Language',
'Hyper Transfer Markup Language',
'Home Tool Markup Language',
'Hyper Text Markup Language'),

('Which language is used for styling web pages?',
'HTML',
'CSS',
'Python',
'Java',
'CSS'),

('Which database is commonly used with Node.js?',
'MySQL',
'Photoshop',
'MS Word',
'Excel',
'MySQL');