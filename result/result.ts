
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
export enum RewardId2 {
    large = 1,
    middle = 2,
    small = 3
}
export interface IHomeService {
    doublexxxDetail(reward_id: RewardId, money: string): Promise<AjaxResult<IDoublexxxDetail>>;
    doubleEleDetail(reward_id: RewardId1, money: string): Promise<AjaxResult<IDoubleEleDetail>>;
    doubleooooDetail(reward_id: RewardId2, money: string): Promise<AjaxResult<IDoubleooooDetail>>;
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
export interface IDoubleEleDetailDataRewardsDataRewardsRewThird {
    fourth: boolean;
}
export interface IDoubleEleDetailDataRewardsRew {
    rew_name: RewName1;
    third: IDoubleEleDetailDataRewardsDataRewardsRewThird;
}
export interface IDoubleEleDetailRewards {
    chance: Chance3;
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
    chance: Chance2;
    rest_amount: number;
    my_reward_count: number;
    rewards: IDoubleEleDetailRewards[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IDoubleEleDetailList[];
}
export enum Chance4 {
    large = 1,
    middle = 2,
    small = 3
}
export enum Chance5 {
    xx = 1,
    xxx = 2,
    xxxx = 3
}
export enum RewName2 {
    man = "ha",
    wonman = "hs"
}
export interface IDoubleooooDetailDataRewardsDataRewardsRewThird {
    fourth: boolean;
}
export interface IDoubleooooDetailDataRewardsRew {
    rew_name: RewName2;
    third: IDoubleooooDetailDataRewardsDataRewardsRewThird;
}
export interface IDoubleooooDetailRewards {
    chance: Chance5;
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
    chance: Chance4;
    rest_amount: number;
    my_reward_count: number;
    rewards: IDoubleooooDetailRewards[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IDoubleooooDetailList[];
}