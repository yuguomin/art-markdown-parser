
export interface AjaxResult<T> {
    code: number;
    msg: string;
    data: T;
}

export enum TypeId {
    daichao_index_page = 1,
    daichao_loan_page = 2,
    pkg_index_page = 3,
    pkg_repay_page = 4
}

export interface IHomeService {
    dataStatisticsBasic(type_id: TypeId): Promise<AjaxResult<IDataStatisticsBasic>>;
}

export interface IDataStatisticsBasic {}