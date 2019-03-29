1. 资产首页

#### detail

| 类别 | 详情 |
| --- | --- |
| request-method | POST |
| request-url | /activity/doublexxx/detail |

#### params

| 参数名    | 类型  | 说明     | 示例 | 值选项 | rename |
| --------- | ----- | -------- | ---- | --- | --- |
| reward_id | int | 奖励的id | 111  | large:1, middle:2, small:3 | ggg |
| money | string | 奖励的金额 | 111  |  |

#### explain

| 参数名           | 类型      | 说明                 | parents | 示例  | 值选项 | rename |
| --------------- | --------- | ------------------- | ------- | ---- | ----- | ------ |
| chance          | int     | 剩余抽奖机会          | data    | 0 | large:1, middle:2, small:3 |  |
| rest_amount     | int     | 剩余足够抽奖的金额(分) | data    | 100000 |  |  |
| my_reward_count | int     | 已经获取过的奖励数量   | data    | 14 |  |  |
| rewards_ll         | array  | 随机抽奖数据          | data    | |  | ISssssssssssReeeee |
| chance          | int     | 剩余抽奖机会          | data.rewards_ll   | 0 | xx:1, xxx:2, xxxx:3 |  |
| tel          | string  | 手机号               | data.rewards_ll | 185xxxx6523 |  |  |
| rew    | object  | 奖励名称             | data.rewards_ll | 111积分 |  | Ixxxxxxx |
| rew_name | string | 奖品 | data.rewards_ll.rew | ansj | man:ha, wonman:hs |  |
| third | object | asd | data.rewards_ll.rew | asd |  |  |
| fourth | boolean | asd | data.rewards_ll.rew.third | asd |  |  |
| invest_url      | string  | 出借地址             | data    |  http://qsq.com/h5/#/products/activity/products-activity?except_types=6 |  |  |
| is_login        | boolean | 是否登录             | data    | true |  |  |
| activity_status | int     | 活动状态             | data    | 0活动未开始 1活动进行中 2活动已经结束 |  |  |
| list    | array  | 奖励名称             | data | 111积分 |  |  |
| rewards | object | asd | data.list | sdd |  |  |
| type | int | asd | data.list.rewards | asd |  |  |

#### example

```json
{
    "success": true,
    "message": "",
    "code": 200,
    "data": {
        "chance": 0,
        "rest_amount": 1000000,
        "my_reward_count": 14,
        "rewards": [
            {
                "mobile": "199****5696",
                "reward_name": "10元话费"
            },
            {
                "mobile": "155****1932",
                "reward_name": "100元京东卡"
            },
            {
                "mobile": "139****1031",
                "reward_name": "牛牛抱枕"
            }
        ],
        "invest_url": "http://qsq.com/h5/#/products/activity/products-activity?except_types=6",
        "is_login": true,
        "activity_status": 0
    }
}
```

2. ### xxxx

#### detail

| 类别 | 详情 |
| --- | --- |
| request-method | POST |
| request-url | /activity/dasfs/detail |

#### params

| 参数名    | 类型  | 说明     | 示例 | 值选项 |
| --------- | ----- | -------- | ---- | --- |
| reward_id | int | 奖励的id | 111  | large:1, middle:2, small:3 |
| money | string | 奖励的金额 | 111  |  |

#### explain

| 参数名           | 类型      | 说明                 | parents | 示例  | 值选项 |
| --------------- | --------- | ------------------- | ------- | ---- | ----- |
| chance          | int     | 剩余抽奖机会          | data    | 0 | large:1, middle:2, small:3 |
| rest_amount     | int     | 剩余足够抽奖的金额(分) | data    | 100000 |  |
| my_reward_count | int     | 已经获取过的奖励数量   | data    | 14 |  |
| rewards         | array   | 随机抽奖数据          | data    | |  |
| chance          | int     | 剩余抽奖机会          | data.rewards   | 0 | xx:1, xxx:2, xxxx:3 |
| tel          | string  | 手机号               | data.rewards | 185xxxx6523 |  |
| rew    | object  | 奖励名称             | data.rewards | 111积分 |  |
| rew_name | string | 奖品 | data.rewards.rew | ansj | man:ha, wonman:hs |
| third | object | asd | data.rewards.rew | asd |  |
| fourth | boolean | asd | data.rewards.rew.third | asd |  |
| invest_url      | string  | 出借地址             | data    |  http://qsq.com/h5/#/products/activity/products-activity?except_types=6 |  |
| is_login        | boolean | 是否登录             | data    | true |  |
| activity_status | int     | 活动状态             | data    | 0活动未开始 1活动进行中 2活动已经结束 |  |
| list    | array  | 奖励名称             | data | 111积分 |  |
| rewards | object | asd | data.list | sdd |  |
| type | int | asd | data.list.rewards | asd |  |

#### example

```json
{
    "success": true,
    "message": "",
    "code": 200,
    "data": {
        "chance": 0,
        "rest_amount": 1000000,
        "my_reward_count": 14,
        "rewards": [
            {
                "mobile": "199****5696",
                "reward_name": "10元话费"
            },
            {
                "mobile": "155****1932",
                "reward_name": "100元京东卡"
            },
            {
                "mobile": "139****1031",
                "reward_name": "牛牛抱枕"
            }
        ],
        "invest_url": "http://qsq.com/h5/#/products/activity/products-activity?except_types=6",
        "is_login": true,
        "activity_status": 0
    }
}
```