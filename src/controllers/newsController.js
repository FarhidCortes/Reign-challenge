const News = require('../models/news');

//FUNCION EL ENDPOINT CON EL GET PARA TODOS LAS NOTICIAS INSERTADAS EN LA BASE DE DATS
//SE AGREGO UNO A LA BASE DE DATOS DE PRUEBA
//HACER EL DELETE
//HACER LA WEA QUE INSERTA CADA UNA HORA
//HACER EL PAGINADO (AUNQUE EN EL GET YA ESTA PERO HAY QUE PROBARLO CON MAS DATOS)

const { response, request } = require('express');

//when "/news" is called
const getNews = async (req = request, res = response) => {


    const { limit = 5, from = 0 } = req.query;

    const [ news ] = await Promise.all([
        News.find()
            .skip( Number( from ) )
            .limit(Number( limit ))
    ]);

    return res.json({
        news
    });
}

const createNews = async (req = request, res = response) => {

    const body = req.body;

    const newsInDB = await News.findOne({objectID: body.objectID});

    if(newsInDB){

        return res.status(400).json({
            msg: `News: ${ productoDB.objectID } already exists`
        });

    }

    const news = new News(body);

    //Save in DB
    await news.save();

    res.status(201).json(news);

}

//when "/news" is called
const deleteNews = async (req = request, res = response) => {


    const { id } = req.query;

    const newsDeleted = await News.findByIdAndUpdate(
        id,
        {state: false}
    );

    return res.json(
        newsDeleted
    );
}

module.exports = {
    getNews,
    deleteNews
}