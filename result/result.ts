
export interface AjaxResult<T> {
    code: number;
    msg: string;
    data: T;
}

export enum ggg {
    large = 1,
    middle = 2,
    small = 3
}

export enum RewardId {
    large = 1,
    middle = 2,
    small = 3
}

export interface IHomeService {
    doubleXxxDetail(reward_id: ggg, money: string): Promise<AjaxResult<IDoubleXxxDetail>>;
    dasFsDetail(reward_id: RewardId, money: string): Promise<AjaxResult<IDasFsDetail>>;
}

export enum Chance {
    large = 1,
    middle = 2,
    small = 3
}

export enum Chance1 {
    xx = 1,
    xxx = 2,
    xxxx = 3
}

export enum RewName {
    man = "ha",
    wonman = "hs"
}

export interface IThird {
    fourth: boolean;
}

export interface Ixxxxxxx {
    rew_name: RewName;
    third: IThird;
}

export interface ISssssssssssReeeee {
    chance: Chance1;
    tel: string;
    rew: Ixxxxxxx;
}

export interface IRewards {
    type: number;
}

export interface IList {
    rewards: IRewards;
}

export interface IDoubleXxxDetail {
    chance: Chance;
    rest_amount: number;
    my_reward_count: number;
    rewards_ll: ISssssssssssReeeee[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IList[];
    testarr: string[];
}

export enum Chance2 {
    large = 1,
    middle = 2,
    small = 3
}

export enum Chance3 {
    xx = 1,
    xxx = 2,
    xxxx = 3
}

export enum RewName1 {
    man = "ha",
    wonman = "hs"
}

export interface IThird1 {
    fourth: boolean;
}

export interface IRew {
    rew_name: RewName1;
    third: IThird1;
}

export interface IRewards1 {
    chance: Chance3;
    tel: string;
    rew: IRew;
}

export interface IRewards2 {
    type: number;
}

export interface IList1 {
    rewards: IRewards2;
}

export interface IDasFsDetail {
    chance: Chance2;
    rest_amount: number;
    my_reward_count: number;
    rewards: IRewards1[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IList1[];
}