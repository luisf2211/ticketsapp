/* FORMAT DATES INTO LOCAL FORMART */
export function getDates(issues) {
    const dateFormat = new Date(issues);
    if (issues == null) {
        return '-'; 
    } else {
        let dateFormated = dateFormat.getDay() + "/"+ dateFormat.getMonth() + "/"+ dateFormat.getFullYear(); 
        return dateFormated;
    }
}