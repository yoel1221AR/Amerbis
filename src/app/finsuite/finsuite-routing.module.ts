import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbHomeViewComponent } from './views/ip-dashboard-view/ab-home-view.component';
const routes: Routes = [{ path: '', component: AbHomeViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinsuiteRoutingModule {}
