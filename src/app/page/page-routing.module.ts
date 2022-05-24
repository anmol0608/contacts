import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

import { PagePage } from './page.page';

const routes: Routes = [
  {
    path: '',
    component: PagePage
  },
  {
    path: 'add',
    component: ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePageRoutingModule {}
