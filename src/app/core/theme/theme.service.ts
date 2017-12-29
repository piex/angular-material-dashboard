import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ThemeService {
  static storagekey = 'theme-current';
  constructor() { }

}
