import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdToolbarModule } from '@angular/material'
import { AngularFireModule, AuthMethods, AuthProviders  } from 'angularfire2'
import { ListModule } from './list/list.module'
import { AppComponent } from './app.component'
import { UsersService } from './providers/users.service'
import { SharedModule } from './shared/shared.module'
import { ListsComponent } from './lists/lists.component'
import { AppRoutingModule } from './app-routing.module'
import { ListComponent } from './list/list.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { ListsService } from './providers/lists.service'
import { SignInService } from './providers/sign-in.service'
import { SignInComponent } from './sign-in/sign-in.component'
import { ListsModule } from './lists/lists.module'
import { SafeHtmlPipe } from './safe-html.pipe'
import { JSONtestComponent } from './jsontest/jsontest.component';
import { MainElementsComponent } from './main-elements/main-elements.component'


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
    SafeHtmlPipe,
    JSONtestComponent,
    MainElementsComponent,
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
    MdToolbarModule,
    ListsModule,
  ],
  providers: [ListsService, SignInService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
