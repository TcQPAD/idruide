import { GroceryListManagerPage } from './app.po';

describe('grocery-list-manager App', () => {
  let page: GroceryListManagerPage;

  beforeEach(() => {
    page = new GroceryListManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
