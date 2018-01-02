import { Injectable, EventEmitter } from '@angular/core';

export interface Theme {
  color: string;
  className: string;
  isDefault?: boolean;
}

@Injectable()
export class ThemeService {
  static storageKey = 'theme-current';
  public onThemeChange: EventEmitter<Theme> = new EventEmitter<Theme>();
  public themes: Array<Theme> = [{
    color: '#673AB7',
    className: 'deeppurple-amber'
  }, {
    color: '#3F51B5',
    className: 'indigo-pink',
    isDefault: true
  }, {
    color: '#E91E63',
    className: 'pink-bluegrey',
  }, {
    color: '#9C27B0',
    className: 'purple-green',
  }];

  constructor() { }

  public storeTheme(theme: Theme) {
    try {
      window.localStorage[ThemeService.storageKey] = JSON.stringify(theme);
      window.document.body.className = theme.className;
    } catch (err) {
      return null;
    }
  }

  public getStoredTheme(): Theme {
    let currentTheme;
    try {
      currentTheme = JSON.parse(window.localStorage[ThemeService.storageKey] || null);
    } catch (err) {
      return null;
    }
    if (currentTheme === null) {
      currentTheme = this.themes.filter(theme => theme.isDefault === true)[0];
    }
    return currentTheme;
  }

  public clearStorage() {
    try {
      window.localStorage.removeItem(ThemeService.storageKey);
    } catch (err) { }
  }

}
