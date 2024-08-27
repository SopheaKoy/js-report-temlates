function getPageNumber(pageIndex) {
    if (pageIndex == null) {return '';}

    const arabicToKhmerMap = {
        '0': '០',
        '1': '១',
        '2': '២',
        '3': '៣',
        '4': '៤',
        '5': '៥',
        '6': '៦',
        '7': '៧',
        '8': '៨',
        '9': '៩'
    };

    const pageNumber = (pageIndex + 1).toString();
    let khmerPageNumber = '';

    for (let i = 0; i < pageNumber.length; i++) {
        khmerPageNumber += arabicToKhmerMap[pageNumber[i]];
    }
    return khmerPageNumber;
}

function ep (a,b) {
    return a == b
}

function replaceNewline(templateStr) {
    if (templateStr != null) {
        return templateStr.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    } else {
        return '';
    }
}

Handlebars.registerHelper('numberKhmer', function (number) {
    const khmerNumbers = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
    return number.toString().split('').map(digit => khmerNumbers[parseInt(digit)]).join('');
});


function getTotalPages (pages) {
    if (!pages) {
        return ''
    }

    const totalPages = pages.length;
    return Handlebars.helpers.numberKhmer(totalPages);
}