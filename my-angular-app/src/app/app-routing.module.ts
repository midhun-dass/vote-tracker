import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VoteTakerComponent } from './components/vote-taker/vote-taker.component';
import { ResultsComponent } from './pages/results/results.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  { path: 'vote', component: VoteTakerComponent},
  { path: 'results', component: ResultsComponent },
  { path: 'countdown', component: CountdownParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
