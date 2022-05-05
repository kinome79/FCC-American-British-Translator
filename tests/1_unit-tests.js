const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('Unit Tests', () => {

    suite ('To British English Translation Tests', () => {

        test ('Translate Mangoes are my favorite fruit. to British English', () => {
            translator.translate({text: "Mangoes are my favorite fruit.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Mangoes are my favorite fruit.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.', "Translated value should equal expected value");
            });
        });

        test ('Translate I ate yogurt for breakfast. to British English', () => {
            translator.translate({text: "I ate yogurt for breakfast.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "I ate yogurt for breakfast.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.', "Translated value should equal expected value");
            });
        });

        test ("Translate We had a party at my friend's condo. to British English", () => {
            translator.translate({text: "We had a party at my friend's condo.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "We had a party at my friend's condo.", "Original value should be returned as text");
                assert.equal(returnVal.translation, "We had a party at my friend's <span class=\"highlight\">flat</span>.", "Translated value should equal expected value");
            });
        });

        test ('Translate Can you toss this in the trashcan for me? to British English', () => {
            translator.translate({text: "Can you toss this in the trashcan for me?", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Can you toss this in the trashcan for me?", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'Can you toss this in the <span class="highlight">bin</span> for me?', "Translated value should equal expected value");
            });
        });

        test ('Translate The parking lot was full. to British English', () => {
            translator.translate({text: "The parking lot was full.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "The parking lot was full.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'The <span class="highlight">car park</span> was full.', "Translated value should equal expected value");
            });
        });

        test ('Translate Like a high tech Rube Goldberg machine. to British English', () => {
            translator.translate({text: "Like a high tech Rube Goldberg machine.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Like a high tech Rube Goldberg machine.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.', "Translated value should equal expected value");
            });
        });

        test ('Translate To play hooky means to skip class or work. to British English', () => {
            translator.translate({text: "To play hooky means to skip class or work.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "To play hooky means to skip class or work.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'To <span class=\"highlight\">bunk off</span> means to skip class or work.', "Translated value should equal expected value");
            });
        });

        test ('Translate No Mr. Bond, I expect you to die. to British English', () => {
            translator.translate({text: "No Mr. Bond, I expect you to die.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "No Mr. Bond, I expect you to die.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.', "Translated value should equal expected value");
            });
        });

        test ('Translate Dr. Grosh will see you now. to British English', () => {
            translator.translate({text: "Dr. Grosh will see you now.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Dr. Grosh will see you now.", "Original value should be returned as text");
                assert.equal(returnVal.translation, '<span class=\"highlight\">Dr</span> Grosh will see you now.', "Translated value should equal expected value");
            });
        });

        test ('Translate Lunch is at 12:15 today. to British English', () => {
            translator.translate({text: "Lunch is at 12:15 today.", locale: "american-to-british"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Lunch is at 12:15 today.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'Lunch is at <span class="highlight">12.15</span> today.', "Translated value should equal expected value");
            });
        });

    });

    suite ('To American English Translation Tests', () => {

        test ('Translate We watched the footie match for a while. to American English', () => {
            translator.translate({text: "We watched the footie match for a while.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "We watched the footie match for a while.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'We watched the <span class="highlight">soccer</span> match for a while.', "Translated value should equal expected value");
            });
        });

        test ('Translate Paracetamol takes up to an hour to work. to American English', () => {
            translator.translate({text: "Paracetamol takes up to an hour to work.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Paracetamol takes up to an hour to work.", "Original value should be returned as text");
                assert.equal(returnVal.translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.', "Translated value should equal expected value");
            });
        });

        test ('Translate First, caramelise the onions. to American English', () => {
            translator.translate({text: "First, caramelise the onions.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "First, caramelise the onions.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'First, <span class="highlight">caramelize</span> the onions.', "Translated value should equal expected value");
            });
        });

        test ('Translate I spent the bank holiday at the funfair. to American English', () => {
            translator.translate({text: "I spent the bank holiday at the funfair.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "I spent the bank holiday at the funfair.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.', "Translated value should equal expected value");
            });
        });

        test ('Translate I had a bicky then went to the chippy. to American English', () => {
            translator.translate({text: "I had a bicky then went to the chippy.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "I had a bicky then went to the chippy.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.', "Translated value should equal expected value");
            });
        });

        test ("Translate I've just got bits and bobs in my bum bag. to American English", () => {
            translator.translate({text: "I've just got bits and bobs in my bum bag.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "I've just got bits and bobs in my bum bag.", "Original value should be returned as text");
                assert.equal(returnVal.translation, "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.", "Translated value should equal expected value");
            });
        });

        test ('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
            translator.translate({text: "The car boot sale at Boxted Airfield was called off.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "The car boot sale at Boxted Airfield was called off.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.', "Translated value should equal expected value");
            });
        });

        test ('Translate Have you met Mrs Kalyani? to American English', () => {
            translator.translate({text: "Have you met Mrs Kalyani?", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Have you met Mrs Kalyani?", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?', "Translated value should equal expected value");
            });
        });

        test ("Translate Prof Joyner of King's College, London. to American English", () => {
            translator.translate({text: "Prof Joyner of King's College, London.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Prof Joyner of King's College, London.", "Original value should be returned as text");
                assert.equal(returnVal.translation, "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.", "Translated value should equal expected value");
            });
        });

        test ('Translate Tea time is usually around 4 or 4.30. to American English', () => {
            translator.translate({text: "Tea time is usually around 4 or 4.30.", locale: "british-to-american"}, (err, returnVal) => {
                assert.property(returnVal, 'translation', "Should have a translation property");
                assert.equal(returnVal.text, "Tea time is usually around 4 or 4.30.", "Original value should be returned as text");
                assert.equal(returnVal.translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.', "Translated value should equal expected value");
            });
        });

    });

    suite ('Highlight Tranlation Tests', () => {

        test ('Highlight translation in Mangoes are my favorite fruit.', () => {
            const highlightRegex = /<span class="highlight">favourite<\/span>/i;
            translator.translate({text: "Mangoes are my favorite fruit.", locale: "american-to-british"}, (err, returnVal) => {
                assert.isTrue(highlightRegex.test(returnVal.translation), "Translated value should be highlighted");
            });
        });

        test ('Highlight translation in I ate yogurt for breakfast.', () => {
            const highlightRegex = /<span class="highlight">yoghurt<\/span>/i;
            translator.translate({text: "I ate yogurt for breakfast.", locale: "american-to-british"}, (err, returnVal) => {
                assert.isTrue(highlightRegex.test(returnVal.translation), "Translated value should be highlighted");
            });
        });

        test ('Highlight translation in We watched the footie match for a while.', () => {
            const highlightRegex = /<span class="highlight">soccer<\/span>/i;
            translator.translate({text: "We watched the footie match for a while.", locale: "british-to-american"}, (err, returnVal) => {
                assert.isTrue(highlightRegex.test(returnVal.translation), "Translated value should be highlighted");
            });
        });

        test ('Highlight translation in Paracetamol takes up to an hour to work.', () => {
            const highlightRegex = /<span class="highlight">Tylenol<\/span>/i;
            translator.translate({text: "Paracetamol takes up to an hour to work.", locale: "british-to-american"}, (err, returnVal) => {
                assert.isTrue(highlightRegex.test(returnVal.translation), "Translated value should be highlighted");
            });
        });
        
    });
    
});
