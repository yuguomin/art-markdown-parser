"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 入口文件
const fileReader_1 = require("./md-to-mock/fileReader");
const extractor_1 = require("./md-to-mock/extractor");
const transform_1 = require("./md-to-mock/transform");
const generator_1 = require("./md-to-mock/generator");
/**
 * @description 生成需要的interface方法
 * 1- 读取 md
 * 2- 抽离需要的 md 内容
 * 3- 转换为 TS-AST
 * 4- 写入内容
 */
exports.parseMdToInterface = (output) => {
    try {
        const mdAST = fileReader_1.readMdFile();
        const transformData = extractor_1.extractNeedTransformData(mdAST);
        const mockAST = transform_1.createMockTsAst(transformData, output);
        generator_1.appendToFile(mockAST);
    }
    catch (err) {
        console.log('mock err', err);
    }
};
exports.parseMdToInterface('mock/home/xxx/xx/MineController.ts');
