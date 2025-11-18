const request = require('postman-request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/search/geocode/v6/forward?place=" + encodeURIComponent(address) + "&access_token=pk.eyJ1Ijoib21rYXJhc2FsIiwiYSI6ImNtZ2FvdXhibjB0NjEyanM4NGV4ZXA5c3MifQ.kIlqkgKfxiYweFXcmLcycg&limit=1";

    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to location services!", undefined);
        } else if (body.features === undefined) {
            callback("Unable to find location!", undefined);
        } else if (body.features.length === 0) {
            callback("Unable to find location. Tre another search.", undefined);
        } else {
            const latitude = body.features[0].properties.coordinates.latitude;
            const longitude = body.features[0].properties.coordinates.longitude;
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: body.features[0].properties.full_address
            });
        }
    });
};

module.exports = geocode;