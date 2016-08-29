System.register(['@angular/core', '@angular/router', '@angular/http', "../auth/auth.service"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, auth_service_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            //import {Observable} from "rxjs";
            UserService = (function () {
                //user:Subject<any>;
                //user$:Observable<any>;
                //loggedIn = new Subject<any>();
                //loggedIn$:Observable<any>;
                function UserService(http, authService, router) {
                    //this.user = new Subject();
                    //this.user$ = this.user.asObservable();
                    //this.loggedIn = new Subject();
                    //this.loggedIn$ = this.loggedIn.asObservable();
                    this.http = http;
                    this.authService = authService;
                    this.router = router;
                }
                UserService.prototype.getUser = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    //headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', localStorage['jwt']);
                    //console.log('We have a user ID! Lets try to get a user!');
                    return this.http
                        .get('/api/accounts/' + localStorage['_id'], { headers: headers })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        if (!res._id) {
                            //console.log('***THERE WAS AN ERROR!');
                            _this.authService.isLoggedIn = false;
                        }
                        else {
                            console.log('USER FOUND!', res);
                            _this.authService.isLoggedIn = true;
                            //this.loggedIn.next(true);
                            _this.userData = res;
                            //this.user.next(res);
                            return res;
                        }
                    }, function (error) { return console.log('There was an error', error); });
                };
                UserService.prototype.createAccount = function (user) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .post('/api/accounts', JSON.stringify(user), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        if (res['account']) {
                            console.log('Account created!', res["account"]);
                            _this.authService.isLoggedIn = true;
                            //this.loggedIn.next(true);
                            _this.userData = res["account"];
                            //this.user$ = res;
                            //this.user.next('test');
                            return res;
                        }
                        else {
                            _this.authService.isLoggedIn = false;
                        }
                    });
                };
                UserService.prototype.login = function (user) {
                    var _this = this;
                    console.log('Loggin you in...');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .post('/api/authenticate', JSON.stringify(user), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        if (res['success'] == true) {
                            localStorage.setItem('jwt', res.token);
                            localStorage.setItem('_id', res.user[0]._id);
                            //set user service info...
                            //this.loggedIn.next(true);
                            _this.userData = res.user[0];
                            //this.user.next(res.user[0]);
                            return res;
                        }
                        else {
                            return res;
                        }
                    });
                };
                UserService.prototype.logout = function () {
                    localStorage.clear();
                    this.userData = null;
                    this.authService.isLoggedIn = false;
                    //this.loggedIn.next(false);
                };
                UserService.prototype.updateAccount = function (user) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', localStorage.getItem('jwt'));
                    console.log('PAYLOAD FOR UPDATE USER: ', user);
                    return this.http
                        .put('/api/accounts/' + user._id, JSON.stringify(user), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        console.log('RESULT AFTER UPDATE', res);
                        if (res['account']) {
                            console.log('USER UPDATE RETURNED:  ', res);
                        }
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService, router_1.Router])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map