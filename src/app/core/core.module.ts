import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { NotFound } from './not-found/not-found';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Navbar,
    NotFound
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Navbar,
    NotFound
  ]
})
export class CoreModule { }
