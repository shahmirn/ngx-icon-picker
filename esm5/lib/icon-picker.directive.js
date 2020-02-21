import { __decorate } from "tslib";
import { OnInit, OnChanges, Directive, Input, Output, EventEmitter, ElementRef, ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { IconPickerComponent } from './icon-picker.component';
var IconPickerDirective = /** @class */ (function () {
    function IconPickerDirective(vcRef, el, cfr) {
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
    IconPickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.iconPicker) {
            this.ignoreChanges = false;
        }
    };
    IconPickerDirective.prototype.ngOnInit = function () {
        this.iconPicker = this.iconPicker || this.ipFallbackIcon || 'fa fa-user-plus';
        this.iconPickerSelect.emit(this.iconPicker);
    };
    IconPickerDirective.prototype.onClick = function () {
        this.openDialog();
    };
    IconPickerDirective.prototype.openDialog = function () {
        if (!this.created) {
            this.created = true;
            var vcRef = this.vcRef;
            var compFactory = this.cfr.resolveComponentFactory(IconPickerComponent);
            // tslint:disable-next-line: deprecation
            var injector = ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
            var cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            cmpRef.instance.setDialog(this, this.el, this.iconPicker, this.ipPosition, this.ipHeight, this.ipMaxHeight, this.ipWidth, this.ipPlaceHolder, this.ipFallbackIcon, this.ipIconPack);
            this.dialog = cmpRef.instance;
            if (this.vcRef !== vcRef) {
                cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.iconPicker);
        }
    };
    IconPickerDirective.prototype.iconSelected = function (icon) {
        this.iconPickerSelect.emit(icon);
    };
    IconPickerDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: ComponentFactoryResolver }
    ]; };
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
    return IconPickerDirective;
}());
export { IconPickerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1waWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWljb24tcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2ljb24tcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSx3QkFBd0IsRUFDdEksTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFVOUQ7SUFnQkUsNkJBQ1UsS0FBdUIsRUFDdkIsRUFBYyxFQUNkLEdBQTZCO1FBRjdCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQWpCOUIsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxlQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsYUFBYSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDdEIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNsQixlQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFMUIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUM7UUFJcEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFNNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksaUJBQWlCLENBQUM7UUFDOUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMxRSx3Q0FBd0M7WUFDeEMsSUFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQ3hHLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFFOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzFDO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBM0NnQixnQkFBZ0I7Z0JBQ25CLFVBQVU7Z0JBQ1Qsd0JBQXdCOztJQWxCOUI7UUFBUixLQUFLLEVBQUU7MkRBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzhEQUFrQztJQUNqQztRQUFSLEtBQUssRUFBRTsyREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7K0RBQWdDO0lBQy9CO1FBQVIsS0FBSyxFQUFFO3lEQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTs0REFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7d0RBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzJEQUE0QjtJQUUxQjtRQUFULE1BQU0sRUFBRTtpRUFBbUQ7SUFWakQsbUJBQW1CO1FBUi9CLFNBQVMsQ0FBQztZQUNULCtDQUErQztZQUMvQyxRQUFRLEVBQUUsY0FBYztZQUN4QixzREFBc0Q7WUFDdEQsSUFBSSxFQUFNO2dCQUNSLFNBQVMsRUFBRSxXQUFXO2FBQ3ZCO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQThEL0I7SUFBRCwwQkFBQztDQUFBLEFBOURELElBOERDO1NBOURZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uSW5pdCwgT25DaGFuZ2VzLCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgUmVmbGVjdGl2ZUluamVjdG9yLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEljb25QaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2ljb24tcGlja2VyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tpY29uUGlja2VyXScsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0ICAgIDoge1xuICAgICcoY2xpY2spJzogJ29uQ2xpY2soKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBJY29uUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpY29uUGlja2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlwUGxhY2VIb2xkZXIgPSAnU2VhcmNoIGljb24uLi4nO1xuICBASW5wdXQoKSBpcFBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgaXBGYWxsYmFja0ljb24gPSAnZmFzIGZhLXVzZXInO1xuICBASW5wdXQoKSBpcEhlaWdodCA9ICdhdXRvJztcbiAgQElucHV0KCkgaXBNYXhIZWlnaHQgPSAnMjAwcHgnO1xuICBASW5wdXQoKSBpcFdpZHRoID0gJzIzMHB4JztcbiAgQElucHV0KCkgaXBJY29uUGFjayA9IFsnYnMnLCAnZmE1J107XG5cbiAgQE91dHB1dCgpIGljb25QaWNrZXJTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG5cbiAgcHJpdmF0ZSBkaWFsb2c6IGFueTtcbiAgcHJpdmF0ZSBjcmVhdGVkOiBib29sZWFuO1xuICBwcml2YXRlIGlnbm9yZUNoYW5nZXMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgIHRoaXMuY3JlYXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaWNvblBpY2tlcikge1xuICAgICAgdGhpcy5pZ25vcmVDaGFuZ2VzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pY29uUGlja2VyID0gdGhpcy5pY29uUGlja2VyIHx8IHRoaXMuaXBGYWxsYmFja0ljb24gfHwgJ2ZhIGZhLXVzZXItcGx1cyc7XG4gICAgdGhpcy5pY29uUGlja2VyU2VsZWN0LmVtaXQodGhpcy5pY29uUGlja2VyKTtcbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGlmICghdGhpcy5jcmVhdGVkKSB7XG4gICAgICB0aGlzLmNyZWF0ZWQgPSB0cnVlO1xuICAgICAgY29uc3QgdmNSZWYgPSB0aGlzLnZjUmVmO1xuICAgICAgY29uc3QgY29tcEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShJY29uUGlja2VyQ29tcG9uZW50KTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhbXSwgdmNSZWYucGFyZW50SW5qZWN0b3IpO1xuICAgICAgY29uc3QgY21wUmVmID0gdmNSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBGYWN0b3J5LCAwLCBpbmplY3RvciwgW10pO1xuICAgICAgY21wUmVmLmluc3RhbmNlLnNldERpYWxvZyh0aGlzLCB0aGlzLmVsLCB0aGlzLmljb25QaWNrZXIsIHRoaXMuaXBQb3NpdGlvbiwgdGhpcy5pcEhlaWdodCwgdGhpcy5pcE1heEhlaWdodCxcbiAgICAgICAgdGhpcy5pcFdpZHRoLCB0aGlzLmlwUGxhY2VIb2xkZXIsIHRoaXMuaXBGYWxsYmFja0ljb24sIHRoaXMuaXBJY29uUGFjayk7XG4gICAgICB0aGlzLmRpYWxvZyA9IGNtcFJlZi5pbnN0YW5jZTtcblxuICAgICAgaWYgKHRoaXMudmNSZWYgIT09IHZjUmVmKSB7XG4gICAgICAgIGNtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgdGhpcy5kaWFsb2cub3BlbkRpYWxvZyh0aGlzLmljb25QaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIGljb25TZWxlY3RlZChpY29uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25QaWNrZXJTZWxlY3QuZW1pdChpY29uKTtcbiAgfVxuXG59XG4iXX0=