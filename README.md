# art-markdown-parser

## Summary of functions
For art-framework parsing .md file to mock interface and mock base file.

## Environment
install global ts-node for execute ts script

```shell
yarn add global ts-node
```

## Install
install packages

```shell
yarn install
```

## How to use
#### 1. change the need to parse markdown file to your content.
   markdown file path: /test.md

#### 2. execute command to parse

```shell
ts-node ./src/index.ts
```
#### 3. get result
   result file path: /result/result.ts

## Functional test
#### 1. parse interface.ts to tsAst and observe structure
   file path: /test/sourceParser.ts

```shell
ts-node ./test/sourceParser.ts
```