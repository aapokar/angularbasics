import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IoModule } from './io-module/io.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { JokesComponent } from './jokes/jokes.component';
import { HighlightDirective } from './highlight.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from './qr/qr.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    JokesComponent,
    HighlightDirective,
    DirectiveExampleComponent,
    LoginFormComponent,
    QrComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    IoModule,
    MatButtonModule,
    ReactiveFormsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
