var customErrors = require('../src/atropa-customErrors.js');

try {
    Object.keys(customErrors).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = customErrors[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-customErrors.js');
}

Object.keys(customErrors.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = customErrors.data[prop];
    }
);
