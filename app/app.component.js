System.register(['@angular/core', '@angular/router', "./components/layout/header.component", "./components/user-service/user.service", "./components/auth/auth.service"], function(exports_1, context_1) {
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
    var core_1, router_1, header_component_1, user_service_1, auth_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(viewContainerRef, userService, authService, router) {
                    this.viewContainerRef = viewContainerRef;
                    this.userService = userService;
                    this.authService = authService;
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getUser().subscribe(function (user) {
                        console.log('APP FOUND USER WHILE CALLING GET USER');
                        //this.authService.isLoggedIn = true;
                        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
                        // Redirect the user
                        //this.router.navigate([redirect]);
                    }, function (error) {
                        console.log('Error! Redirecting!');
                        var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/';
                        // Redirect the user
                        _this.router.navigate(['/']);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.component.html',
                        directives: [header_component_1.HeaderComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, user_service_1.UserService, auth_service_1.AuthService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map