
export interface AjaxResult<T> {
    code: number;
    msg: string;
    data: T;
}

export interface IHomeService {
    bankWithdrawSupportBankList(): Promise<AjaxResult<IBankWithdrawSupportBankList>>;
}

export interface IBankList {
    id: number;
    bank_name: string;
    bank_pic: string;
}

export interface IBankWithdrawSupportBankList {
    bank_list: IBankList[];
}