import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainRoutes } from './main.routing';
import { ShareModule } from '../share/share.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    RouterModule.forChild(MainRoutes),
    ShareModule,
  ],
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    SettingComponent
  ],
  providers: [],
  exports: [
    LayoutComponent
  ]
})
export class MainModule { }
