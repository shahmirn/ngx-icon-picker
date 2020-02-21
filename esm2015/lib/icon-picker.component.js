import { __decorate } from "tslib";
import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IconPickerService } from './icon-picker.service';
import { IconType } from './icon';
let IconPickerComponent = class IconPickerComponent {
    constructor(el, cdr, service) {
        this.el = el;
        this.cdr = cdr;
        this.service = service;
        this.iconType = IconType;
        this.dialogArrowSize = 10;
        this.icons = [];
        this.search = '';
    }
    setDialog(instance, elementRef, icon, ipPosition, ipHeight, ipMaxHeight, ipWidth, ipPlaceHolder, ipFallbackIcon, ipIconPack) {
        this.directiveInstance = instance;
        this.setInitialIcon(icon);
        this.directiveElementRef = elementRef;
        this.ipPosition = ipPosition;
        this.ipHeight = parseInt(ipHeight, 10);
        this.ipMaxHeight = parseInt(ipMaxHeight, 10);
        this.ipWidth = parseInt(ipWidth, 10);
        if (!this.ipWidth) {
            this.ipWidth = elementRef.nativeElement.offsetWidth;
        }
        this.ipPlaceHolder = ipPlaceHolder;
        this.ipFallbackIcon = ipFallbackIcon;
        this.ipIconPack = ipIconPack;
    }
    ngOnInit() {
        this.icons = this.service.getIcons(this.ipIconPack);
        this.listenerMouseDown = (event) => this.onMouseDown(event);
        this.listenerResize = () => this.onResize();
        this.openDialog(this.initialIcon);
    }
    setInitialIcon(icon) {
        this.initialIcon = icon;
        this.selectedIcon = this.icons.find(el => el ?
            `fa fa-${el.id}` === icon || `glyphicon glyphicon-${el.id}` === icon || `${el.id}` === icon :
            false);
        if (this.selectedIcon && icon !== this.ipFallbackIcon) {
            this.search = this.selectedIcon.id;
        }
        else {
            this.search = '';
        }
    }
    openDialog(icon) {
        this.setInitialIcon(icon);
        this.openIconPicker();
    }
    setSearch(val) {
        this.search = val;
    }
    selectIcon(icon) {
        if (icon.type === IconType.FONT_AWESEOME) {
            this.directiveInstance.iconSelected(`fa fa-${icon.id}`);
        }
        else if (icon.type === IconType.BOOTSTRAP) {
            this.directiveInstance.iconSelected(`glyphicon glyphicon-${icon.id}`);
        }
        else if (icon.type === IconType.FONT_AWESEOME5) {
            this.directiveInstance.iconSelected(`${icon.id}`);
        }
        this.closeIconPicker();
    }
    onMouseDown(event) {
        if (!this.isDescendant(this.el.nativeElement, event.target) && event.target !== this.directiveElementRef.nativeElement) {
            this.closeIconPicker();
        }
    }
    openIconPicker() {
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(() => {
                this.setDialogPosition();
                this.hidden = false;
                this.cdr.detectChanges();
            }, 0);
            document.addEventListener('mousedown', this.listenerMouseDown);
            window.addEventListener('resize', this.listenerResize);
        }
    }
    closeIconPicker() {
        if (this.show) {
            this.show = false;
            document.removeEventListener('mousedown', this.listenerMouseDown);
            window.removeEventListener('resize', this.listenerResize);
            this.cdr.detectChanges();
        }
    }
    onResize() {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
    }
    setDialogPosition() {
        const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
        let node = this.directiveElementRef.nativeElement;
        let position = 'static';
        let transform = '';
        let parentNode = null;
        let transformNode = null;
        let style = null;
        while (node !== null && node.tagName !== 'HTML') {
            style = window.getComputedStyle(node);
            position = style.getPropertyValue('position');
            transform = style.getPropertyValue('transform');
            if (position !== 'static' && parentNode === null) {
                parentNode = node;
            }
            if (transform && transform !== 'none' && transformNode === null) {
                transformNode = node;
            }
            if (position === 'fixed') {
                parentNode = transformNode;
                break;
            }
            node = node.parentNode;
        }
        const boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
        if (position !== 'fixed' || parentNode) {
            if (parentNode === null) {
                parentNode = node;
            }
            const boxParent = this.createBox(parentNode, true);
            this.top = boxDirective.top - boxParent.top;
            this.left = boxDirective.left - boxParent.left;
        }
        else {
            this.top = boxDirective.top;
            this.left = boxDirective.left;
        }
        if (position === 'fixed') {
            this.position = 'fixed';
        }
        if (this.ipPosition === 'left') {
            this.left -= this.ipWidth + this.dialogArrowSize - 2;
        }
        else if (this.ipPosition === 'top') {
            this.top -= dialogHeight + this.dialogArrowSize;
            this.arrowTop = dialogHeight - 1;
        }
        else if (this.ipPosition === 'bottom') {
            this.top += boxDirective.height + this.dialogArrowSize;
        }
        else {
            this.left += boxDirective.width + this.dialogArrowSize - 2;
        }
    }
    isDescendant(parent, child) {
        let node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    createBox(element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }
};
IconPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: IconPickerService }
];
__decorate([
    ViewChild('dialogPopup')
], IconPickerComponent.prototype, "dialogElement", void 0);
IconPickerComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'icon-picker',
        template: "<div class=\"icon-picker\" #dialogPopup\n     [hidden]=\"!show\"\n     [style.visibility]=\"this.hidden ? 'hidden' : 'visible'\"\n     [style.height.px]=\"ipHeight\"\n     [style.width.px]=\"ipWidth\"\n     [style.top.px]=\"top\"\n     [style.left.px]=\"left\"\n     [style.position]=\"position\">\n\n  <div class=\"arrow arrow-{{ipPosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div class=\"icon-search\">\n    <input type=\"text\" class=\"form-control input-sm\" [text] [value]=\"search\" (newValue)=\"setSearch($event)\" [placeholder]=\"ipPlaceHolder\">\n  </div>\n  <div class=\"icon-grid\" [ngStyle]=\"{'max-height.px': ipMaxHeight}\">\n    <div *ngFor=\"let icon of icons | searchIcon:search\">\n      <button *ngIf=\"icon\" class=\"btn btn-default\" type=\"button\" title=\"{{ icon.name }}\"\n              [ngClass]=\"{active : icon === selectedIcon}\"\n              (click)=\"selectIcon(icon)\" >\n        <span *ngIf=\"icon.type === iconType.FONT_AWESEOME\" class=\"fa fa-{{icon.id}}\"></span>\n        <span *ngIf=\"icon.type === iconType.BOOTSTRAP\" class=\"glyphicon glyphicon-{{icon.id}}\"></span>\n        <span *ngIf=\"icon.type === iconType.FONT_AWESEOME5\" class=\"{{icon.id}}\"></span>\n      </button>\n    </div>\n  </div>\n\n</div>\n",
        styles: [".icon-picker *{box-sizing:border-box;margin:0;font-size:11px}.icon-picker{position:absolute;z-index:100000;top:250px;left:30px;width:230px;height:auto;border:1px solid #777;cursor:default;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-picker i{position:relative;cursor:default}.icon-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.icon-picker .arrow-right{top:10px;left:-20px;border-width:5px 10px;border-color:transparent #777 transparent transparent}.icon-picker .arrow-left{top:10px;left:100%;border-width:5px 10px;border-color:transparent transparent transparent #777}.icon-picker .arrow-bottom{top:-20px;left:10px;border-width:10px 5px;border-color:transparent transparent #777}.icon-picker .arrow-top{left:10px;border-width:10px 5px;border-color:#777 transparent transparent}.icon-picker div.icon-search{padding:5px}.icon-picker div.icon-grid{display:-webkit-box;display:flex;overflow-y:auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;padding:5px}.icon-picker div.icon-grid div{margin:2px}.icon-picker div.icon-grid div button{width:33px;padding:6px 10px}.icon-picker div.cursor-sv{position:relative;width:15px;height:15px;border-radius:50%;border:1px solid #ddd;cursor:default}.icon-picker div.cursor{position:relative;width:16px;height:16px;border-radius:50%;border:2px solid #222;cursor:default}"]
    })
], IconPickerComponent);
export { IconPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWljb24tcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2ljb24tcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQVEsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBU3hDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBZ0M5QixZQUNVLEVBQWMsRUFDZCxHQUFzQixFQUN0QixPQUEwQjtRQUYxQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFuQjdCLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFTbkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFJN0IsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQUcsRUFBRSxDQUFDO0lBTVosQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFhLEVBQUUsVUFBc0IsRUFBRSxJQUFZLEVBQUUsVUFBa0IsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQzlHLE9BQWUsRUFBRSxhQUFxQixFQUFFLGNBQXNCLEVBQUUsVUFBb0I7UUFDNUYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFB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d00vQjtTQXhNWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJY29uUGlja2VyU2VydmljZSB9IGZyb20gJy4vaWNvbi1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJY29uLCBJY29uVHlwZSB9IGZyb20gJy4vaWNvbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvciAgIDogJ2ljb24tcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24tcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzICA6IFsnLi9pY29uLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSWNvblBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBpcEhlaWdodDogbnVtYmVyO1xuICBwdWJsaWMgaXBNYXhIZWlnaHQ6IG51bWJlcjtcbiAgcHVibGljIGlwV2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGlwUGxhY2VIb2xkZXI6IHN0cmluZztcbiAgcHVibGljIGlwRmFsbGJhY2tJY29uOiBzdHJpbmc7XG4gIHB1YmxpYyBpcEljb25QYWNrOiBzdHJpbmdbXTtcblxuICBwdWJsaWMgc2hvdzogYm9vbGVhbjtcbiAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcbiAgcHVibGljIHRvcDogbnVtYmVyO1xuICBwdWJsaWMgbGVmdDogbnVtYmVyO1xuICBwdWJsaWMgcG9zaXRpb246IHN0cmluZztcbiAgcHVibGljIGFycm93VG9wOiBudW1iZXI7XG4gIHB1YmxpYyBzZWxlY3RlZEljb246IEljb247XG4gIHB1YmxpYyBpY29uVHlwZSA9IEljb25UeXBlO1xuXG4gIHByaXZhdGUgZGlyZWN0aXZlSW5zdGFuY2U6IGFueTtcbiAgcHJpdmF0ZSBpbml0aWFsSWNvbjogc3RyaW5nO1xuICBwcml2YXRlIGRpcmVjdGl2ZUVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBsaXN0ZW5lck1vdXNlRG93bjogYW55O1xuICBwcml2YXRlIGxpc3RlbmVyUmVzaXplOiBhbnk7XG5cbiAgcHJpdmF0ZSBkaWFsb2dBcnJvd1NpemUgPSAxMDtcblxuICBAVmlld0NoaWxkKCdkaWFsb2dQb3B1cCcpIGRpYWxvZ0VsZW1lbnQ6IGFueTtcblxuICBpY29uczogSWNvbltdID0gW107XG4gIHNlYXJjaCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc2VydmljZTogSWNvblBpY2tlclNlcnZpY2UpIHtcbiAgfVxuXG4gIHNldERpYWxvZyhpbnN0YW5jZTogYW55LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpY29uOiBzdHJpbmcsIGlwUG9zaXRpb246IHN0cmluZywgaXBIZWlnaHQ6IHN0cmluZywgaXBNYXhIZWlnaHQ6IHN0cmluZyxcbiAgICAgICAgICAgIGlwV2lkdGg6IHN0cmluZywgaXBQbGFjZUhvbGRlcjogc3RyaW5nLCBpcEZhbGxiYWNrSWNvbjogc3RyaW5nLCBpcEljb25QYWNrOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB0aGlzLnNldEluaXRpYWxJY29uKGljb24pO1xuICAgIHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgdGhpcy5pcFBvc2l0aW9uID0gaXBQb3NpdGlvbjtcbiAgICB0aGlzLmlwSGVpZ2h0ID0gcGFyc2VJbnQoaXBIZWlnaHQsIDEwKTtcbiAgICB0aGlzLmlwTWF4SGVpZ2h0ID0gcGFyc2VJbnQoaXBNYXhIZWlnaHQsIDEwKTtcbiAgICB0aGlzLmlwV2lkdGggPSBwYXJzZUludChpcFdpZHRoLCAxMCk7XG4gICAgaWYgKCF0aGlzLmlwV2lkdGgpIHtcbiAgICAgIHRoaXMuaXBXaWR0aCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgdGhpcy5pcFBsYWNlSG9sZGVyID0gaXBQbGFjZUhvbGRlcjtcbiAgICB0aGlzLmlwRmFsbGJhY2tJY29uID0gaXBGYWxsYmFja0ljb247XG4gICAgdGhpcy5pcEljb25QYWNrID0gaXBJY29uUGFjaztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWNvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0SWNvbnModGhpcy5pcEljb25QYWNrKTtcbiAgICB0aGlzLmxpc3RlbmVyTW91c2VEb3duID0gKGV2ZW50OiBhbnkpID0+IHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIHRoaXMubGlzdGVuZXJSZXNpemUgPSAoKSA9PiB0aGlzLm9uUmVzaXplKCk7XG4gICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuaW5pdGlhbEljb24pO1xuICB9XG5cbiAgc2V0SW5pdGlhbEljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5pbml0aWFsSWNvbiA9IGljb247XG4gICAgdGhpcy5zZWxlY3RlZEljb24gPSB0aGlzLmljb25zLmZpbmQoZWwgPT4gZWwgP1xuICAgICAgICBgZmEgZmEtJHtlbC5pZH1gID09PSBpY29uIHx8IGBnbHlwaGljb24gZ2x5cGhpY29uLSR7ZWwuaWR9YCA9PT0gaWNvbiB8fCBgJHtlbC5pZH1gID09PSBpY29uIDpcbiAgICAgICAgZmFsc2VcbiAgICApO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSWNvbiAmJiBpY29uICE9PSB0aGlzLmlwRmFsbGJhY2tJY29uKSB7XG4gICAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VsZWN0ZWRJY29uLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5EaWFsb2coaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsSWNvbihpY29uKTtcbiAgICB0aGlzLm9wZW5JY29uUGlja2VyKCk7XG4gIH1cblxuICBzZXRTZWFyY2godmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaCA9IHZhbDtcbiAgfVxuXG4gIHNlbGVjdEljb24oaWNvbjogSWNvbik6IHZvaWQge1xuICAgIGlmIChpY29uLnR5cGUgPT09IEljb25UeXBlLkZPTlRfQVdFU0VPTUUpIHtcbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaWNvblNlbGVjdGVkKGBmYSBmYS0ke2ljb24uaWR9YCk7XG4gICAgfSBlbHNlIGlmIChpY29uLnR5cGUgPT09IEljb25UeXBlLkJPT1RTVFJBUCkge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pY29uU2VsZWN0ZWQoYGdseXBoaWNvbiBnbHlwaGljb24tJHtpY29uLmlkfWApO1xuICAgIH0gZWxzZSBpZiAoaWNvbi50eXBlID09PSBJY29uVHlwZS5GT05UX0FXRVNFT01FNSkge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pY29uU2VsZWN0ZWQoYCR7aWNvbi5pZH1gKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZUljb25QaWNrZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0KSAmJiBldmVudC50YXJnZXQgIT09IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmNsb3NlSWNvblBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5JY29uUGlja2VyKCkge1xuICAgIGlmICghdGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGlhbG9nUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSwgMCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUljb25QaWNrZXIoKSB7XG4gICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNldERpYWxvZ1Bvc2l0aW9uKCkge1xuICAgIGNvbnN0IGRpYWxvZ0hlaWdodCA9IHRoaXMuZGlhbG9nRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBsZXQgbm9kZSA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBwb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgIGxldCB0cmFuc2Zvcm0gPSAnJztcbiAgICBsZXQgcGFyZW50Tm9kZTogYW55ID0gbnVsbDtcbiAgICBsZXQgdHJhbnNmb3JtTm9kZTogYW55ID0gbnVsbDtcbiAgICBsZXQgc3R5bGU6IGFueSA9IG51bGw7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwgJiYgbm9kZS50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICBwb3NpdGlvbiA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gICAgICB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKTtcbiAgICAgIGlmIChwb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScgJiYgdHJhbnNmb3JtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICB0cmFuc2Zvcm1Ob2RlID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICBwYXJlbnROb2RlID0gdHJhbnNmb3JtTm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBjb25zdCBib3hEaXJlY3RpdmUgPSB0aGlzLmNyZWF0ZUJveCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSk7XG4gICAgaWYgKHBvc2l0aW9uICE9PSAnZml4ZWQnIHx8IHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgfVxuICAgICAgY29uc3QgYm94UGFyZW50ID0gdGhpcy5jcmVhdGVCb3gocGFyZW50Tm9kZSwgdHJ1ZSk7XG4gICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3AgLSBib3hQYXJlbnQudG9wO1xuICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQgLSBib3hQYXJlbnQubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wO1xuICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQ7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfVxuICAgIGlmICh0aGlzLmlwUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuaXBXaWR0aCArIHRoaXMuZGlhbG9nQXJyb3dTaXplIC0gMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXBQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMudG9wIC09IGRpYWxvZ0hlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplO1xuICAgICAgdGhpcy5hcnJvd1RvcCA9IGRpYWxvZ0hlaWdodCAtIDE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlwUG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVmdCArPSBib3hEaXJlY3RpdmUud2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDI7XG4gICAgfVxuICB9XG5cbiAgaXNEZXNjZW5kYW50KHBhcmVudDogYW55LCBjaGlsZDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IG5vZGU6IGFueSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVCb3goZWxlbWVudDogYW55LCBvZmZzZXQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3AgICA6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDApLFxuICAgICAgbGVmdCAgOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogMCksXG4gICAgICB3aWR0aCA6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgfVxufVxuIl19