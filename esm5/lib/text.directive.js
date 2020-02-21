import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new EventEmitter();
    }
    TextDirective.prototype.changeInput = function (value) {
        this.newValue.emit(value);
    };
    __decorate([
        Output()
    ], TextDirective.prototype, "newValue", void 0);
    __decorate([
        Input()
    ], TextDirective.prototype, "text", void 0);
    TextDirective = __decorate([
        Directive({
            // tslint:disable-next-line: directive-selector
            selector: '[text]',
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '(input)': 'changeInput($event.target.value)'
            }
        })
    ], TextDirective);
    return TextDirective;
}());
export { TextDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaWNvbi1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVdkU7SUFBQTtRQUNZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTS9DLENBQUM7SUFIQyxtQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBTFM7UUFBVCxNQUFNLEVBQUU7bURBQW9DO0lBQ3BDO1FBQVIsS0FBSyxFQUFFOytDQUFXO0lBRlIsYUFBYTtRQVJ6QixTQUFTLENBQUM7WUFDVCwrQ0FBK0M7WUFDL0MsUUFBUSxFQUFFLFFBQVE7WUFDbEIsc0RBQXNEO1lBQ3RELElBQUksRUFBTTtnQkFDUixTQUFTLEVBQUUsa0NBQWtDO2FBQzlDO1NBQ0YsQ0FBQztPQUNXLGFBQWEsQ0FPekI7SUFBRCxvQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbdGV4dF0nLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdCAgICA6IHtcbiAgICAnKGlucHV0KSc6ICdjaGFuZ2VJbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcblxuICBjaGFuZ2VJbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19