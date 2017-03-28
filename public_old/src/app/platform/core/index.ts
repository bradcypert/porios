import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Dragula

import { DragulaModule } from 'ng2-dragula';

/**
 * ANGULAR2 MATERIAL MODULES
 */

import { 
  MdCoreModule, 
  MdRippleModule, 
  PortalModule, 
  OverlayModule, 
  RtlModule, 
  MdLiveAnnouncer 
} from '@angular/material';
import { MdButtonToggleModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdProgressCircleModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MaterialModule } from '@angular/material';

/**
 * COMPONENTS
 */

// Layouts
import { TdLayoutComponent } from './layout/layout.component';
import { TdLayoutNavComponent } from './layout/layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout/layout-nav-list/layout-nav-list.component';
import { TdLayoutPodcastListComponent } from './layout/layout-podcast-list/layout-podcast-list.component';
import { TdLayoutCardOverComponent } from './layout/layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout/layout-manage-list/layout-manage-list.component';
import { TdLayoutTabsComponent } from './layout/layout-tabs/layout-tabs.component';
import { TdLayoutService } from './layout/services/layout.service';

export const TD_LAYOUT_DIRECTIVES: Type<any>[] = [
  TdLayoutComponent,
  TdLayoutNavComponent,
  TdLayoutNavListComponent,
  TdLayoutPodcastListComponent,
  TdLayoutCardOverComponent,
  TdLayoutManageListComponent,
  TdLayoutTabsComponent,
];

export const TD_LAYOUT_PROVIDERS: Type<any>[] = [
  TdLayoutService,
];

export { TdLayoutComponent } from './layout/layout.component';
export { TdLayoutNavComponent } from './layout/layout-nav/layout-nav.component';
export { TdLayoutNavListComponent } from './layout/layout-nav-list/layout-nav-list.component';
export { TdLayoutCardOverComponent } from './layout/layout-card-over/layout-card-over.component';
export { TdLayoutManageListComponent }  from './layout/layout-manage-list/layout-manage-list.component';

// Steps
import { TdStepsComponent } from './steps/steps.component';
import { TdStepComponent, TdStepActionsComponent, TdStepSummaryComponent } from './steps/step.component';

export const TD_STEPS_DIRECTIVES: Type<any>[] = [
  TdStepsComponent,
  TdStepComponent,
  TdStepActionsComponent,
  TdStepSummaryComponent,
];

export { TdStepComponent, StepState } from './steps/step.component';
export { TdStepsComponent, IStepChangeEvent } from './steps/steps.component';

// Loading
import { TdLoadingService } from './loading/services/loading.service';
import { TdLoadingDirective } from './loading/directives/loading.directive';
import { TdLoadingComponent } from './loading/loading.component';

export const TD_LOADING_ENTRY_COMPONENTS: Type<any>[] = [
  TdLoadingComponent,
];

export { LoadingType } from './loading/loading.component';
export { TdLoadingService, ILoadingOptions } from './loading/services/loading.service';
export { TdLoadingDirective } from './loading/directives/loading.directive'

