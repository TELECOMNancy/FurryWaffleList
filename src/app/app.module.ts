import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdToolbarModule } from '@angular/material'
import { AngularFireModule, AuthMethods, AuthProviders  } from 'angularfire2'

import { ListModule } from './list/list.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { ListsComponent } from './lists/lists.component'
import { AppRoutingModule } from './app-routing.module'
import { ListComponent } from './list/list.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { ListsService } from './providers/lists.service'
import { SignInComponent } from './sign-in/sign-in.component';
import { PrivateListsComponent } from './private-lists/private-lists.component'


export const firebaseConfig = {
  apiKey: 'AIzaSyAPMbmzPT5l8CvM0HgSeb6NAB1_J5jW0I8',
  authDomain: 'furrywafflelist.firebaseapp.com',
  databaseURL: 'https://furrywafflelist.firebaseio.com',
  storageBucket: 'bucket.appspot.com'
}

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    WelcomeComponent,
    SignInComponent,
    PrivateListsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
    ListModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      method: AuthMethods.Popup
    }),
    AppRoutingModule,
    MdToolbarModule
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
