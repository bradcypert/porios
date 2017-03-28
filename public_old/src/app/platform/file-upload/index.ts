import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MdCoreModule, MdRippleModule, PortalModule,
         OverlayModule, RtlModule, MdLiveAnnouncer } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';

const MATERIAL_MODULES: Type<any>[] = [
  MdCoreModule,
  MdButtonModule,
  MdIconModule,
  MdRippleModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [MdLiveAnnouncer],
})
export class MaterialModule { }

import { PlatformCoreModule } from '../core';

const PLATFORM_MODULES: Type<any>[] = [
  PlatformCoreModule
];

@NgModule({
  imports: PLATFORM_MODULES,
  exports: PLATFORM_MODULES,
})
export class PlatformModule { }

import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileUploadComponent } from './file-upload.component';
import { TdFileUploadAvatarComponent } from './file-upload-avatar.component';
import { TdFileUploadWideComponent } from './file-upload-wide.component';
import { TdFileService } from './services/file.service';

export const TD_FILE_DIRECTIVES: Type<any>[] = [
  TdFileSelectDirective,
  TdFileDropDirective,
  TdFileUploadComponent,
  TdFileUploadAvatarComponent,
  TdFileUploadWideComponent,
];

export { TdFileUploadComponent } from './file-upload.component';
export { TdFileUploadAvatarComponent } from './file-upload-avatar.component';
export { TdFileSelectDirective } from './directives/file-select.directive';
export { TdFileDropDirective } from './directives/file-drop.directive';
export { TdFileService, IUploadOptions } from './services/file.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    PlatformModule,
  ],
  declarations: [
    TD_FILE_DIRECTIVES,
  ],
  exports: [
    TD_FILE_DIRECTIVES,
  ],
})
export class PlatformFileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformFileModule,
      providers: [ TdFileService ],
    };
  }
}
