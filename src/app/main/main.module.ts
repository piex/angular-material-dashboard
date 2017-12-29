import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainRoutes } from './main.routing';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forChild(MainRoutes),
  ],
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent
  ],
  providers: [],
  exports: [
    LayoutComponent
  ]
})
export class MainModule { }
