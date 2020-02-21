import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPickerService } from './icon-picker.service';
import { IconPickerComponent } from './icon-picker.component';
import { IconPickerDirective } from './icon-picker.directive';
import { TextDirective } from './text.directive';
import { SearchIconPipe } from './search-icon.pipe';
var IconPickerModule = /** @class */ (function () {
    function IconPickerModule() {
    }
    IconPickerModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            providers: [
                IconPickerService
            ],
            declarations: [
                IconPickerComponent,
                IconPickerDirective,
                TextDirective,
                SearchIconPipe
            ],
            exports: [
                IconPickerDirective
            ],
            entryComponents: [
                IconPickerComponent
            ]
        })
    ], IconPickerModule);
    return IconPickerModule;
}());
export { IconPickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWljb24tcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2ljb24tcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXNCcEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFwQjVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBVTtnQkFDZixZQUFZO2FBQ2I7WUFDRCxTQUFTLEVBQVE7Z0JBQ2YsaUJBQWlCO2FBQ2xCO1lBQ0QsWUFBWSxFQUFLO2dCQUNmLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2dCQUNuQixhQUFhO2dCQUNiLGNBQWM7YUFDZjtZQUNELE9BQU8sRUFBVTtnQkFDZixtQkFBbUI7YUFDcEI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsbUJBQW1CO2FBQ3BCO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEljb25QaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEljb25QaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2ljb24tcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9pY29uLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vdGV4dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2VhcmNoSWNvblBpcGUgfSBmcm9tICcuL3NlYXJjaC1pY29uLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICAgICA6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzICAgICAgOiBbXG4gICAgSWNvblBpY2tlclNlcnZpY2VcbiAgXSxcbiAgZGVjbGFyYXRpb25zICAgOiBbXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcbiAgICBJY29uUGlja2VyRGlyZWN0aXZlLFxuICAgIFRleHREaXJlY3RpdmUsXG4gICAgU2VhcmNoSWNvblBpcGVcbiAgXSxcbiAgZXhwb3J0cyAgICAgICAgOiBbXG4gICAgSWNvblBpY2tlckRpcmVjdGl2ZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBJY29uUGlja2VyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWNvblBpY2tlck1vZHVsZSB7XG59XG4iXX0=