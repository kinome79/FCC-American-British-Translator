const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite ('Translation Submission Tests', () => {
        test ('Translation with text and locale fields: POST request to /api/translate', (done) => {
            chai.request(server)
            .post('/api/translate')
            .send({"text":"This is a test: soccer","locale":"american-to-british"})
            .end((err,res) => {
                assert.equal(res.status, 200, "Should return 200 status code");
                assert.property(res.body, "translation", "Should contain translate property");
                assert.equal(res.body.translation, 'This is a test: <span class="highlight">football</span>', "Translate should equal test string");
                done();
            });
        });
        
        test ('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
            chai.request(server)
            .post('/api/translate')
            .send({"text":"This is a test: soccer","locale":"invalid"})
            .end((err,res) => {
                assert.equal(res.status, 200, "Should return 200 status code");
                assert.property(res.body, "error", "Should contain error property");
                assert.equal(res.body.error, 'Invalid value for locale field', "Should return invalid local string");
                done();
            });
        });
        
        test ('Translation with missing text field: POST request to /api/translate', (done) => {
            chai.request(server)
            .post('/api/translate')
            .send({"locale":"american-to-british"})
            .end((err,res) => {
                assert.equal(res.status, 200, "Should return 200 status code");
                assert.property(res.body, "error", "Should contain error property");
                assert.equal(res.body.error, 'Required field(s) missing', "Should return missing field string");
                done();
            });
        });
        
        test ('Translation with missing locale field: POST request to /api/translate', (done) => {
            chai.request(server)
            .post('/api/translate')
            .send({"text":"This is a test: soccer"})
            .end((err,res) => {
                assert.equal(res.status, 200, "Should return 200 status code");
                assert.property(res.body, "error", "Should contain error property");
                assert.equal(res.body.error, 'Required field(s) missing', "Should return missing field string");
                done();
            });
        });
        
        test ('Translation with empty text: POST request to /api/translate', (done) => {
            chai.request(server)
            .post('/api/translate')
            .send({"text":"","locale":"american-to-british"})
            .end((err,res) => {
                assert.equal(res.status, 200, "Should return 200 status code");
                assert.property(res.body, "error", "Should contain error property");
                assert.equal(res.body.error, 'No text to translate', "Should return empty text string");
                done();
            });
        });
        
        test ('Translation with text that needs no translation: POST request to /api/translate', (done) => {
            chai.request(server)
            .post('/api/translate')
            .send({"text":"This is a test","locale":"american-to-british"})
            .end((err,res) => {
                assert.equal(res.status, 200, "Should return 200 status code");
                assert.property(res.body, "translation", "Should contain translate property");
                assert.equal(res.body.translation, 'Everything looks good to me!', "Should return with all looks good string");
                done();
            });
        });
    });
});
