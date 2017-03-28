//directives: [MdPaginationRange, MdPaginationControls, MdPaginationItemsPerPage],
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdPagination, MdPaginationRange, MdPaginationControls, MdPaginationItemsPerPage } from './pagination';
import { PaginationService } from './services/pagination.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        MdPagination,
        MdPaginationRange,
        MdPaginationControls,
        MdPaginationItemsPerPage
    ],
    exports: [
        MdPagination,
        MdPaginationRange,
        MdPaginationControls,
        MdPaginationItemsPerPage
    ]
})
export class PlatformPaginationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PlatformPaginationModule,
            providers: [PaginationService],
        };
    }
}