Handlebars.registerHelper('ep', function(a,b) {
    if (a == b) {
        return true
    }
    return false
});

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

Handlebars.registerHelper('checkTab', function(tab) {
    if (tab == 0){
        return ''
    } else {
        return `padding-left: ${ tab * 60 }px;`
    }
});

Handlebars.registerHelper('checkTabData', function(tab) {
    if (tab == 1){
        return `-indent-3 pl-3`;
    } 
    return `-indent-5 pl-5`;
});


Handlebars.registerHelper('formatCurrency', function(amount) {
    // Convert amount to string and split into integer and decimal parts
    var parts = amount.toFixed(2).toString().split(".");
    var integerPart = parts[0];
    var decimalPart = parts[1];

    // Add custom separator format
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Concatenate integer and decimal parts
    return integerPart;
});


Handlebars.registerHelper('formatdate2', function (key, options) {
    const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
    const currentDate = new Date();
    const formattedDate = `ថ្ងៃទី${currentDate.getDay()} ខែ${months[currentDate.getMonth()]} ឆ្នាំ${currentDate.getFullYear()}`;

    return formattedDate;
});


function processTemplateString(templateStr, data) {
    if (templateStr != null) {
        templateStr = templateStr
            .replace(/\\n/g, '<br>')
            .replace(/\n/g, '<br>')
            .replace(/<script>/g, '&lt;script&gt;')
            .replace(/<\/script>/g, '&lt;/script&gt;');
        return templateStr;
    } else {
        return '';
    }
}


Handlebars.registerHelper('equal', function(a, b) {
    return a == b
});


Handlebars.registerHelper('numberKhmer', function(a) {
    const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    // Increment the index by 1 to start from 1 instead of 0
    const incrementedIndex = a + 1;
    const numberStr = incrementedIndex.toString();
    const numberKhmer = numberStr.split('').map(digit => khmerNumerals[parseInt(digit)]).join('');
    return new Handlebars.SafeString(numberKhmer);
});


Handlebars.registerHelper('formatdate', function(datestr) {
    if (datestr != null && datestr != '') {
        const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
        const d = new Date(datestr);
        const day = d.getDate().toString().padStart(2, '0');
        const month = months[d.getMonth()];
        const year = d.getFullYear().toString();

        // Convert day and year to Khmer numerals
        const convertToKhmer = (numberStr) => {
            const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
            return numberStr.split('').map(digit => khmerNumerals[parseInt(digit)]).join('');
        };

        const dayKhmer = convertToKhmer(day);
        const yearKhmer = convertToKhmer(year);

        return `ចុះថ្ងៃទី${dayKhmer} ខែ${month} ឆ្នាំ${yearKhmer}`;
    } else {
        return '';
    }
});


Handlebars.registerHelper('eq', function(a,b) {
    if (a == b) {
        return true
    }
    return false
});