function getPageNumber(pageIndex, lng) {
    if (pageIndex == null) {
        return '';
    }

    const khmer_numer = {
        "0": "០",
        "1": "១",
        "2": "២",
        "3": "៣",
        "4": "៤",
        "5": "៥",
        "6": "៦",
        "7": "៧",
        "8": "៨",
        "9": "៩",
    };

    const pageNumber = (pageIndex + 1).toString(); // Convert pageIndex to a string

    if (lng === "km") {
        let khmerPageNumber = '';
        for (let i = 0; i < pageNumber.length; i++) {
            khmerPageNumber += khmer_numer[pageNumber[i]];
        }
        return khmerPageNumber;
    } else {
        return pageNumber;
    }
}
