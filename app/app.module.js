System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './app.component', './app.routing', '@angular/http', './components/about/about.component', "./components/user-service/user.service", "./components/login/login.component", "./components/user/user.component", "./components/home/home.component", "./components/not-found/pageNotFound.component", "./components/resources/resources.component", "./components/logout/logout.component"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, app_component_1, app_routing_1, http_1, about_component_1, user_service_1, login_component_1, user_component_1, home_component_1, pageNotFound_component_1, resources_component_1, logout_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (pageNotFound_component_1_1) {
                pageNotFound_component_1 = pageNotFound_component_1_1;
            },
            function (resources_component_1_1) {
                resources_component_1 = resources_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            app_routing_1.routing,
                            http_1.HttpModule,
                            http_1.JsonpModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            login_component_1.LoginComponent,
                            user_component_1.UserComponent,
                            about_component_1.AboutComponent,
                            home_component_1.HomeComponent,
                            pageNotFound_component_1.PageNotFoundComponent,
                            resources_component_1.ResourcesComponent,
                            logout_component_1.LogoutComponent
                        ],
                        providers: [
                            user_service_1.UserService,
                            app_routing_1.appRoutingProviders
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map