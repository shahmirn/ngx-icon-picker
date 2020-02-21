import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SearchIconPipe = class SearchIconPipe {
    transform(value, search) {
        if (!search) {
            return value;
        }
        const searchValue = this.clean(search);
        return value.filter(icon => {
            let keep = false;
            if (icon.name) {
                keep = keep || this.clean(icon.name).includes(searchValue);
            }
            if (icon.id) {
                keep = keep || this.clean(icon.id).includes(searchValue);
            }
            if (icon.filter) {
                keep = keep || icon.filter.some(filter => this.clean(filter).includes(searchValue));
            }
            if (icon.aliases) {
                keep = keep || icon.aliases.some(alias => this.clean(alias).includes(searchValue));
            }
            return keep;
        });
    }
    clean(value) {
        return value.trim().toLowerCase();
    }
};
SearchIconPipe = __decorate([
    Pipe({
        name: 'searchIcon'
    })
], SearchIconPipe);
export { SearchIconPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWljb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pY29uLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU9wRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBRXpCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDNUQ7WUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ1gsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDckY7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ3BGO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYTtRQUNqQixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTtBQTlCWSxjQUFjO0lBSjFCLElBQUksQ0FBQztRQUNKLElBQUksRUFBRSxZQUFZO0tBQ25CLENBQUM7R0FFVyxjQUFjLENBOEIxQjtTQTlCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4vaWNvbic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NlYXJjaEljb24nXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoSWNvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IEljb25bXSwgc2VhcmNoOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICghc2VhcmNoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSB0aGlzLmNsZWFuKHNlYXJjaCk7XG5cbiAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGljb24gPT4ge1xuICAgICAgbGV0IGtlZXAgPSBmYWxzZTtcbiAgICAgIGlmIChpY29uLm5hbWUpIHtcbiAgICAgICAga2VlcCA9IGtlZXAgfHwgdGhpcy5jbGVhbihpY29uLm5hbWUpLmluY2x1ZGVzKHNlYXJjaFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpY29uLmlkKSB7XG4gICAgICAgIGtlZXAgPSBrZWVwIHx8IHRoaXMuY2xlYW4oaWNvbi5pZCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGljb24uZmlsdGVyKSB7XG4gICAgICAgIGtlZXAgPSBrZWVwIHx8IGljb24uZmlsdGVyLnNvbWUoZmlsdGVyID0+IHRoaXMuY2xlYW4oZmlsdGVyKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKGljb24uYWxpYXNlcykge1xuICAgICAgICBrZWVwID0ga2VlcCB8fCBpY29uLmFsaWFzZXMuc29tZShhbGlhcyA9PiB0aGlzLmNsZWFuKGFsaWFzKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGtlZXA7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhbih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbn1cbiJdfQ==