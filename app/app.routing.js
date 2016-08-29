System.register(['@angular/router', './components/about/about.component', "./components/not-found/pageNotFound.component", "./components/home/home.component", "./components/resources/resources.component", "./components/logout/logout.component", './login.routing', "./components/login/login.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, about_component_1, pageNotFound_component_1, home_component_1, resources_component_1, logout_component_1, login_routing_1, login_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (pageNotFound_component_1_1) {
                pageNotFound_component_1 = pageNotFound_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (resources_component_1_1) {
                resources_component_1 = resources_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (login_routing_1_1) {
                login_routing_1 = login_routing_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'logout', component: logout_component_1.LogoutComponent },
                { path: 'resources', component: resources_component_1.ResourcesComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = [
                login_routing_1.authProviders
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map