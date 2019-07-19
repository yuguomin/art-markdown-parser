
@Controller('/home')
export default class MineController {
  @Get('/pb/card/ccccc')
  public pbCardCcccc() {
    return {
      code: 0,
      msg: "绑定成功|身份证号不是15或者18位|该用户已经绑定过此卡",

      data: {
          "card_id": 11,
          "customer_id": 1,
      }
    };
  }
}