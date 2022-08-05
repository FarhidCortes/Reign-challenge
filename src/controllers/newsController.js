const News = require('../models/news');

const { response, request } = require('express');

//when "/news" is called
const getNews = async (req = request, res = response) => {

    const { limit = 5, from = 0 } = req.query;

    const [ news ] = await Promise.all([
        News.find({state: true})
            .skip( Number( from ) )
            .limit(Number( limit ))
    ]);

    return res.json({
        news
    });
}

//when "/news/:objectid" is called
const deleteNews = async (req = request, res = response) => {

    const { objectID } = req.params;
    const filter = { objectID: objectID };
    const update = { state: false };
    const newsDeleted = await News.findOneAndUpdate(
        filter,
        update
    );

    return res.json(
        newsDeleted
    );
}

module.exports = {
    getNews,
    deleteNews
}