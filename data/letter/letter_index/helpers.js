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
        return `padding-left: ${ tab * 75 }px;`
    }
});

Handlebars.registerHelper('checkTabOne', function(tab) {
    // Ensure tab is a number and not negative
    var tabCount = parseInt(tab, 10);
    if (isNaN(tabCount) || tabCount < 0) {
        // Return an empty string or a default value if tab is invalid
        return '';
    }
    
    // Calculate padding-left based on the tab count
    var paddingLeft = tabCount * 72; // Adjust this multiplier if needed
    return `padding-left: ${paddingLeft}px;`;
});

Handlebars.registerHelper('checkTabData', function(tab) {
    if (tab == 1){
        return `indent-3 pl-3`;
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
        return templateStr.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    } else {
        return '';
    }
}

Handlebars.registerHelper('equal', function(a, b) {
    return a == b
});

// FORMAT
Handlebars.registerHelper('format', function(key, values){

    const khmerNumber    = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    const englishNumber  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    const charaterKhmer  = [
        'ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ', 'ឈ', 'ញ', 
        'ដ', 'ឋ', 'ឌ', 'ឍ', 'ណ', 'ត', 'ថ', 'ទ', 'ធ', 'ន', 
        'ប', 'ផ', 'ព', 'ភ', 'ម', 'យ', 'រ', 'ល', 'វ', 'ស', 
        'ហ', 'ឡ', 'អ'
      ];
    const charaterEnglish= [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
        'u', 'v', 'w', 'x', 'y', 'z'
      ];

});





