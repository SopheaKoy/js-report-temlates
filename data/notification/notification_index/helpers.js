Handlebars.registerHelper('formatdate2', function (key, options) {
    const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
    const currentDate = new Date();
    const formattedDate = `ថ្ងៃទី${currentDate.getDay()} ខែ${months[currentDate.getMonth()]} ឆ្នាំ${currentDate.getFullYear()}`;

    return formattedDate;
});


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
