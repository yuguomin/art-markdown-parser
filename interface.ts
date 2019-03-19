export interface IInvestTemplate {
  investIndex(token: string): Promise<AjaxResult<IInvestIndex>>;
  getReward(): Promise<AjaxResult<IGetReward>>;
  getInfo(token: string, reward_id: number): Promise<AjaxResult<IGetInfo>>;
}