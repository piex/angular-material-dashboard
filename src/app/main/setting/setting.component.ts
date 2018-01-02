import { Component, OnInit } from '@angular/core';

import { Theme, ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public isShow = false;
  public currentTheme: Theme | null;
  public themes: Array<Theme>;

  constructor(
    private _theme: ThemeService
  ) {
  }

  ngOnInit() {
    this.initTheme();
  }

  // 显示设置面板
  public showSetting() {
    this.isShow = !this.isShow;
  }
  // 隐藏设置面板
  public hideSetting() {
    console.log('blur');
    this.isShow = false;
  }

  // 主题初始化
  private initTheme() {
    this.themes = this._theme.themes;
    this.currentTheme = this._theme.getStoredTheme();
    this.changeTheme(this.currentTheme);
  }

  // 主题切换
  public changeTheme(theme: Theme) {
    this.currentTheme = this._getCurrentThemeFromClass(theme.className);

    if (this.currentTheme) {
      this._theme.storeTheme(this.currentTheme);
    }
  }

  // 获取主题 className
  private _getCurrentThemeFromClass(className: string): Theme {
    return this.themes.find(theme => theme.className === className);
  }
}
