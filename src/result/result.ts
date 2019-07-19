
export interface AjaxResult<T> {
    code: number;
    msg: string;
    data: T;
}

export interface IHomeService {
    cardCcccc(bankcard: string, name: string, identity: string): Promise<AjaxResult<ICardCcccc>>;
}

export enum CardType {
    creditCard = 1,
    debitCard = 2
}

export enum IsDefault {
    notDefault = 0,
    default = 1
}

export enum BankStatus {
    disabled = 0,
    enabled = 1
}

export enum BankType {
    creditCard = 0,
    debitCard = 1
}

export interface ICardCcccc {
    card_id: number;
    customer_id: number;
    card_num: string;
    card_type: CardType;
    is_default: IsDefault;
    card_pic: string;
    bank_id: number;
    bank_name: string;
    bank_short_name: string;
    bank_code: string;
    bank_status: BankStatus;
    bank_type: BankType;
    bank_pic: string;
    bank_propaganda_pic: string;
    bank_info: string;
    bank_hot_sort: number;
    bank_url: string;
}