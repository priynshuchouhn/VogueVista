import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/layouts/content/content.component';
import { FullComponent } from './components/layouts/full/full.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AnnoucementBarComponent } from './components/annoucement-bar/annoucement-bar.component';



@NgModule({
  declarations: [
    ContentComponent,
    FullComponent,
    HeaderComponent,
    FooterComponent,
    AnnoucementBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }