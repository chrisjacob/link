console.log('Links...');

var APP = {};

// https://davidwalsh.name/query-string-javascript
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var APP.url = getUrlParameter('url'); // "?url=https://google.com" -> "https://google.com"

console.log('URL:');
console.log(APP.url);
