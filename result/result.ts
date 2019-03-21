
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
export enum DoubleEleDetailRewardId {
    large = 1,
    middle = 2,
    small = 3
}
export enum DoubleooooDetailRewardId {
    large = 1,
    middle = 2,
    small = 3
}
export interface IHomeService {
    doublexxxDetail(reward_id: RewardId, money: string): Promise<AjaxResult<IDoublexxxDetail>>;
    doubleEleDetail(reward_id: DoubleEleDetailRewardId, money: string): Promise<AjaxResult<IDoubleEleDetail>>;
    doubleooooDetail(reward_id: DoubleooooDetailRewardId, money: string): Promise<AjaxResult<IDoubleooooDetail>>;
}
export enum Chance {
    large = 1,
    middle = 2,
    small = 3
}
export enum IDoublexxxDetailDataRewardsChance {
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
    chance: IDoublexxxDetailDataRewardsChance;
    tel: string;
    rew: IRew;
}
export interface IDoublexxxDetailDataListRewards {
    type: number;
}
export interface IList {
    rewards: IDoublexxxDetailDataListRewards;
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
export enum IDoubleEleDetailChance {
    large = 1,
    middle = 2,
    small = 3
}
export enum IDoubleEleDetailDataRewardsChance {
    xx = 1,
    xxx = 2,
    xxxx = 3
}
export enum IDoubleEleDetailDataRewardsDataRewardsRewRewName {
    man = "ha",
    wonman = "hs"
}
export interface IDoubleEleDetailDataRewardsDataRewardsRewThird {
    fourth: boolean;
}
export interface IDoubleEleDetailDataRewardsRew {
    rew_name: IDoubleEleDetailDataRewardsDataRewardsRewRewName;
    third: IDoubleEleDetailDataRewardsDataRewardsRewThird;
}
export interface IDoubleEleDetailRewards {
    chance: IDoubleEleDetailDataRewardsChance;
    tel: string;
    rew: IDoubleEleDetailDataRewardsRew;
}
export interface IDoubleEleDetailDataListRewards {
    type: number;
}
export interface IDoubleEleDetailList {
    rewards: IDoubleEleDetailDataListRewards;
}
export interface IDoubleEleDetail {
    chance: IDoubleEleDetailChance;
    rest_amount: number;
    my_reward_count: number;
    rewards: IDoubleEleDetailRewards[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IDoubleEleDetailList[];
}
export enum IDoubleooooDetailChance {
    large = 1,
    middle = 2,
    small = 3
}
export enum IDoubleooooDetailDataRewardsChance {
    xx = 1,
    xxx = 2,
    xxxx = 3
}
export enum IDoubleooooDetailDataRewardsDataRewardsRewRewName {
    man = "ha",
    wonman = "hs"
}
export interface IDoubleooooDetailDataRewardsDataRewardsRewThird {
    fourth: boolean;
}
export interface IDoubleooooDetailDataRewardsRew {
    rew_name: IDoubleooooDetailDataRewardsDataRewardsRewRewName;
    third: IDoubleooooDetailDataRewardsDataRewardsRewThird;
}
export interface IDoubleooooDetailRewards {
    chance: IDoubleooooDetailDataRewardsChance;
    tel: string;
    rew: IDoubleooooDetailDataRewardsRew;
}
export interface IDoubleooooDetailDataListRewards {
    type: number;
}
export interface IDoubleooooDetailList {
    rewards: IDoubleooooDetailDataListRewards;
}
export interface IDoubleooooDetail {
    chance: IDoubleooooDetailChance;
    rest_amount: number;
    my_reward_count: number;
    rewards: IDoubleooooDetailRewards[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IDoubleooooDetailList[];
}