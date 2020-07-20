import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'budget', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule) },
      { path: 'calculator', loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
