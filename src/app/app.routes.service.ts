
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import {SigninComponent} from './signin/signin.component'
import {SignupComponent} from './signup/signup.component'
import {YouthlistComponent} from './youthlist/youthlist.component'
import {IntakeformComponent} from './intake/intakeform/intakeform.component'
import {LogoutComponent} from './logout/logout.component'
// import { AuthGuard } from './core/auth.guard';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {path:'login', component:SigninComponent, pathMatch:'full' },
  {path:'signup', component:SignupComponent, pathMatch:'full' },
  {path:'youth', component:YouthlistComponent, pathMatch:'full'},
  {path:'intake', component:IntakeformComponent, pathMatch:'full'},
  {path:'logout', component:LogoutComponent, pathMatch:'full' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
