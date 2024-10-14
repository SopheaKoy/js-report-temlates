Handlebars.registerHelper('countNumber', function(index) {
    return index + 1;
});

Handlebars.registerHelper('formatDate', function(date) {

    const d = new Date(date);

    if (isNaN(d)) {
        return '';
    }
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
});


Handlebars.registerHelper('formatTime', function(t) {
    const d = new Date(t);
    if (isNaN(d)) {
        return '';
    }
    let hours = d.getUTCHours();
    hours = hours % 12 || 12; 
    return `${String(hours).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')}:${String(d.getUTCSeconds()).padStart(2, '0')}`;
});


Handlebars.registerHelper('formatCurency', function(value) {
    return new Intl.NumberFormat('en-US').format(value);
});

