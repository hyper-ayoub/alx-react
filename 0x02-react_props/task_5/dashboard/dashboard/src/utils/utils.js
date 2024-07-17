 // first function getFullYear //
export function getFullYear() {
    return new Date().getFullYear();
}
// second function getFooterCopy //
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}
// third function getLatestNotifications //
export function getLatestNotification() {
        return '<strong>Urgent requirement</strong> - complete by EOD';  
}
