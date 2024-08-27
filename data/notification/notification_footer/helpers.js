function getPageNumber(pageIndex, lng) {
    if (pageIndex == null) {
        return '';
    }
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

    if (lng === "km") {
        let khmerPageNumber = '';
        for (let i = 0; i < pageNumber.length; i++) {
            khmerPageNumber += arabicToKhmerMap[pageNumber[i]];
        }
        return khmerPageNumber;
    } else {
        return pageNumber;
    }
}

function getTotalPages (pages) {
    if (!pages) {
        return ''
    }

    return pages.length
}
function replaceNewline(templateStr) {
    if (templateStr != null) {
        return templateStr.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    } else {
        return '';
    }
}