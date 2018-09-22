import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleInputComponent } from './multiple-input/multiple-input.component';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './autofocus.directive';
import { ArrayInputComponent } from './array-input/array-input.component';

const inputs = [
  ArrayInputComponent,
  MultipleInputComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...inputs,
    AutoFocusDirective
  ],
  exports: [
    inputs
  ]
})
export class InputsModule { }