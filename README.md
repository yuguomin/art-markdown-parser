# art-markdown-parser

## 代码说明
用于为art开发业务代码时，通过规范的markdow文件生成对应模块所需interface和mock文件。
工具库已经嵌入art项目构造工具，详细使用需要借助[art-core](https://github.com/zbw322092/art-core.git)进行。

## 环境配置
安装全局的ts-node用于执行ts脚本

```shell
yarn add global ts-node
```
[关于yarn依赖包管理工具](https://yarn.bootcss.com/docs/install/#mac-stable)

## 安装
安装依赖包

```shell
yarn install
```

## 使用方法
#### 1. 将需要转换的markdow文件内容写入对应编译文件中
   markdown 文件地址: /entry.md
   
#### 2. 执行命令进行编译

```shell
yarn parse
```
或者
```shell
ts-node ./src/index.ts
```

#### 3. 获取编译结果
   结果文件地址: /result/result.ts

## markdown文件规范
1. 每一个md文件可以写入多个api接口文档，每个接口直接以序列区分。
 * 例如 1. 首页页面接口 2. 产品详情接口
 * 具体一个文件写多少个接口文档以功能划分为定。
2. 每个接口文档，定义有四个table

   ```
   #### detail
   #### params
   #### explain
   #### example
   ```

2.1. detail 分别是定义请求方法和请求地址
	
```
#### detail

| 类别 | 详情 |
| --- | --- |
| request-method |  |
| request-url |  |
```
* 请求方法可写入GET POST DELETE PUT，规范为大写，大小写都可生成。
* 请求地址为请求的path，一般以 / 开头，支持中划线。
* 这个表格内容均为必填项
	

2.2 params 是定义接口请求所需的参数

```
#### params

| 参数名    | 类型  | 值选项 | 示例 | 说明 | rename |
| --------- | ----- | -------- | ---- | --- | --- |
| reward_id? | int | large:1, middle:2, small:3 | 111 | 奖励的id | |
```
* 参数名中最后写入问号?即表示可选项，中英文问号都支持，标准为英文。
* 类型 分别为 string boolean number int float object array 规范都小写，大小写都可生成。
* 值选项 填写内容会生成枚举类型，以:进行分割，左边为定义枚举值含义(英文)，右边定义值，boolean值不需要写枚举，对于true和false的含义描述可以写在说明中。
* 说明，后面会用于生成文件的注释块。
* rename，主要用于对于生成出来的interface名有更改后，可以在其中写入，保证下次生成的名字为修改后的，只对于object和array有效。
* 请求的header内容不可以写在此处。

2.3 explain 定义接口返回参数的定义

```
#### explain

| 参数名           | 类型      | parents | 值选项 | 示例 | 说明 | rename |
| --------------- | --------- | ------------------- | ------- | ---- | ----- | --- |
| chance          | object     |  data    |  |  | 剩余抽奖机会 | IXchance |
| count          | int     |  data.chance    | large:1, middle:2, small:3 | 0 | 剩余抽奖机会 | IXchance |
| list          | array(string)     |  data    |  | 0 | 列表 |  |
| xlist          | array     |  data    |  | 0 | 列表 |  |
```
* 参数名中最后写入问号?即表示可选项，中英文问号都支持，标准为英文。
* 写入方式基本等同于params。
* 类型array，支持number, string, boolean, object等value类型，即在array后使用(type)定义，不加()默认为object类型。不支持多维数组。
* 这里的参数是对data的说明，不包含code和message。
* parents，用于数据节点关系，示例中的chance，parents为data，代表是chance为data子级，data\['chance'\]即可获取。
  count的parents为data.chance, 代表count为data.chance的子集，很长的父级链是防止同接口不同层级同名参数场景。
 
2.4 example

```
#### example

 ```json
	{
	    "success": true,
	    "message": "",
	    "code": 200,
	    "data": {
	        "chance": 0,
	        "rewards": [
	            {
	                "mobile": "199****5696",
	                "reward_name": "10元话费"
	            },
	            {
	                "mobile": "155****1932",
	                "reward_name": "100元京东卡"
	            }
	        ],
	        "is_login": true,
	        "activity_status": 0
	    }
	}
 ```
```

* 这里的json会用于生成mock数据使用
	


## 开发此工具包
#### 1. 编译ts文件查看对应的ts语法树
   编译的ts文件地址: /test/sourceParser.ts

```shell
ts-node ./test/sourceParser.ts
```

#### 2. 对应基本语法树template文件夹
*  /src/template