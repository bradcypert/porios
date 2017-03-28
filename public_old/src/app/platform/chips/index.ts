import { TdChipsComponent } from './chips.component';
import { TdChipComponent } from './chip.component';
import { TdAutoCompleteComponent } from './autocomplete/autocomplete.component';

import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdInputModule } from '@angular/material';
import { MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MdInputModule.forRoot(),
    MdIconModule.forRoot(),
  ],
  declarations: [
    TdChipsComponent,
    TdChipComponent,
    TdAutoCompleteComponent,
  ],
  exports: [
    TdChipsComponent,
    TdChipComponent,
    TdAutoCompleteComponent,
  ],
})
export class PlatformChipsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformChipsModule,
      providers: [],
    };
  }
}
