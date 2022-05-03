'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  //Handle Post Requests to /api/translate
  app.route('/api/translate')
    .post((req, res) => {

      //Run translators translate method to translate the text and return result
      translator.translate (req.body, (err, data) => {
        if (err) {return res.json(err)};
        return res.json(data);
      });
    });
};
