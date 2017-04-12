var notify = require('gulp-notify');
var beep = require('beepbeep');
var gutil = require('gulp-util');

var env = gutil.env.env || 'development';

exports.onError = function (error) {
    notify.onError({
        title: 'Gulp error',
        message: error.message
    })(error);
    beep(3);
    this.emit('end');
};

function readKeys(filename) {
    var keys = null;
    try {
        keys = require(filename)
    } catch (e) {
        console.error('No config file found at: ' + filename);
    } finally {
        return keys;
    }
}

exports.getKeys = function () {
    var keys = readKeys('./config/' + env);
    keys.environment = env;
    return keys;
};