// Expansion
export { TdExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

import { TdExpansionPanelComponent,
         TdExpansionPanelSummaryComponent } from './expansion-panel/expansion-panel.component';

export const TD_EXPANSION_DIRECTIVES: Type<any>[] = [
  TdExpansionPanelComponent,
  TdExpansionPanelSummaryComponent,
];

// Table
import { TdDataTable } from './table/data-table';
import { TdDataTableLayout } from './table/data-table-layout';
import { TdDataTableSelectableRow, TdDataTableHeaderSelectableRow } from './table/data-table-selectable-tr';

export const TD_TABLE_DIRECTIVES: Type<any>[] = [
  TdDataTable,
  TdDataTableLayout,
  TdDataTableSelectableRow,
  TdDataTableHeaderSelectableRow,
];

// Pagination
import { MdPagination, MdPaginationRange, MdPaginationControls, MdPaginationItemsPerPage } from './pagination/pagination';
import { PaginationService } from './pagination/services/pagination.service';

export const TD_PAGINATION_DIRECTIVES: Type<any>[] = [
  MdPagination,
  MdPaginationRange,
  MdPaginationControls,
  MdPaginationItemsPerPage
];

// Dialog
import { TdDialog } from './dialog/dialog';
import { TdDialogActions } from './dialog/dialog-actions';
import { TdDialogPortal } from './dialog/dialog-portal';
import { TdDialogTitle } from './dialog/dialog-title';
import { TdDialogContent } from './dialog/dialog-content';

import { TdAlertDialogComponent } from './dialog/alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { TdCustomDialogComponent } from './dialog/custom-dialog/custom-dialog.component';
import { TdPromptDialogComponent } from './dialog/prompt-dialog/prompt-dialog.component';
import { TdCustomDialogRef } from './dialog/custom-dialog/custom-dialog.component';
import { TdDialogService } from './dialog/services/dialog.service';

export const TD_DIALOG_DIRECTIVES: Type<any>[] = [
  TdDialog,
  TdDialogTitle,
  TdDialogContent,
  TdDialogPortal,
  TdDialogActions,
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdCustomDialogComponent,
  TdPromptDialogComponent,
  TdCustomDialogRef,
];

export const TD_DIALOG_ENTRY_COMPONENTS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdPromptDialogComponent,
  TdCustomDialogRef,
];

