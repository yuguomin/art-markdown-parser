"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const routing_controllers_1 = require("routing-controllers");
let MineController = class MineController {
    pbBankWithdrawSupportBankList() {
        return {
            msg: '获取用户提现支持银行列表成功',
            code: 0,
            data: { bank_list: [{ id: 0, bank_name: '中国工商银行', bank_pic: 'http://credit-card-1251122539.cossh.myqcloud.com/credit_card/bank/2018-09-06/bank_0001113.png' }] }
        };
    }
};
__decorate([
    routing_controllers_1.Post('/pb/bank/withdraw-support-bank-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MineController.prototype, "pbBankWithdrawSupportBankList", null);
MineController = __decorate([
    routing_controllers_1.Controller('/home')
], MineController);
exports.default = MineController;
