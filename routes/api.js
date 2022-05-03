'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      translator.translate (req.body, (err, data) => {
        if (err) {return res.json(err)};
        return res.json(data);
      });
    });
};
