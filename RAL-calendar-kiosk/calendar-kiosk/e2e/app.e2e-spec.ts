import { CalendarKioskPage } from './app.po';

describe('calendar-kiosk App', () => {
  let page: CalendarKioskPage;

  beforeEach(() => {
    page = new CalendarKioskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
