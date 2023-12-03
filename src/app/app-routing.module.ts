import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layouts/content/content.component';
import { FullComponent } from './shared/components/layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: '',
    component: FullComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
