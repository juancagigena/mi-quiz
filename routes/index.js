var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {res.render('index', { title: 'QUIZ' })});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

router.get('/author/creditos', function(req, res) {
	res.render('creditos', { title: 'QUIZ-Creditos' })});


module.exports = router;
