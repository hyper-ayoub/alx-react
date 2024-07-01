// function import here //
// make sure to import render && act && @testing-library/jest-dom/extend-expect //
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';





// Test case for getFullYear //
test('getFullYear will return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

// Test cases for getFooterCopy //
test('getFooterCopy returns the correct string when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns the correct string when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test case for getLatestNotification
test('getLatestNotification returns the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
