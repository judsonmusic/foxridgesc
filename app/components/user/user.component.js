System.register(['@angular/core', '@angular/router', "./../user-service/user.service", "./../auth/auth.service"], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, auth_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(userService, authService, router) {
                    this.userService = userService;
                    this.authService = authService;
                    this.router = router;
                    this.user = {
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""
                    };
                    // this.userService.user$.subscribe((userData) => {
                    //   this.user = userData;
                    //   //console.log('We got some data!');
                    // });
                    //
                    // this.userService.loggedIn$.subscribe((loggedIn) => {
                    //   this.loggedIn = loggedIn;
                    //   //console.log('The user is logged in!');
                    // });
                }
                UserComponent.prototype.addAccount = function (user) {
                    var _this = this;
                    this.userService.createAccount(user).subscribe(function (result) {
                        //console.log('The result from creating account: ', result);
                        if (result) {
                            //console.log('Account Created Succesfully!', result.account);
                            _this.userService.login(result['account']).subscribe(function (result) {
                                //console.log('You are now logged in as well...', result);
                                _this.authService.login();
                                //onsole.log(this.authService.isLoggedIn);
                                // Get the redirect URL from our auth service
                                // If no redirect has been set, use the default
                                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/survey';
                                // Redirect the user
                                _this.router.navigate([redirect]);
                            });
                        }
                    });
                };
                UserComponent.prototype.updateAccount = function (user) {
                    this.userService.updateAccount(user).subscribe(function (result) {
                        if (result) {
                        }
                    });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user-component',
                        templateUrl: "/app/components/user/user.component.html"
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, auth_service_1.AuthService, router_1.Router])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map