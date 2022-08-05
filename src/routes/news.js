const { Router } = require('express');
const { getNews, deleteNews } = require('../controllers/newsController');

const router = Router();

//Get first five news
router.get('/', getNews);

//Delete a news
router.delete('/:objectID',deleteNews);

module.exports = router;
