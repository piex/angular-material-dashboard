import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { PagesRouts } from '../pages/pages.routing';

export const MainRoutes: Route[] = [{
  path: '',
  component: LayoutComponent,
  data: {},
  children: PagesRouts
}];
