import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import {PageNotFoundComponent} from "./components/not-found/pageNotFound.component";
import {HomeComponent} from "./components/home/home.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {LogoutComponent} from "./components/logout/logout.component";
import { authProviders }      from './login.routing';
import {LoginComponent} from "./components/login/login.component";


const appRoutes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'resources', component: ResourcesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [
  authProviders
];
export const routing = RouterModule.forRoot(appRoutes);
