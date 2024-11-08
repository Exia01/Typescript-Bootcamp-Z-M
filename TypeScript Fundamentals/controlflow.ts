const isFiscalYearResetMarker = (month: string): boolean => {
    const fiscalMonths = ['January', 'February', 'November', 'December'];
    if (fiscalMonths.includes(month)) {
        return true;
    } else if (month === 'January' || month === 'December') {
        return true;
    }
    return false;
};

//using switch statement
const evaluateIfFruitVegetableOrLegume = (fruit: string): string => {
    switch (fruit.toLowerCase()) {
        case 'apple':
        case 'banana':
        case 'orange':
            return 'fruit';
        case 'broccoli':
        case 'carrot':
        case 'cauliflower':
            return 'vegetable';
        case 'pepper':
        case 'onion':
        case 'garlic':
            return 'legume';
        default:
            return 'unknown';
    }
};