import { readMdFile } from "./md-to-interface/fileReader";
import { extractNeedTransformData } from "./md-to-interface/extractor";
import { createTsAST } from "./md-to-interface/transform";
import { appendToFile } from "./md-to-interface/generator";

// 入口文件
export const startMdToInterface = () => {
  const mdAST = readMdFile();
  const transformData =  extractNeedTransformData(mdAST);
  const interfaceAST = createTsAST(transformData);
  appendToFile(interfaceAST);
}

startMdToInterface();