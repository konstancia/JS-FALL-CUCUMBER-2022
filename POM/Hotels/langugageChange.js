const Commands = require('../Commands');

class LanguageChange{

    commands = new Commands();



    //language
    languageEnglish = '//div[contains(text(),"English")]' ;
    languageSpanish = '//div[contains(text(),"Español")]';
    languageSelectorButton = '#language-selector';
    saveButtonEnglish = '//button[contains(text(),"Save")]' ;
    saveButtonSpanish = '//button[contains(text(),"Guardar")]'; 
    dropDownEnglish = '//option[contains(text(),"English (United States)")]';
    dropDownSpanish = '//option[contains(text(),"Español (Estados Unidos)")]';
    

    async chooseEnglishLanguageFromMenu () {
        await this.commands.clickWebElement(this.languageEnglish);

    }

    async chooseSpanishLanguageFromMenu () {
        await this.commands.clickWebElement(this.languageSpanish);

    }

    async chooseLanguageFromMenu () {
        await this.commands.clickWebElement(this.languageSelectorButton);

    }

    async chooseSpanishLanguageFromDropdown (dropdown) {
        await this.commands.clickWebElement(this.dropDownSpanish, dropdown);

    }

    async chooseEnglishLanguageFromDropdown (dropdown) {
        await this.commands.clickWebElement(this.dropDownEnglish, dropdown);

    }

    async saveSettingsEnglish () {
        await this.commands.clickWebElement(this.saveButtonEnglish);

    }

    async saveSettingsSpanish () {
        await this.commands.clickWebElement(this.saveButtonSpanish);

    }
}

    module.exports = LanguageChange