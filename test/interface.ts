@Controller('/home')
export default class IndexController {
  @Get('/testme')
  public mockApi() {
    return {
      code: '200'
    };
  }
}