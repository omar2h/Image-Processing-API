"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkError = exports.validateInput = void 0;
var express_validator_1 = require("express-validator");
var IMAGES = [
    'fjord',
    'encenadaport',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica',
];
var validateInput = function () { return [
    (0, express_validator_1.query)('filename')
        .notEmpty()
        .withMessage('Filename is missing')
        .isIn(IMAGES)
        .withMessage('Image is not found'),
    (0, express_validator_1.query)('width')
        .notEmpty()
        .withMessage('Width is missing')
        .isNumeric()
        .withMessage('Width must be a number'),
    (0, express_validator_1.query)('height')
        .notEmpty()
        .withMessage('Height is missing')
        .isNumeric()
        .withMessage('Height must be a number'),
]; };
exports.validateInput = validateInput;
//check for error msg
var checkError = function (req, res, next) {
    var errorFormatter = function (_a) {
        var msg = _a.msg, param = _a.param;
        // Build your resulting errors however you want! String, object, whatever - it works!
        return "[".concat(param, "]: ").concat(msg);
    };
    var errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array({ onlyFirstError: true }));
    }
    next();
};
exports.checkError = checkError;
