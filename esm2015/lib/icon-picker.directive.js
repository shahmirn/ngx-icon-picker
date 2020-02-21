import { __decorate } from "tslib";
import { OnInit, OnChanges, Directive, Input, Output, EventEmitter, ElementRef, ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { IconPickerComponent } from './icon-picker.component';
let IconPickerDirective = class IconPickerDirective {
    constructor(vcRef, el, cfr) {
        this.vcRef = vcRef;
        this.el = el;
        this.cfr = cfr;
        this.ipPlaceHolder = 'Search icon...';
        this.ipPosition = 'right';
        this.ipFallbackIcon = 'fas fa-user';
        this.ipHeight = 'auto';
        this.ipMaxHeight = '200px';
        this.ipWidth = '230px';
        this.ipIconPack = ['bs', 'fa5'];
        this.iconPickerSelect = new EventEmitter(true);
        this.ignoreChanges = false;
        this.created = false;
    }
    ngOnChanges(changes) {
        if (changes.iconPicker) {
            this.ignoreChanges = false;
        }
    }
    ngOnInit() {
        this.iconPicker = this.iconPicker || this.ipFallbackIcon || 'fa fa-user-plus';
        this.iconPickerSelect.emit(this.iconPicker);
    }
    onClick() {
        this.openDialog();
    }
    openDialog() {
        if (!this.created) {
            this.created = true;
            const vcRef = this.vcRef;
            const compFactory = this.cfr.resolveComponentFactory(IconPickerComponent);
            // tslint:disable-next-line: deprecation
            const injector = ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
            const cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            cmpRef.instance.setDialog(this, this.el, this.iconPicker, this.ipPosition, this.ipHeight, this.ipMaxHeight, this.ipWidth, this.ipPlaceHolder, this.ipFallbackIcon, this.ipIconPack);
            this.dialog = cmpRef.instance;
            if (this.vcRef !== vcRef) {
                cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.iconPicker);
        }
    }
    iconSelected(icon) {
        this.iconPickerSelect.emit(icon);
    }
};
IconPickerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ComponentFactoryResolver }
];
__decorate([
    Input()
], IconPickerDirective.prototype, "iconPicker", void 0);
__decorate([
    Input()
], IconPickerDirective.prototype, "ipPlaceHolder", void 0);
__decorate([
    Input()
], IconPickerDirective.prototype, "ipPosition", void 0);
__decorate([
    Input()
], IconPickerDirective.prototype, "ipFallbackIcon", void 0);
__decorate([
    Input()
], IconPickerDirective.prototype, "ipHeight", void 0);
__decorate([
    Input()
], IconPickerDirective.prototype, "ipMaxHeight", void 0);
__decorate([
    Input()
], IconPickerDirective.prototype, "ipWidth", void 0);
__decorate([
    Input()
], IconPickerDirective.prototype, "ipIconPack", void 0);
__decorate([
    Output()
], IconPickerDirective.prototype, "iconPickerSelect", void 0);
IconPickerDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[iconPicker]',
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '(click)': 'onClick()'
        }
    })
], IconPickerDirective);
export { IconPickerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1waWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWljb24tcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2ljb24tcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSx3QkFBd0IsRUFDdEksTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFVOUQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFnQjlCLFlBQ1UsS0FBdUIsRUFDdkIsRUFBYyxFQUNkLEdBQTZCO1FBRjdCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQWpCOUIsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxlQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsYUFBYSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDdEIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNsQixlQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFMUIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUM7UUFJcEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFNNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksaUJBQWlCLENBQUM7UUFDOUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMxRSx3Q0FBd0M7WUFDeEMsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQ3hHLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFFOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzFDO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUVGLENBQUE7O1lBN0NrQixnQkFBZ0I7WUFDbkIsVUFBVTtZQUNULHdCQUF3Qjs7QUFsQjlCO0lBQVIsS0FBSyxFQUFFO3VEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTswREFBa0M7QUFDakM7SUFBUixLQUFLLEVBQUU7dURBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzJEQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTtxREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7d0RBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFO29EQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTt1REFBNEI7QUFFMUI7SUFBVCxNQUFNLEVBQUU7NkRBQW1EO0FBVmpELG1CQUFtQjtJQVIvQixTQUFTLENBQUM7UUFDVCwrQ0FBK0M7UUFDL0MsUUFBUSxFQUFFLGNBQWM7UUFDeEIsc0RBQXNEO1FBQ3RELElBQUksRUFBTTtZQUNSLFNBQVMsRUFBRSxXQUFXO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQThEL0I7U0E5RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25Jbml0LCBPbkNoYW5nZXMsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBSZWZsZWN0aXZlSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWNvblBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2ljb25QaWNrZXJdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3QgICAgOiB7XG4gICAgJyhjbGljayknOiAnb25DbGljaygpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEljb25QaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGljb25QaWNrZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXBQbGFjZUhvbGRlciA9ICdTZWFyY2ggaWNvbi4uLic7XG4gIEBJbnB1dCgpIGlwUG9zaXRpb24gPSAncmlnaHQnO1xuICBASW5wdXQoKSBpcEZhbGxiYWNrSWNvbiA9ICdmYXMgZmEtdXNlcic7XG4gIEBJbnB1dCgpIGlwSGVpZ2h0ID0gJ2F1dG8nO1xuICBASW5wdXQoKSBpcE1heEhlaWdodCA9ICcyMDBweCc7XG4gIEBJbnB1dCgpIGlwV2lkdGggPSAnMjMwcHgnO1xuICBASW5wdXQoKSBpcEljb25QYWNrID0gWydicycsICdmYTUnXTtcblxuICBAT3V0cHV0KCkgaWNvblBpY2tlclNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcblxuICBwcml2YXRlIGRpYWxvZzogYW55O1xuICBwcml2YXRlIGNyZWF0ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgaWdub3JlQ2hhbmdlcyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgdGhpcy5jcmVhdGVkID0gZmFsc2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5pY29uUGlja2VyKSB7XG4gICAgICB0aGlzLmlnbm9yZUNoYW5nZXMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmljb25QaWNrZXIgPSB0aGlzLmljb25QaWNrZXIgfHwgdGhpcy5pcEZhbGxiYWNrSWNvbiB8fCAnZmEgZmEtdXNlci1wbHVzJztcbiAgICB0aGlzLmljb25QaWNrZXJTZWxlY3QuZW1pdCh0aGlzLmljb25QaWNrZXIpO1xuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgaWYgKCF0aGlzLmNyZWF0ZWQpIHtcbiAgICAgIHRoaXMuY3JlYXRlZCA9IHRydWU7XG4gICAgICBjb25zdCB2Y1JlZiA9IHRoaXMudmNSZWY7XG4gICAgICBjb25zdCBjb21wRmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEljb25QaWNrZXJDb21wb25lbnQpO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFtdLCB2Y1JlZi5wYXJlbnRJbmplY3Rvcik7XG4gICAgICBjb25zdCBjbXBSZWYgPSB2Y1JlZi5jcmVhdGVDb21wb25lbnQoY29tcEZhY3RvcnksIDAsIGluamVjdG9yLCBbXSk7XG4gICAgICBjbXBSZWYuaW5zdGFuY2Uuc2V0RGlhbG9nKHRoaXMsIHRoaXMuZWwsIHRoaXMuaWNvblBpY2tlciwgdGhpcy5pcFBvc2l0aW9uLCB0aGlzLmlwSGVpZ2h0LCB0aGlzLmlwTWF4SGVpZ2h0LFxuICAgICAgICB0aGlzLmlwV2lkdGgsIHRoaXMuaXBQbGFjZUhvbGRlciwgdGhpcy5pcEZhbGxiYWNrSWNvbiwgdGhpcy5pcEljb25QYWNrKTtcbiAgICAgIHRoaXMuZGlhbG9nID0gY21wUmVmLmluc3RhbmNlO1xuXG4gICAgICBpZiAodGhpcy52Y1JlZiAhPT0gdmNSZWYpIHtcbiAgICAgICAgY21wUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5vcGVuRGlhbG9nKHRoaXMuaWNvblBpY2tlcik7XG4gICAgfVxuICB9XG5cbiAgaWNvblNlbGVjdGVkKGljb246IHN0cmluZykge1xuICAgIHRoaXMuaWNvblBpY2tlclNlbGVjdC5lbWl0KGljb24pO1xuICB9XG5cbn1cbiJdfQ==