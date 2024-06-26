import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectButton } from './header/connectButton/connectButton.component';
import { MenuButton } from './header/menuButton/menuButton.component';
import { SearchBar } from './header/searchBar/searchBar.component';
import { SettingsButton } from './header/settingsButton/settingsButton.component';
import { HeaderComponent } from './header/header.component';
import { SideBar } from './sidebar/sidebar.component';
import { SidebarMenu } from './sidebar/sideBarMenu/sidebarMenu.component';
import { SignInButton } from './signIn/signInButton.component';
import { ContentPart } from './content-part/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CategoryComponent } from './content-part/category/category.component';
import { SliderComponent } from './content-part/slider/slider.component';
import { MiniSliderComponent } from './content-part/miniSlider/miniSlider.component';
import { AdInnerComponent } from './content-part/ad-inner/adInner.component';
import { VideoSliderComponent } from './content-part/videoSlider/videoSlider.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ConnectButton,
    MenuButton,
    SearchBar,
    SettingsButton,
    HeaderComponent,
    SideBar,
    SidebarMenu,
    SignInButton,
    ContentPart,
    CategoryComponent,
    SliderComponent,
    MiniSliderComponent,
    AdInnerComponent,
    VideoSliderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
