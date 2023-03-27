import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "@core/pages/main-page/main-page.component";
import { NotFoundComponent } from "@core/pages/not-found/not-found.component";
import { DetailsInfoComponent } from "@youtube/pages/details-info/details-info.component";
import { LoginPageComponent } from "@auth/pages/login-page/login-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'auth/login', component: LoginPageComponent},
  {path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule)},
  {path: 'detail/:id', component: DetailsInfoComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
