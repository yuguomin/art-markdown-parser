"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flattenArray_1 = require("../../utils/flattenArray");
const toCamelCase_1 = require("../../utils/toCamelCase");
const art_config_js_1 = __importDefault(require("../../art.config.js"));
const MarkDown_1 = require("../../constant/MarkDown");
/**
 * @description 生成最终的一个interface名字
 * @param detailTable api的detail表格块
 */
exports.createInterfaceName = (detailTable) => {
    let resultStr = '';
    let urlStr = '';
    const tableCells = flattenArray_1.flattenArray(detailTable.cells);
    tableCells.find((value, index) => {
        if (value === MarkDown_1.DetailTableMembers.requestUrl) {
            urlStr = tableCells[index + 1];
        }
    });
    urlStr = art_config_js_1.default ? urlStr.replace(/\/\w+/, '') : urlStr;
    resultStr = MarkDown_1.INTERFACE_NAME_PREFIX + toCamelCase_1.toCamelCase(toCamelCase_1.toCamelCase(urlStr, '/'), '-');
    return resultStr;
};
