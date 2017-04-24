import { SuperListPage } from './app.po';

describe('super-list App', () => {
  let page: SuperListPage;

  beforeEach(() => {
    page = new SuperListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
