import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { AliasingComponent } from './aliasing/aliasing.component';
import { IocontainerComponent } from './iocontainer/iocontainer.component';

@NgModule({
  declarations: [
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    AliasingComponent,
    IocontainerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class IoModule { }
