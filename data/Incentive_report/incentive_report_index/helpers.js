Handlebars.registerHelper('ep', function(a,b) {
    if (a == b) {
        return true
    }
    return false
});

Handlebars.registerHelper('equal', function(a, b) {
    return a == b
});

Handlebars.registerHelper('sumlist', function (list, key) {
    let v = 0;
    if (Array.isArray(list)) {
        list.forEach(e => {
            if (e && e[key] != null) {
                v += parseFloat(e[key]); // Ensure values are treated as numbers
            }
        });
    }
    return v;
});


Handlebars.registerHelper('checkTab', function(tab) {
    if (tab == 0){
        return ''
    } else {
        return `padding-left: ${ tab * 75 }px;`
    }
});

Handlebars.registerHelper('checkTabData', function(tab) {
    if (tab == 1){
        return `-indent-3 pl-3`;
    } 
    return `-indent-5 pl-5`;
});



Handlebars.registerHelper('formatdate2', function (key, options) {
    const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
    const currentDate = new Date();
    const formattedDate = `ថ្ងៃទី${currentDate.getDay()} ខែ${months[currentDate.getMonth()]} ឆ្នាំ${currentDate.getFullYear()}`;

    return formattedDate;
});


function processTemplateString(templateStr, data) {
    if (templateStr != null) {
        return templateStr.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    } else {
        return '';
    }
}


Handlebars.registerHelper('equal', function(a, b) {
    return a == b
});



Handlebars.registerHelper('formatNumber', function(number) {
  const khmerNumbers = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .split('').map(char => char === '.' ? '.' : khmerNumbers[parseInt(char)]).join('');
});


Handlebars.registerHelper('neq', function (v1, v2, options) {
    if (v1 != v2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('CharacterKhmer', function(index) {
    const characterKhmer = [
        'ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ', 'ឈ', 'ញ', 
        'ដ', 'ឋ', 'ឌ', 'ឍ', 'ណ', 'ត', 'ថ', 'ទ', 'ធ', 'ន', 
        'ប', 'ផ', 'ព', 'ភ', 'ម', 'យ', 'រ', 'ល', 'វ', 'ស', 
        'ហ', 'ឡ', 'អ'
    ];

    // Adjust index to be 1-based
    const adjustedIndex = index + 1;

    // Access the array element using the adjusted index
    const result = characterKhmer[adjustedIndex - 1];

    // If adjusted index is outside the array range, return an empty string or handle it accordingly
    return new Handlebars.SafeString(result || '');
});

