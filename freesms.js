const http = require('https');

function freesms(msg, user, pass) {
    msg = encodeURIComponent(msg);
    http.get({
        hostname: 'smsapi.free-mobile.fr',
        port: 443,
        path: `/sendmsg?user=${user}&pass=${pass}&msg=${msg}`
    }, (res) => {
        //console.log(res.req);
        console.log(`Transmitted`);
    });
}
module.exports = freesms;