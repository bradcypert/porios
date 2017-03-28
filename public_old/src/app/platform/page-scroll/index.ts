import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PageScrollService } from './page-scroll.service';
import { PageScroll } from './page-scroll.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [PageScroll],
    exports: [PageScroll]
})
export class PlatformPageScrollModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PlatformPageScrollModule,
            providers: [ { provide: PageScrollService, useClass: PageScrollService } ],
        };
    }
}
