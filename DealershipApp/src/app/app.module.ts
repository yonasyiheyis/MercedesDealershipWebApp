import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//angular material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ViewinventoryComponent } from './viewinventory.component';
<<<<<<< HEAD
import { PaymentComponent } from './payment/payment.component';
=======
import { FooterComponent } from './footer/footer.component';


>>>>>>> 6044cd32fd2559f91412a08246905114d0c4f318
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    EditComponent,
    ViewinventoryComponent, 
    FooterComponent,
  
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
<<<<<<< HEAD
      { path: 'pay', component: PaymentComponent },
=======

>>>>>>> 6044cd32fd2559f91412a08246905114d0c4f318
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,

    MatToolbarModule,
    YouTubePlayerModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
