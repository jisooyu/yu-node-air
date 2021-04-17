const axios = require('axios')
const serviceKey = require('../keys/key')

const axdata = async (stationName, callback) => {
    const url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?';

    var ServiceKey = serviceKey.publicPortalkey

    var queryParams = encodeURIComponent('ServiceKey') + '=' + ServiceKey
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('dataTerm') + '=' + encodeURIComponent('DAILY');
    queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.3');
    queryParams += '&' + encodeURIComponent('stationName') + '=' + encodeURIComponent(stationName);
    queryParams += '&' + encodeURIComponent('_returnType') + '=' + encodeURIComponent('json')
    
    const fullurl = url + queryParams;
    try {
        const json = await axios.get(fullurl)
        callback(undefined, {air:json.data})
    } catch (error) {
        console.log('error broke out', error)
    }
}

module.exports = axdata;