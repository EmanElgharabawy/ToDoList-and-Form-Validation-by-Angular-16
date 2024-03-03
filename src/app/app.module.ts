import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompconnComponent } from './compconn/compconn.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectvesComponent } from './directves/directves.component';
import { ToDOListComponent } from './to-dolist/to-dolist.component';
import { FormValidationComponent } from './form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    CompconnComponent,
    EventBindingComponent,
    DirectvesComponent,
    ToDOListComponent,
    FormValidationComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
