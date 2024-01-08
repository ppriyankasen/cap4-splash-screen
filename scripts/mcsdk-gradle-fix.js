let fs = require('fs');

const GRADLE_FILE = './node_modules/cordova-plugin-marketingcloudsdk/src/android/build/marketingcloudsdk.gradle';
const PLUGIN_REGEX = /  apply plugin: com.google.gms.googleservices.GoogleServicesPlugin/;
const PLUGIN_REPLACE = '//apply plugin: com.google.gms.googleservices.GoogleServicesPlugin';
const REPO_REGEX = /http:\/\//
const REPO_REPLACE = 'https://';

module.exports = function (ctx) {
    console.log('========================================');
    console.log('updating marketing cloud sdk gradle file');
    console.log('========================================');

    fs.readFile(GRADLE_FILE, (err, data) => {
        if (err) {
            console.error(err.message);
            return;
        }

        if (data) {
            data = data.toString();
            data = data.replace(PLUGIN_REGEX, PLUGIN_REPLACE);
            data = data.replace(REPO_REGEX, REPO_REPLACE);

            fs.writeFile(GRADLE_FILE, Buffer.from(data), (err) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
            })
        }
    });
};