export { TdDialogService, IAlertConfig, IConfirmConfig, IPromptConfig } from './dialog/services/dialog.service';
export { TdAlertDialogComponent } from './dialog/alert-dialog/alert-dialog.component';
export { TdConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
export { TdCustomDialogComponent } from './dialog/custom-dialog/custom-dialog.component';
export { TdPromptDialogComponent } from './dialog/prompt-dialog/prompt-dialog.component';

// Form Builder
import { TdDynamicFormBuildComponent } from './form-builder/build/dynamic-form-build.component.ts';
import { TdDynamicFormBuildQuestionComponent } from './form-builder/build/dynamic-form-build-question.component.ts';
import { TdDynamicFormRenderComponent } from './form-builder/render/dynamic-form-render.component.ts';
import { TdDynamicFormRenderQuestionComponent } from './form-builder/render/dynamic-form-render-question.component.ts';
import { TdQuestionControlService } from './form-builder/question-control.service.ts';
import { TdQuestionService } from './form-builder/question.service.ts';

export { TdQuestionBase } from './form-builder/question-base.ts';
export { TdQuestionService } from './form-builder/question.service.ts';

export const TD_FORMBUILDER_DIRECTIVES: Type<any>[] = [
  TdDynamicFormBuildComponent,
  TdDynamicFormBuildQuestionComponent,
  TdDynamicFormRenderComponent,
  TdDynamicFormRenderQuestionComponent
];

// Form Elements
import { TdInputComponent } from './form-elements/input/input.component';
import { TdSelectComponent } from './form-elements/select/select.component';
import { TdSelectItemComponent } from './form-elements/select/select-item.component';
import { TdTextareaComponent } from './form-elements/textarea/textarea.component';
import { TdDatepickerComponent } from './form-elements/date-picker/datepicker.component';

export const TD_FORM_DIRECTIVES: Type<any>[] = [
  TdInputComponent,
  TdSelectComponent,
  TdSelectItemComponent,
  TdTextareaComponent,
  TdDatepickerComponent
];

// Toast

import { TdToast } from './toast/toast';
import { TdToastActions } from './toast/toast-actions';
import { TdToastList } from './toast/toast-list';
import { TdToastPortal } from './toast/toast-portal';
import { TdToastTitle } from './toast/toast-title';
import { ToastService } from './toast/services/toast.service';

export const TD_TOAST_DIRECTIVES: Type<any>[] = [
  TdToast,
  TdToastActions,
  TdToastList,
  TdToastPortal,
  TdToastTitle
];

export { TdToast } from './toast/toast';
export { TdToastActions } from './toast/toast-actions';
export { TdToastList } from './toast/toast-list';
export { TdToastPortal } from './toast/toast-portal';
export { TdToastTitle } from './toast/toast-title';
export { ToastService } from './toast/services/toast.service';

/**
 * DIRECTIVES
 */

import { TdToggleDirective } from './directives/toggle/toggle.directive';
import { TdFadeDirective } from './directives/fade/fade.directive';
import { TdSnackbarComponent } from './snackbar/snackbar.component';
import { TdComponentOutlet } from './directives/dynamic/dynamic.directive'
import { provideComponentOutletModule } from './directives/dynamic/dynamic.helpers';

export { TdToggleDirective } from './directives/toggle/toggle.directive';
export { TdFadeDirective } from './directives/fade/fade.directive';
export { TdSnackbarComponent } from './snackbar/snackbar.component';
export { TdComponentOutlet } from './directives/dynamic/dynamic.directive'

/**
 * PIPES
 */
import { TdOrderByPipe } from './pipes/orderby/orderby.pipe';
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';

export const TD_PIPES: Type<any>[] = [
  TdOrderByPipe,
  TdTimeAgoPipe,
  TdTimeDifferencePipe,
  TdBytesPipe,
  TdDigitsPipe,
  TdTruncatePipe,
];

export { TdOrderByPipe } from './pipes/orderby/orderby.pipe';
export { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
export { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
export { TdBytesPipe } from './pipes/bytes/bytes.pipe';
export { TdDigitsPipe } from './pipes/digits/digits.pipe';
export { TdTruncatePipe } from './pipes/truncate/truncate.pipe';

/**
 * MEDIA
 */
import { TdMediaService } from './media/services/media.service';
import { TdMediaToggleDirective } from './media/directives/media-toggle.directive';

export { TdMediaService } from './media/services/media.service';
export { TdMediaToggleDirective } from './media/directives/media-toggle.directive';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    DragulaModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    TdMediaToggleDirective,
    TD_PIPES,
    TD_LAYOUT_DIRECTIVES,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEPS_DIRECTIVES,
    TD_EXPANSION_DIRECTIVES,
    TD_TABLE_DIRECTIVES,
    TD_DIALOG_DIRECTIVES,
    TD_FORM_DIRECTIVES,
    TD_FORMBUILDER_DIRECTIVES,
    TD_PAGINATION_DIRECTIVES,
    TD_TOAST_DIRECTIVES,
    TdSnackbarComponent,
    TdFadeDirective,
    TdToggleDirective,
    TdComponentOutlet,
  ],
  exports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    TdMediaToggleDirective,
    TD_PIPES,
    TD_LAYOUT_DIRECTIVES,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEPS_DIRECTIVES,
    TD_EXPANSION_DIRECTIVES,
    TD_TABLE_DIRECTIVES,
    TD_DIALOG_DIRECTIVES,
    TD_FORM_DIRECTIVES,
    TD_FORMBUILDER_DIRECTIVES,
    TD_PAGINATION_DIRECTIVES,
    TD_TOAST_DIRECTIVES,
    TdSnackbarComponent,
    TdFadeDirective,
    TdToggleDirective,
    TdComponentOutlet,
  ],
  entryComponents: [
    TD_LOADING_ENTRY_COMPONENTS,
    TD_DIALOG_ENTRY_COMPONENTS
  ]
})
export class PlatformCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformCoreModule,
      providers: [ 
        TdMediaService, 
        TdLayoutService, 
        TdLoadingService, 
        TdQuestionService, 
        TdQuestionControlService, 
        ToastService, PaginationService, 
        TdDialogService,
        provideComponentOutletModule({
          imports: [ CommonModule, MdIconModule, MdTooltipModule ]
        }) 
      ],
    };
  }
}