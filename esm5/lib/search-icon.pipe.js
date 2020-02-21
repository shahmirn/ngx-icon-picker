import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var SearchIconPipe = /** @class */ (function () {
    function SearchIconPipe() {
    }
    SearchIconPipe.prototype.transform = function (value, search) {
        var _this = this;
        if (!search) {
            return value;
        }
        var searchValue = this.clean(search);
        return value.filter(function (icon) {
            var keep = false;
            if (icon.name) {
                keep = keep || _this.clean(icon.name).includes(searchValue);
            }
            if (icon.id) {
                keep = keep || _this.clean(icon.id).includes(searchValue);
            }
            if (icon.filter) {
                keep = keep || icon.filter.some(function (filter) { return _this.clean(filter).includes(searchValue); });
            }
            if (icon.aliases) {
                keep = keep || icon.aliases.some(function (alias) { return _this.clean(alias).includes(searchValue); });
            }
            return keep;
        });
    };
    SearchIconPipe.prototype.clean = function (value) {
        return value.trim().toLowerCase();
    };
    SearchIconPipe = __decorate([
        Pipe({
            name: 'searchIcon'
        })
    ], SearchIconPipe);
    return SearchIconPipe;
}());
export { SearchIconPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWljb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pY29uLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU9wRDtJQUFBO0lBOEJBLENBQUM7SUE1QkMsa0NBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxNQUFjO1FBQXZDLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtZQUN0QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7WUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksR0FBRyxJQUFJLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNYLElBQUksR0FBRyxJQUFJLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO2FBQ3JGO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQzthQUNwRjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLEtBQWE7UUFDakIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQTdCVSxjQUFjO1FBSjFCLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUM7T0FFVyxjQUFjLENBOEIxQjtJQUFELHFCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL2ljb24nO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzZWFyY2hJY29uJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEljb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBJY29uW10sIHNlYXJjaDogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gdGhpcy5jbGVhbihzZWFyY2gpO1xuXG4gICAgcmV0dXJuIHZhbHVlLmZpbHRlcihpY29uID0+IHtcbiAgICAgIGxldCBrZWVwID0gZmFsc2U7XG4gICAgICBpZiAoaWNvbi5uYW1lKSB7XG4gICAgICAgIGtlZXAgPSBrZWVwIHx8IHRoaXMuY2xlYW4oaWNvbi5uYW1lKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoaWNvbi5pZCkge1xuICAgICAgICBrZWVwID0ga2VlcCB8fCB0aGlzLmNsZWFuKGljb24uaWQpLmluY2x1ZGVzKHNlYXJjaFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpY29uLmZpbHRlcikge1xuICAgICAgICBrZWVwID0ga2VlcCB8fCBpY29uLmZpbHRlci5zb21lKGZpbHRlciA9PiB0aGlzLmNsZWFuKGZpbHRlcikuaW5jbHVkZXMoc2VhcmNoVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChpY29uLmFsaWFzZXMpIHtcbiAgICAgICAga2VlcCA9IGtlZXAgfHwgaWNvbi5hbGlhc2VzLnNvbWUoYWxpYXMgPT4gdGhpcy5jbGVhbihhbGlhcykuaW5jbHVkZXMoc2VhcmNoVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBrZWVwO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYW4odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICB9XG59XG4iXX0=