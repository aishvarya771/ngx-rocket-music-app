import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { MusicComponent } from '@app/music/music/music.component';
import { Shell } from '@app/shell/shell.service';
const routes: Routes = [{ path: '', component: MusicComponent, data: { title: extract('Music') } }];
// const routes: Routes = [
//   Shell.childRoutes([
//     { path: '', redirectTo: '/music', pathMatch: 'full' },
//     { path: 'music', component: MusicComponent, data: { title: extract('Home') } }
//   ])
// ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule {}
