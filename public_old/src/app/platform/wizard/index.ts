import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule, MdIconModule } from '@angular/material';

import { TdWizard } from './wizard';
import { TdWizardProgress } from './wizard-progress';
import { TdWizardStep } from './wizard-step';
import { TdWizardContent } from './wizard-content';
import { TdWizardLabelWrapper } from './label/wizard-label-wrapper';
import { TdWizardLabel } from './label/wizard-label';
import { TdWizardLabelIcon } from './label/wizard-label-icon';

export { TdWizard } from './wizard';
export { TdWizardProgress } from './wizard-progress';
export { TdWizardStep, StepState } from './wizard-step';
export { TdWizardContent } from './wizard-content';
export { TdWizardLabelWrapper } from './label/wizard-label-wrapper';
export { TdWizardLabel } from './label/wizard-label';
export { TdWizardLabelIcon } from './label/wizard-label-icon';

@NgModule({
  imports: [
    CommonModule, 
    PortalModule,
    MdIconModule
  ],
  exports: [
    TdWizard, 
    TdWizardLabel, 
    TdWizardLabelIcon,
    TdWizardContent, 
    TdWizardStep
  ],
  declarations: [
    TdWizard, 
    TdWizardLabel, 
    TdWizardLabelIcon,
    TdWizardContent, 
    TdWizardStep, 
    TdWizardProgress, 
    TdWizardLabelWrapper
  ],
})
export class PlatformWizardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformWizardModule,
      providers: []
    };
  }
}   