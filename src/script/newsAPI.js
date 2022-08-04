const axios = require('axios').default;
const News = require('../models/news');

const newsAPI = async () => {

    const url = "https://hn.algolia.com/api/v1/search_by_date?query=nodejs";

    try {

        const resp = await axios.get(url);
        const data = resp.data;
        for(const hit of data.hits){
            const { created_at, title, url, author, points, story_text, comment_text, story_id, story_title, story_url, parent_id, created_at_i, _tags, objectID } = hit;
            const news = new News({ created_at, title, url, author, points, story_text, comment_text, story_id, story_title, story_url, parent_id, created_at_i, _tags, objectID });
            await news.save();
        }
        
    } catch (error) {
        console.log(error);
        return false;
    }

}

module.exports = {
    newsAPI
}