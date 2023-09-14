function lastSingleLetterToNewLine(el){
    let result = '';
    for(var i = 0; i < el.length; i++){
        const temp = el[i-1]+el[i]+el[i+1];
        if((/\s[a-zA-Z]\s/).test(temp)){
            result += el[i]+'\u00A0';
            i++;
        }
        else result += el[i];
    }
    return result;
}
export default lastSingleLetterToNewLine;