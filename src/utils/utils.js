export const getSelectValue = (options, value) => {
    return options.find(item => item.value === value);
}


export function secondsToTime(secs) {
    var h = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var m = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var s = Math.ceil(divisor_for_seconds);
    return { h, m, s };
}