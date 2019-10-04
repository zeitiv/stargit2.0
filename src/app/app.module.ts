import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSearchModule, NbButtonModule, NbSidebarModule, NbIconModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
