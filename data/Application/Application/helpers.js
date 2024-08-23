
Handlebars.registerHelper('eq', function (v1, v2, options) {
    if (v1 == v2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper('neq', function (v1, v2, options) {
    if (v1 != v2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('sumlist', function (list, key, options) {
    let v = 0;
    list.forEach(e => {
        if (e != null) {
            v += e[key]
        }
    })
    return v
});

Handlebars.registerHelper('formatdate', function (datestr, key, options) {
    if (datestr != null && datestr != '') {
        const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"]

        const d = new Date(datestr)
        return `ចុះថ្ងៃទី${ (d.getDate() + '').padStart(2, '0')} ខែ${ months[d.getMonth()]} ឆ្នាំ${d.getFullYear()}`
    } else {
        return ''
    }
});

Handlebars.registerHelper('formatdate1', function (datestr, key, options) {
    if (datestr != null && datestr != '') {
        const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"]
        const d = new Date(datestr)
        return `ចុះថ្ងៃទី${ (d.getDate() + '').padStart(2, '0')} ខែ${ months[d.getMonth()]} ឆ្នាំ${d.getFullYear()}`
    } else {
        return ''
    }
});

Handlebars.registerHelper('formatdateKhmer', function (datestr, key, options) {
    if (datestr != null && datestr != '') {
        const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"]
        const d = new Date(datestr)
        return `ថ្ងៃទី${ (d.getDate() + '').padStart(2, '0')} ខែ${ months[d.getMonth()]} ឆ្នាំ${d.getFullYear()}`
    } else {
        return ''
    }
});

// function to format date as 07 january 2024 
Handlebars.registerHelper('formatdate2', function(apiDateStr) {
    if (apiDateStr != null && apiDateStr != '') {
        
        const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];

        const apiDate = new Date(apiDateStr);
        
        return `${(apiDate.getDate() + '').padStart(2, '0')} ${months[apiDate.getMonth()]} ${apiDate.getFullYear()}`;
    } else {
        return '';
    }
});

// Assuming months array is defined elsewhere in your code
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

Handlebars.registerHelper('formatdate3', function(apiDateStr) {
    // Check if the API date string is not null or empty
    if (apiDateStr != null && apiDateStr != '') {
        const apiDate = new Date(apiDateStr);

        // Use substring to get the first 3 characters of the month name
        return `${(apiDate.getDate() + '').padStart(2, '0')} ${months[apiDate.getMonth()].substring(0, 3)} ${apiDate.getFullYear()}`;
    } else {
        // Return an empty string if the API date string is null or empty
        return '';
    }
});

Handlebars.registerHelper('formatphonenumber', function (number) {

    let formattedNumber = parseInt(number); // Convert to integer

    return formattedNumber;
});




Handlebars.registerHelper('formatpercentage', function (data, key, options) {
    if (data != null && data != '') {
        return data + '%'
    } else {
        return ''
    }
});

Handlebars.registerHelper('increaseone', function (data, key, options) {
    return data + 1
});


Handlebars.registerHelper('formatnumber', function (number, ifnull = 0, options) {
    if (number == null) {
        return ifnull
    } else {
        return number.toLocaleString();
    }
});

Handlebars.registerHelper('getcheckboxeq', function (v1, v2, options) {
    if (v1 == v2) return '☑'; else return '☐';
});

Handlebars.registerHelper('getcheckboxneq', function (v1, v2, options) {
    if (v1 != v2) return '☑'; else return '☐';
});

Handlebars.registerHelper('checktickbox', function (v1, v2, options) {
    if (v1 === v2) {
        return '☑'; // Return checked symbol if v1 equals v2
    } else {
        return '☐'; // Return unchecked symbol if v1 does not equal v2
    }
});

Handlebars.registerHelper('hasMatchingBenefit', function(employee_benefits, code) {
    return employee_benefits.some(function(benefit) {
        return benefit.code === code;
    });
});



// {{#eq company_type.keyword "corporation"}}☑{{else}}🗸{{/eq}}
// {{ formatnumber energy_needed_oil 0}}
// ('▢', '☐').replace(☑☐)

// function using format Currency
Handlebars.registerHelper('formatCurrency', function(number) {
  const formattedNumber = number.toLocaleString();
  return formattedNumber;
});

// GET TRANSLATE BASE ON LANGUAGE 
Handlebars.registerHelper('translatelanguage' , function(keyword , language){

    // Check if the keyword exists and if the language translation exists
    if (keyword && keyword && keyword[language]) {
        return keyword[language]; 
    } else {
        // Return an empty string if the translation doesn't exist for the specified language
        return "";
    }
});


// this function using check language 
Handlebars.registerHelper("check_lng", function(lng) {
    // Check if the translation for the specified language exists
    if (lng === "km") {
        return lng; // Return the translation for the specified language
    } else {
        return ""; // Return an empty string if translation is not available
    }
});

Handlebars.registerHelper('formatCurrency', function(number) {
    if (number == null) {
        return ''
    } else {
        const formattedNumber = number.toLocaleString();
        return formattedNumber;
    }
});