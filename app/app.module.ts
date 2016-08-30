import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {AppComponent}   from './app.component';
import {routing, appRoutingProviders}        from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';


import {AboutComponent}  from './components/about/about.component';
import {UserService} from "./components/user-service/user.service";
import {LoginComponent} from "./components/login/login.component";
import {UserComponent} from "./components/user/user.component";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/not-found/pageNotFound.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DocsService} from "./components/services/docs.service";
import {ProfileComponent} from "./components/profile/profile.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        AboutComponent,
        HomeComponent,
        PageNotFoundComponent,
        ResourcesComponent,
        LogoutComponent,
        DashboardComponent,
        ProfileComponent
    ],
    providers: [
        UserService,
        DocsService,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
