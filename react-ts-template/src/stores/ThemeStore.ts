import { observable, action, makeObservable, reaction } from 'mobx';

type Theme = 'dark' | 'light';

export const themes: Theme[] = ['dark', 'light'];

class ThemeStore {
  @observable
  activeTheme: Theme = localStorage.ACTIVE_THEME;

  constructor() {
    makeObservable(this);

    reaction(
      () => [this.activeTheme],
      () => {
        document.body.dataset.theme = this.activeTheme;
      },
      { fireImmediately: true }
    );
  }

  @action
  changeActiveTheme = (newTheme: string): void => {
    if (newTheme !== 'dark' && newTheme !== 'light') {
      return;
    }

    localStorage.ACTIVE_THEME = newTheme;
    this.activeTheme = newTheme;
  };
}

const themeStore = new ThemeStore();

export default themeStore;
