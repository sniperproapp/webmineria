import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidarpagoComponent } from './validarpago/validarpago.component';
 
 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValidarpagoComponent,
     
     
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
   
    
     
  ],
  exports:[
    HeaderComponent,
    FooterComponent,ValidarpagoComponent  
  ]
})
export class SharedModule { }
