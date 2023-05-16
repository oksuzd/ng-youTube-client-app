import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/pages/not-found/not-found.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
