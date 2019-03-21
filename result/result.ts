
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
    doubleEleDetail(reward_id: RewardId1, money: string): Promise<AjaxResult<IDoubleEleDetail>>;
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
export interface IRew {
    rew_name: RewName;
    third: IThird;
}
export interface IRewards {
    chance: Chance1;
    tel: string;
    rew: IRew;
}
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
    rewards: IRewards[];
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
export enum RewName1 {
    man = "ha",
    wonman = "hs"
}
export interface IThird1 {
    fourth: boolean;
}
export interface IRew1 {
    rew_name: RewName1;
    third: IThird1;
}
export interface IRewards2 {
    chance: Chance3;
    tel: string;
    rew: IRew1;
}
export interface IRewards3 {
    type: number;
}
export interface IList1 {
    rewards: IRewards3;
}
export interface IDoubleEleDetail {
    chance: Chance2;
    rest_amount: number;
    my_reward_count: number;
    rewards: IRewards2[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IList1[];
}