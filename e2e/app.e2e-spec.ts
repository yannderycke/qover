import { QOVERPage } from './app.po';

describe('qover App', function() {
  let page: QOVERPage;

  beforeEach(() => {
    page = new QOVERPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
