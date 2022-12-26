import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditdialogComponent } from './editdialog/editdialog.component';
import { FrontComponent } from './front/front.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { TabsCoursesComponent } from './tabs-courses/tabs-courses.component';

const routes: Routes = [
// {path:'header', component:HeadercompComponent},
{path:'', component:TabsCoursesComponent},
{path:'beginners', component:TabsCoursesComponent},
{path:'editdialog', component: EditdialogComponent}

// {path:'advanced', component:TabsCoursesComponent},
// {path:'', component:FrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
