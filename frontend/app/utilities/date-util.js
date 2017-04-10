export default function (date) {
    return {
        date: new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric' }).format(new Date(date.date)),
        time: date.time
    };
}
