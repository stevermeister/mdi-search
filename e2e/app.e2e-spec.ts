import { MdiPage } from './app.po';

describe('mdi App', function() {
  let page: MdiPage;

  beforeEach(() => {
    page = new MdiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
