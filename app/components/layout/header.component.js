System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngAfterViewInit = function () {
                    jQuery("a").on('click', function (evt) {
                        if (jQuery('.navbar-collapse').hasClass('in')) {
                            evt.stopPropagation();
                            jQuery('.navbar-toggle').click();
                        }
                    });
                    jQuery('.navbar-collapse').on('mouseleave', function (evt) {
                        if (jQuery(this).hasClass('in')) {
                            jQuery('.navbar-toggle').click();
                        }
                    });
                    jQuery('.row.content').on('touchstart', function (evt) {
                        if (jQuery('.navbar-collapse').hasClass('in')) {
                            jQuery('.navbar-toggle').click();
                        }
                    });
                };
                __decorate([
                    core_1.ViewChild('hoversafe'), 
                    __metadata('design:type', core_1.ElementRef)
                ], HeaderComponent.prototype, "el", void 0);
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'c-header',
                        templateUrl: '/app/components/layout/header.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map