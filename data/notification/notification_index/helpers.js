function processTemplateString(templateStr, data) {
    if (templateStr != null) {
        templateStr = templateStr.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
        return templateStr;
    } else {
        return '';
    }
}
Handlebars.registerHelper('equal', function(a, b) {
    return a == b
});


Handlebars.registerHelper('neq', function (v1, v2, options) {
    if (v1 != v2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
