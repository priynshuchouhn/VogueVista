import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layouts/content/content.component';
import { FullComponent } from './shared/components/layouts/full/full.component';
import { content } from './shared/routes/routes';
import { full } from './shared/routes/full.routes';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: content

  },
  {
    path: '',
    component: FullComponent,
    children: full
  },
  {path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
