
export interface AjaxResult<T> {
    code: number;
    msg: string;
    data: T;
}

export enum TypeId {
    daichaoIndexPage = 1,
    daichaoLoanPage = 2,
    pkgIndexPage = 3,
    pkgRepayPage = 4
}

export interface IHomeService {
    dataStatisticsBasic(type_id: TypeId): Promise<AjaxResult<IDataStatisticsBasic>>;
}

export interface IDataStatisticsBasic {}