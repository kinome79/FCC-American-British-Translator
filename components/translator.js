const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    //---Method to perform a translation request----------------------
    translate (data, done) {

        //Check that all required fields provided
        if (!('text' in data) || !('locale' in data)) {
            return done({error: "Required field(s) missing"});
        }

        //Expand provided variables
        const {text, locale} = data;

        //Check that supplied text isn't empty
        if (text === "") {
            return done ({error: "No text to translate"});
        }

        //create copy of the text to modify, and boolean of translate method
        let AtoB;
        let translated = text;

        //Check the locale and translate appropriately
        if (locale == "american-to-british") {
            AtoB = true;
        } else if (locale == "british-to-american"){
            AtoB = false;
        } else {
            return done ({error: "Invalid value for locale field"});
        }

        //Build Regex for finding time items, and appropriate replacement text
        let timeRegex;
        let timeReplace;
        if (AtoB) {
            timeRegex = /(\d\d?):(\d\d)/g
            timeReplace = '<span class="highlight">$1.$2</span>';
        } else {
            timeRegex = /(\d\d?)\.(\d\d)/g
            timeReplace = '<span class="highlight">$1:$2</span>';
        }

        //Perform translation on all time items
        translated = translated.replace(timeRegex, timeReplace);

        //Translate Honorifics
        translated = this.performReplace(translated, americanToBritishTitles, AtoB);

        //Translate american-only items
        if (AtoB) {
            translated = this.performReplace(translated, americanOnly, AtoB);
        }

        //Translate british-only items
        if(!AtoB) {
            translated = this.performReplace(translated, britishOnly, !AtoB);
        }

        //Translate Spellings
        translated = this.performReplace(translated, americanToBritishSpelling, AtoB);

        //If no change in text, return looks good, else return translated string
        if (translated == text) {
            return done (null, {text: text, translation: "Everything looks good to me!"});
        } else {
            return done (null, {text: text, translation: translated});
        }

    }

    //Function -takes a string, an object list of tranlation items, and direction of translation, returns translated string
    performReplace(theString, theValues, direct) {

        //Go through each item in the list of translation items, replace those items if found in string
        Object.keys(theValues).forEach( (key) => {

            //Set regex string and replacement string based on direction of translation
            let regexString = direct? key: theValues[key];
            const replaceString = direct? theValues[key]: key;

            //If regex translation item ends in a period, mark it with \ for the regex
            if (regexString[regexString.length-1] == ".") {
                regexString = regexString.slice(0, regexString.length-1) + "\\.";
            }

            //Build new RegEx using regex string, adding end of word exclusion criteria at each end
            const theRegEx = new RegExp("(?<!\\w|-)"+regexString+"(?!\\w|-)","gi");

            //Build replacement function with replacement string, and method to match case on first letter
            const theReplace = (match) => {
                if (match[0] == match[0].toLowerCase()) {
                    return '<span class="highlight">' + replaceString + '</span>';
                } else {
                    return '<span class="highlight">' + replaceString[0].toUpperCase() + replaceString.slice(1) + '</span>';
                }
            };

            //Use Regex and replacement function to replace any occurances in string
            theString = theString.replace(theRegEx, theReplace);
        });

        //Return translated string
        return theString;
    }

}

module.exports = Translator;