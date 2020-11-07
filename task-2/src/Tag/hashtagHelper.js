export default function findHashtags(searchText) {
    var regexp = /(\s|^)#[\wа-яА-Я][\wа-яА-Я]+\b/gm
    let result = searchText.match(regexp);
    if (result) {
        result = result.map(function(s){ return s.trim();});
        return result;
    } else {
        return false;
    }
}