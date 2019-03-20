
export interface IHomeService {
    doublexxxDetail(reward_id: number, money: string): Promise<AjaxResult<IDoublexxxDetail>>;
}
export enum chance {
    large = 1,
    middle = 2,
    small = 3
}
export enum rew_name {
    man = "ha",
    wonman = "hs"
}
export interface IThird {
    fourth: boolean;
}
export interface IRew {
    rew_name: string;
    third: IThird;
}
export interface IRewards {
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
    chance: number;
    rest_amount: number;
    my_reward_count: number;
    rewards: IRewards[];
    invest_url: string;
    is_login: boolean;
    activity_status: number;
    list: IList[];
}