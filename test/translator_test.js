const assert = require('assert');
const translator = require('../app/models/translator')

describe('Translator module testing', function () {

it('Text-Arabic-MAC',  () => {
        assert.equal(translator.translate("hgdml dml [ldg","mac","ar"), "اليوم يوم جميل");
});
it('Empty-Arabic-MAC',  () => {
        assert.equal(translator.translate("","mac","ar"), "");
});
it('Similar-Arabic-MAC',  () => {
        assert.equal(translator.translate("١١٩٤أمجاد","mac","ar"), "١١٩٤أمجاد");
});
it('Text-English-MAC',  () => {
        assert.equal(translator.translate("شوتشي شوثق","mac","en"), "Amjad amer");
});
it('Empty-English-MAC',  () => {
        assert.equal(translator.translate("","mac","en"), "");
});
it('Similar-English-MAC',  () => {
        assert.equal(translator.translate("Amjad1994","mac","en"), "Amjad1994");
});


it('Text-Arabic-Other',  () => {
        assert.equal(translator.translate("hgd,l d,l [ldg","Other","ar"), "اليوم يوم جميل");
});
it('Empty-Arabic-Other',  () => {
        assert.equal(translator.translate("","Other","ar"), "");
});
it('Similar-Arabic-Other',  () => {
        assert.equal(translator.translate("١١٩٤أمجاد","Other","ar"), "١١٩٤أمجاد");
});
it('Text-English-Other',  () => {
        assert.equal(translator.translate("هف هس لقثشف يشغ","Other","en"), "It is great day");
});
it('Empty-English-Other',  () => {
        assert.equal(translator.translate("","Other","en"), "");
});
it('Similar-English-Other',  () => {
        assert.equal(translator.translate("Amjad1994","Other","en"), "Amjad1994");
});
});