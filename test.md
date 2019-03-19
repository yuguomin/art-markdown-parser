1. ### 资产首页

#### detail
| 类别 | 详情 |
| --- | --- |
| request-method | POST |
| request-url | /activity/doublexxx/detail |

#### params
| 参数名    | 类型  | 说明     | 示例 |
| --------- | ----- | -------- | ---- |
| reward_id | int | 奖励的id | 111  |

#### explain
| 参数名           | 类型      | 说明                 | parents | 示例  |
| --------------- | --------- | ------------------- | ------- | ---- |
| chance          | int     | 剩余抽奖机会          | data    | 0 |
| rest_amount     | int     | 剩余足够抽奖的金额(分) | data    | 100000 |
| my_reward_count | int     | 已经获取过的奖励数量   | data    | 14 |
| rewards         | array   | 随机抽奖数据          | data    | |
| tel          | string  | 手机号               | data.rewards | 185xxxx6523 |
| rew    | object  | 奖励名称             | data.rewards | 111积分 |
| rew_name | string | 奖品 | data.rewards.rew | ansj |
| third | object | asd | data.rewards.rew | asd |
| fourth | boolean | asd | data.rewards.rew.third | asd |
| invest_url      | string  | 出借地址             | data    |  http://qsq.com/h5/#/products/activity/products-activity?except_types=6 |
| is_login        | boolean | 是否登录             | data    | true |
| activity_status | int     | 活动状态             | data    | 0活动未开始 1活动进行中 2活动已经结束 |
| list    | array  | 奖励名称             | data | 111积分 |
| rewards | object | asd | data.list | sdd |
| type | int | asd | data.list.rewards | asd |

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