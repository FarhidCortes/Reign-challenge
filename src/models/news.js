const {Schema, model} = require('mongoose');

const NewsSchema = Schema({

        created_at: {
          type: Date,
        },
        title: {
          type: String,
        },
        url: {
          type: String,
        },
        author: {
          type: String,
        },
        story_text: {
          type: String
        },
        comment_text: {
          type: String
        },
        story_id: {
          type: Number
        },
        story_title: {
          type: String
        },
        story_url: {
          type: String
        },
        parent_id: {
          type: Number
        },
        created_at_i: {
          type: Number
        },
        _tags: {
          type: [
            String
          ]
        },
        objectID:{
          type: String,
          required: [true, 'ObjectID is necesary'],
          unique: true,
        },
        state:{
          type:Boolean,
          default: true,
          required: true
        }
});

module.exports = model('News',NewsSchema);