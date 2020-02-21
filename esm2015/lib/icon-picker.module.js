import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPickerService } from './icon-picker.service';
import { IconPickerComponent } from './icon-picker.component';
import { IconPickerDirective } from './icon-picker.directive';
import { TextDirective } from './text.directive';
import { SearchIconPipe } from './search-icon.pipe';
let IconPickerModule = class IconPickerModule {
};
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
export { IconPickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWljb24tcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2ljb24tcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXNCcEQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FDNUIsQ0FBQTtBQURZLGdCQUFnQjtJQXBCNUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFVO1lBQ2YsWUFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFRO1lBQ2YsaUJBQWlCO1NBQ2xCO1FBQ0QsWUFBWSxFQUFLO1lBQ2YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsY0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFVO1lBQ2YsbUJBQW1CO1NBQ3BCO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsbUJBQW1CO1NBQ3BCO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUM1QjtTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBJY29uUGlja2VyU2VydmljZSB9IGZyb20gJy4vaWNvbi1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJY29uUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvblBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vaWNvbi1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRleHREaXJlY3RpdmUgfSBmcm9tICcuL3RleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlYXJjaEljb25QaXBlIH0gZnJvbSAnLi9zZWFyY2gtaWNvbi5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgICAgOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVycyAgICAgIDogW1xuICAgIEljb25QaWNrZXJTZXJ2aWNlXG4gIF0sXG4gIGRlY2xhcmF0aW9ucyAgIDogW1xuICAgIEljb25QaWNrZXJDb21wb25lbnQsXG4gICAgSWNvblBpY2tlckRpcmVjdGl2ZSxcbiAgICBUZXh0RGlyZWN0aXZlLFxuICAgIFNlYXJjaEljb25QaXBlXG4gIF0sXG4gIGV4cG9ydHMgICAgICAgIDogW1xuICAgIEljb25QaWNrZXJEaXJlY3RpdmVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSWNvblBpY2tlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEljb25QaWNrZXJNb2R1bGUge1xufVxuIl19