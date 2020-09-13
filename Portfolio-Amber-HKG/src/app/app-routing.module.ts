import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [ 

{
    path: '', redirectTo:'/Home', pathMatch:'full' 
},

{
    path: 'Home',component:HomeComponent
},
  
{
  path: 'About',component:AboutComponent
},

{
  path: 'Blogs',component:BlogComponent
},

{
  path: 'Events',component:EventsComponent
},

{
  path: 'Contact',component:ContactsComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
