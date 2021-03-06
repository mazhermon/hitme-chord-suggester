import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';

let matComponents = [
  MatButtonModule,
  MatIconModule,
  
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,

    ...matComponents
  ],
  exports: [
    ...matComponents
  ],
  declarations: []
})
export class MaterialModule { }
