import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, DemoRoutingModule],
  declarations: [ButtonsComponent],
})
export class DemoModule {}
