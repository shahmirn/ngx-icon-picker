import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
let TextDirective = class TextDirective {
    constructor() {
        this.newValue = new EventEmitter();
    }
    changeInput(value) {
        this.newValue.emit(value);
    }
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
export { TextDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaWNvbi1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVdkUsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUExQjtRQUNZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTS9DLENBQUM7SUFIQyxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQU5XO0lBQVQsTUFBTSxFQUFFOytDQUFvQztBQUNwQztJQUFSLEtBQUssRUFBRTsyQ0FBVztBQUZSLGFBQWE7SUFSekIsU0FBUyxDQUFDO1FBQ1QsK0NBQStDO1FBQy9DLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLHNEQUFzRDtRQUN0RCxJQUFJLEVBQU07WUFDUixTQUFTLEVBQUUsa0NBQWtDO1NBQzlDO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FPekI7U0FQWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3RleHRdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3QgICAgOiB7XG4gICAgJyhpbnB1dCknOiAnY2hhbmdlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dERpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG5cbiAgY2hhbmdlSW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubmV3VmFsdWUuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==