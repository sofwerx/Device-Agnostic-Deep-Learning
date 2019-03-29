var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var faceapi = require('face-api.js');
var commons_1 = require('./commons');
function run() {
    yield commons_1.faceDetectionNet.loadFromDisk('../../weights');
    var img = yield commons_1.canvas.loadImage('../images/bbt1.jpg');
    var detections = yield faceapi.detectAllFaces(img, commons_1.faceDetectionOptions);
    var out = faceapi.createCanvasFromMedia(img);
    faceapi.drawDetection(out, detections);
    commons_1.saveFile('faceDetection.jpg', out.toBuffer('image/jpeg'));
    console.log('done, saved results to out/faceDetection.jpg');
}
run();
