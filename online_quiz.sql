CREATE DATABASE online_quiz;

USE online_quiz;

CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questions(
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT NOT NULL,

    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,

    correct_answer CHAR(1) NOT NULL,

    difficulty VARCHAR(20) DEFAULT 'Medium',
    subject VARCHAR(50) DEFAULT 'General'
);

CREATE TABLE results(
    result_id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT,

    total_questions INT,
    correct_answers INT,
    score INT,
    percentage DECIMAL(5,2),

    quiz_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
);

CREATE TABLE leaderboard(
    rank_id INT AUTO_INCREMENT PRIMARY KEY,

    user_name VARCHAR(100),
    score INT,
    percentage DECIMAL(5,2)
);

INSERT INTO questions
(
question_text,
option_a,
option_b,
option_c,
option_d,
correct_answer,
difficulty,
subject
)
VALUES

(
'What does HTML stand for?',
'Hyper Text Markup Language',
'Home Tool Markup Language',
'Hyper Transfer Markup Language',
'High Text Machine Language',
'A',
'Easy',
'Web'
),

(
'Which language is used for styling web pages?',
'Java',
'Python',
'CSS',
'C++',
'C',
'Easy',
'Web'
),

(
'Which language runs inside a browser?',
'Java',
'JavaScript',
'Python',
'C',
'B',
'Easy',
'Web'
),

(
'Which SQL statement is used to retrieve data?',
'GET',
'SELECT',
'SHOW',
'FETCH',
'B',
'Easy',
'DBMS'
),

(
'Which protocol is used for web pages?',
'FTP',
'SMTP',
'HTTP',
'TCP',
'C',
'Easy',
'Networking'
),

(
'Which company developed Java?',
'Microsoft',
'Sun Microsystems',
'Google',
'IBM',
'B',
'Medium',
'Programming'
),

(
'What is the default port number of HTTP?',
'80',
'21',
'25',
'443',
'A',
'Medium',
'Networking'
),

(
'Which data structure uses FIFO?',
'Stack',
'Array',
'Queue',
'Tree',
'C',
'Medium',
'DSA'
),

(
'Which symbol is used for comments in Java?',
'//',
'#',
'<!-- -->',
'**',
'A',
'Easy',
'Programming'
),

(
'Which normal form removes transitive dependency?',
'1NF',
'2NF',
'3NF',
'BCNF',
'C',
'Hard',
'DBMS'
);
