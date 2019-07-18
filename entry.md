1. test-demo

#### detail

| 类别 | 详情 |
| --- | --- |
| request-method | GET |
| request-url | /pb/card/ccccc |

#### params

| 参数名    | 类型  | 说明     | 示例 | 值选项 | rename |
| --------- | ----- | -------- | ---- | --- | --- |
| bankcard | string | 银行卡号 | 123412341234 | | |
| name | string | 姓名 | test | | |
| identity | string | 身份证号 | 511999999999999 | | |

#### explain

| 参数名           | 类型      | 说明                 | parents | 示例  | 值选项 | rename |
| --------------- | --------- | ------------------- | ------- | ---- | ----- | ------ |
| card_id| int |  | data| | | |
| customer_id| int | 用户ID | data| | | |
| card_num| string | 银行卡号 | data| | | |
| card_type| int | 卡片类型（1. 信用卡， 2.储蓄卡） | data| 1 | credit_card:1,debit_card:2 | |
| is_default| int | 是否是默认卡片 | data| 1 | not_default:0,default:1 | |
| card_pic| string | 卡片图片 | data| | | |
| bank_id| int | 银行ID | data| | | |
| bank_name| string | 银行全称 | data| | | |
| bank_short_name| string | 银行简称 | data| | | |
| bank_code| string | 银行代号 | data| | | |
| bank_status| int | 银行状态（0. 禁用， 1.可用） | data| 1 | disabled:0,enabled:1 | |
| bank_type| int | 卡片类型（0. 信用卡， 1.储蓄卡） | data| 1 | credit_card:0,debit_card:1 | |
| bank_pic| string | 银行图片 | data| | | |
| bank_propaganda_pic| string | 银行宣传图片 | data| | | |
| bank_info| string | 银行详情 | data| | | |
| bank_hot_sort| int | 银行热门排序 | data| | | |
| bank_url| string | 办卡银行链接 | data| | | |

#### example

```json
{
    "code": 0,
    "msg": "绑定成功|身份证号不是15或者18位|该用户已经绑定过此卡",
    "data": {
        "card_id": 11,
        "customer_id": 1,
    }
}
```