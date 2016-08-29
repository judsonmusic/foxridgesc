System.register(['@angular/core', '@angular/router', './auth.service', "../user-service/user.service"], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1, user_service_1;
    var AuthGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AuthGuard = (function () {
                function AuthGuard(authService, router, userService) {
                    this.authService = authService;
                    this.router = router;
                    this.userService = userService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var _this = this;
                    if (!this.authService.isLoggedIn) {
                        console.log('Auth Guard subscribing to get user.');
                        this.userService.getUser().subscribe(function (user) {
                            console.log('AUTH GUARD GETTING USER', user);
                            if (user && user._id) {
                                _this.authService.isLoggedIn = true;
                                // Store the attempted URL for redirectin
                                //console.log('Trying to go to ', state.url);
                                _this.authService.redirectUrl = state.url || '/dashboard';
                                _this.router.navigate([_this.authService.redirectUrl]);
                                return true;
                            }
                            else {
                                console.log('Validation Failed.');
                                localStorage.clear();
                                _this.router.navigate(['/login']);
                                return false;
                            }
                        }, function (error) {
                            console.log('There was an error.');
                            _this.router.navigate(['/login']);
                            return false;
                        });
                    }
                    else {
                        console.log('AUTH GUARD SAYS THEY ARE ALREADY LOGGED IN!');
                        this.authService.redirectUrl = state.url;
                        //console.log(state.url);
                        //this.router.navigate([this.authService.redirectUrl]);
                        return true;
                    }
                };
                AuthGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, user_service_1.UserService])
                ], AuthGuard);
                return AuthGuard;
            }());
            exports_1("AuthGuard", AuthGuard);
        }
    }
});
//# sourceMappingURL=auth-guard.service.js.map