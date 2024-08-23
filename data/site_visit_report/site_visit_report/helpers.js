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
        return templateStr.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    } else {
        return '';
    }
}


Handlebars.registerHelper('equal', function(a, b) {
    return a == b
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


function format(key,values){
    const khmerNumber    = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']; // Khmer digits
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
      ]

    // format data base on values
    if (key === 'convertToKhmer') {

        // Convert the numeric value to Khmer numerals
        const valueStr = values.toString(); // Convert the value to a string
        const khmerValue = valueStr.split('')
                                    .map(digit => khmerNumber[englishNumber.indexOf(digit)])
                                    .join('');
        console.log(khmerValue);

    } else if (key === 'convertToEnglish') {
        // Convert English letters to Khmer characters
        const convertedValue = values.split('')
                                    .map(char => {
                                        const index = charaterEnglish.indexOf(char.toLowerCase());
                                        return index !== -1 ? charaterKhmer[index] : char;
                                    })
                                    .join('');
        console.log(convertedValue);
    } else {
        console.log('Invalid key');
    }
}






Handlebars.registerHelper('CharaterKhmer', function(a) {
    const charaterKhmer  = [
        'ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ', 'ឈ', 'ញ', 
        'ដ', 'ឋ', 'ឌ', 'ឍ', 'ណ', 'ត', 'ថ', 'ទ', 'ធ', 'ន', 
        'ប', 'ផ', 'ព', 'ភ', 'ម', 'យ', 'រ', 'ល', 'វ', 'ស', 
        'ហ', 'ឡ', 'អ'
    ];

    // Convert each digit of the input number to the corresponding Khmer character
    const numberStr = a.toString();
    const result = numberStr.split('').map(digit => {
        const index = parseInt(digit, 10) - 1; // Convert to zero-based index
        return charaterKhmer[index];
    }).join('');

    return new Handlebars.SafeString(result);
});
