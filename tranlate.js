var langCode = getParameterByName('lang');
if (langCode) {
    new google.translate.TranslateElement({
        tlid: 'target',
        from: 'auto',
        to: langCode
    });
} else {
    new google.translate.TranslateElement({
        tlid: 'target',
        from: 'auto',
        to: 'en'
    });
}
function getParameterByName(name) {
    name = name.replace(/[[]/g, '\\[').replace(/[]]/g, '\\]');
    var regex = new RegExp('[?&]' + name + '=([^&#]*)');
    var results = regex.exec(document.location.search);
    return results === null ? undefined : decodeURIComponent(results[1]);
}
