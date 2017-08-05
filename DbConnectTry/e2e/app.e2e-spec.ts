import { DbConnectTryPage } from './app.po';

describe('db-connect-try App', () => {
  let page: DbConnectTryPage;

  beforeEach(() => {
    page = new DbConnectTryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
