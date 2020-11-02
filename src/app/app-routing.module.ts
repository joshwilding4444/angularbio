import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranscriberComponent } from './components/transcriber.component';


const routes: Routes = [{path: '', component: TranscriberComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
