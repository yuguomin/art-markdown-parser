
export interface AjaxResult<T> {
    code: number;
    message: string;
    data: T;
}

export enum ggg {
    large = 1,
    middle = 2,
    small = 3
}

export interface IHomeService {
    doublexxxDetail(reward_id: ggg, money: string): Promise<AjaxResult<IDoublexxxDetail>>;
}

export enum Chance {
    large = 1,
    middle = 2,
    small = 3
}

export interface IRewardsLl {}

export enum Chancexxx {
    xx = 1,
    xxx = 2,
    xxxx = 3
}

export interface Ixxxxxxx {}
export interface IRewards {}

export interface IRewards1 {
    type: number;
}

export interface IList {
    rewards: IRewards1;
}

export interface IDoublexxxDetail {
    chance: Chance;
    rest_amount: number;
    my_reward_count: number;
    rewards_ll: number[];
    chancexxx: Chancexxx;
    tel: string;
    rew: Ixxxxxxx;
    rewards: IRewards;
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IList[];
}