const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    //---Method to implement a translation request----------------------
    translate (data, done) {

        //Check that all required fields provided
        if (!('text' in data) || !('locale' in data)) {
            return done({error: "Required fields(s) missing"});
        }

        //Expand provided variables
        const {text, locale} = data;

        //Check that supplied text isn't empty
        if (text === "") {
            return done ({error: "No text to translate"});
        }

        let AtoB;
        let changed = false;
        let translated = text;

        //Check the local and translate appropriately
        if (locale == "american-to-british") {
            AtoB = true;
        } else if (locale == "british-to-american"){
            AtoB = false;
        } else {
            return done ({error: "Invalid value for locale field"});
        }

        //Translate Time Items
        let timeRegex;
        let timeReplace;
        if (AtoB) {
            timeRegex = /(\d\d?):(\d\d)/g
            timeReplace = '<span class="highlight">$1.$2</span>';
        } else {
            timeRegex = /(\d\d?)\.(\d\d)/g
            timeReplace = '<span class="highlight">$1:$2</span>';
        }

        translated = translated.replace(timeRegex, timeReplace);

        //Translate Honorifics
        translated = this.performReplace(translated, americanToBritishTitles, AtoB);

        //Translate american-only items
        translated = this.performReplace(translated, americanOnly, AtoB);

        //Translate british-only items
        translated = this.performReplace(translated, britishOnly, !AtoB);

        //Translate Spellings
        translated = this.performReplace(translated, americanToBritishSpelling, AtoB);

        if (translated == text) {
            return done (null, {text: text, translation: "Everything looks good to me!"});
        } else {
            return done (null, {text: text, translation: translated});
        }

    }

    performReplace(theString, theValues, direct) {

        Object.keys(theValues).forEach( (key) => {
            let regexString = direct? key: theValues[key];
            const replaceString = direct? theValues[key]: key;

            if (regexString[regexString.length-1] == ".") {
                regexString = regexString.slice(0, regexString.length-1) + "\\.";
            }

            const theRegEx = new RegExp("(?<!\\w)"+regexString+"(?!\\w)","gi");
            const theReplace = (match) => {
                if (match[0] == match[0].toLowerCase()) {
                    return '<span class="highlight">' + replaceString + '</span>';
                } else {
                    return '<span class="highlight">' + replaceString[0].toUpperCase() + replaceString.slice(1) + '</span>';
                }
            };

            theString = theString.replace(theRegEx, theReplace);
        });

        return theString;
    }

}

module.exports = Translator;