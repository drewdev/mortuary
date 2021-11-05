import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class LandingModule { }
