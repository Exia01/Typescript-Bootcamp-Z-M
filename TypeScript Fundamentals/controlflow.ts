const isFiscalYearResetMarker = (month: string): boolean => {
    const fiscalMonths = ['January', 'February', 'November', 'December'];
    if (fiscalMonths.includes(month)) {
        return true;
    } else if (month === 'January' || month === 'December') {
        return true;
    }
    return false;
};