
export enum RewardId {
    large = 1,
    middle = 2,
    small = 3
}
export interface IHomeService {
    doublexxxDetail(reward_id: RewardId, money: string): Promise<AjaxResult<IDoublexxxDetail>>;
}
export enum Chance {
    large = 1,
    middle = 2,
    small = 3
}
export enum RewardsChance {
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
    chance: RewardsChance;
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