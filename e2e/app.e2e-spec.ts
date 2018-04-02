import { MarinecoverPage } from './app.po';

describe('marinecover App', () => {
  let page: MarinecoverPage;

  beforeEach(() => {
    page = new MarinecoverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
