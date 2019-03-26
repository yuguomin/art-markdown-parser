
export interface AjaxResult<T> {
    code: number;
    message: string;
    data: T;
}

export enum RewardId {
    large = 1,
    middle = 2,
    small = 3
}

export enum RewardId1 {
    large = 1,
    middle = 2,
    small = 3
}

export interface IHomeService {
    doublexxxDetail(reward_id: RewardId, money: string): Promise<AjaxResult<IDoublexxxDetail>>;
    dasfsDetail(reward_id: RewardId1, money: string): Promise<AjaxResult<IDasfsDetail>>;
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

export interface IRewardsLl {
    chance: Chance1;
}

export interface IRewards {
    type: number;
}

export interface IList {
    rewards: IRewards;
}

export interface IDoublexxxDetail {
    chance: Chance;
    rest_amount: number;
    my_reward_count: number;
    rewards_ll: IRewardsLl[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IList[];
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

export enum RewName {
    man = "ha",
    wonman = "hs"
}

export interface IThird {
    fourth: boolean;
}

export interface IRew {
    rew_name: RewName;
    third: IThird;
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

export interface IDasfsDetail {
    chance: Chance2;
    rest_amount: number;
    my_reward_count: number;
    rewards: IRewards1[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IList1[];
}