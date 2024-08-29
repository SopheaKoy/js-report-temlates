function processTemplateString(templateStr, data) {
    if (templateStr != null) {
        return templateStr.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    } else {
        return '';
    }
}