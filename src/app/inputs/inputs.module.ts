import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayInputOldComponent } from './array-input-old/array-input-old.component';
import { MultipleInputComponent } from './multiple-input/multiple-input.component';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './autofocus.directive';

const inputs = [
  ArrayInputOldComponent,
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
