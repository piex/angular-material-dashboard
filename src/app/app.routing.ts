import { Routes, RouterModule } from '@angular/router';

import { AuthRoutes } from './auth/auth.routing';

const routes: Routes = [{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full',
}, {
  path: 'main',
  loadChildren: './main/main.module#MainModule'
}, {
  path: 'auth',
  children: AuthRoutes
}];

export const AppRoutes = RouterModule.forRoot(routes);
