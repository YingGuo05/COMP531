webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    \n    <div class=\"text-center\">\n        <h1>Yixing Zhang's FANS Zone</h1>\n        <img src=\"assets/images/pic1.jpg\" class=\"img-fluid\" alt=\"Responsive image\" width=\"550px\" height=\"300px\">\n    </div>\n    \n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(route, router, share) {
        this.route = route;
        this.router = router;
        this.share = share;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__share_service__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_service__["a" /* ShareService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_nav_service__ = __webpack_require__("../../../../../src/app/main/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_5__auth_auth_component__["a" /* AuthComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '', redirectTo: '/auth', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__main_nav_service__["a" /* NavService */], __WEBPACK_IMPORTED_MODULE_12__share_service__["a" /* ShareService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  article works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__("../../../../../src/app/article/article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticleComponent);

//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n    \t<table>\n\t\t    <tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td class=\"col-sm-6\">\n                        <div id=\"reg\">\n                            <h2>Register</h2>\n                            <form (ngSubmit)=\"onRegSubmit(register)\" #register=\"ngForm\" >\n                                    <p>( * required )</p>\n                                    <p> * Name: </p>\n                                    <input type=\"text\" name=\"name\" placeholder=\"Name\" ngModel #name=\"ngModel\" required pattern=\"^([a-zA-Z]{1})([a-zA-Z0-9])*$\" class=\"form-control\"/>\n                                    <span *ngIf=\"!name.valid && name.touched \">Input Name is not correct.</span>\n                                    <p> * Email Address: </p>\n                                    <input type=\"text\" name=\"email\" placeholder=\"Email address\" required ngModel pattern=\"^([a-zA-Z0-9\\_\\-\\.])+@([a-zA-Z0-9\\_\\-])+((\\.[a-zA-Z0-9]{2,4}){1,2})$\" #email=\"ngModel\" class=\"form-control\"/>\n                                    <span *ngIf=\"!email.valid && email.touched\">Email is not correct.</span>\n                                    <p> * Phone Number: </p>\n                                    <input type=\"text\" name=\"phone\" placeholder=\"123-123-1234\" required ngModel pattern=\"^\\(?([0-9]{3})\\)?[-]?([0-9]{3})[-]?([0-9]{4})$\" #phone=\"ngModel\" class=\"form-control\"/>\n                                    <span *ngIf=\"!phone.valid && phone.touched\">Phone Number is not correct.</span>\n                                    <p> * Data of Birth: </p>\n                                    <input type=\"date\" name=\"birth\" ngModel required #birth=\"ngModel\" class=\"form-control\"/>\n                                    <span *ngIf=\"birth.touched && !checkage(birth)\">You should be at least 18 years old.</span>\n                                    <p> * Zipcode: </p>\n                                    <input type=\"text\" name=\"zipcode\" placeholder=\"12345\" required ngModel pattern=\"^([0-9]{5})$\" #zipcode=\"ngModel\" class=\"form-control\"/>\n                                    <span *ngIf=\"!zipcode.valid && zipcode.touched\">Zipcode shoud be 5 digit numbers.</span>\n                                    <p> * Password: </p>\n                                    <input type=\"password\" name=\"password\" [(ngModel)]=\"pw1\" placeholder=\"Enter Password\" required ngModel #password=\"ngModel\" class=\"form-control\"/>\n                                    <p> * Password Confirmation: </p>\n                                    <input type=\"password\" name=\"passwordConfirm\" placeholder=\"Enter Again\" [(ngModel)]=\"pw2\" required ngModel #passwordConfirm=\"ngModel\" class=\"form-control\"/>\n                                    <span *ngIf=\"pw1!=pw2\">Password is not equal to password confirmation.</span>\n                                    <br/>\n                                    <br/>\n                                    <span *ngIf=\"!register.valid\">You have to input all the information in correct format before clicking submit button.<br/></span>\n                                    <br/>\n                                    <button type=\"submit\" [disabled]=\"!register.valid\" class=\"btn btn-primary\">Submit</button>\n                                    <button type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n                            </form>\n                        </div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t<div id=\"log\">\n                            <h2>Login</h2>\n                            <form (ngSubmit)=\"onLogSubmit(login)\" #login=\"ngForm\">\n                                <p>Account Name:</p>\n                                <input class=\"form-control\" type=\"text\" name=\"accountname\" ngModel required #accountname=\"ngModel\">\n                                <span *ngIf=\"!accountname.valid && name.touched \">Account Name is required.</span>\n                                <p>Account Password:</p>\n                                <input class=\"form-control\" type=\"password\" name=\"account_password\" #account_password=\"ngModel\" ngModel required>\n                                <span *ngIf=\"!account_password.valid && account_password.touched \">Account Password is required.</span>\n                                <br/>\n                                <span *ngIf=\"!login.valid\">You have to input accoutn name and password before clicking login.</span>\n                                 <br/>\n                                <button type=\"submit\"  class=\"btn btn-primary\" [disabled]=\"!login.valid\">Login</button>\n                                <button type=\"reset\" class=\"btn btn-primary\">Clear</button>\n                            </form>\n                        </div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n        </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(router, share) {
        this.router = router;
        this.share = share;
        this.user_info = {
            name: 'Ying',
            email: 'yg45@rice.edu',
            phone: '123-123-1234',
            birth: '1995-05-10',
            zipcode: '77030',
            password: '12345'
        };
        this.birth = this.user_info.birth;
        this.today = new Date();
        this.birthDate = new Date(this.birth);
        this.age = this.today.getFullYear() - this.birthDate.getFullYear();
        this.m = this.today.getMonth() - this.birthDate.getMonth();
    }
    AuthComponent.prototype.reset = function () {
        this.regForm.reset();
    };
    AuthComponent.prototype.checkage = function (birthday) {
        this.birth = birthday;
        this.today = new Date();
        this.birthDate = new Date(this.birth);
        this.age = this.today.getFullYear() - this.birthDate.getFullYear();
        this.m = this.today.getMonth() - this.birthDate.getMonth();
        if (this.m < 0 || (this.m === 0 && this.today.getDate() < this.birthDate.getDate())) {
            this.age--;
        }
        if (this.age < 18)
            return false;
        return true;
    };
    AuthComponent.prototype.onRegSubmit = function (Form1) {
        if (Form1.valid && this.pw1 == this.pw2 && this.checkage(Form1.value.birth)) {
            //update the userinfo and send it to share service, go to main page
            this.user_info.name = Form1.value.name;
            this.user_info.email = Form1.value.email;
            this.user_info.phone = Form1.value.phone;
            this.user_info.birth = Form1.value.birth;
            this.user_info.zipcode = Form1.value.zipcode;
            this.user_info.password = Form1.value.password;
            this.share.send_info(this.user_info);
            this.router.navigate(['../main']);
        }
    };
    AuthComponent.prototype.onLogSubmit = function (Form2) {
        //update name and password into userinfo and send it to service
        this.user_info.name = Form2.value.accountname;
        this.user_info.password = Form2.value.account_password;
        this.share.send_info(this.user_info);
        this.router.navigate(['../main']); //go to main page
        this.logForm.reset();
    };
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('register'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */]) === "function" && _a || Object)
], AuthComponent.prototype, "regForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('login'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */]) === "function" && _b || Object)
], AuthComponent.prototype, "logForm", void 0);
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__share_service__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_service__["a" /* ShareService */]) === "function" && _d || Object])
], AuthComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n        <div class=\"text-center\">\n            <nav>\n                <a routerLink=\"/profile\" routerLinkActive=\"active\" class=\"btn btn-primary\">Profile</a>\n                <a routerLink=\"/auth\" routerLinkActive=\"active\" class=\"btn btn-primary\">Logout</a>\n            </nav>\n            <router-outlet></router-outlet>\n            <hr>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <br/>\n                <img src=\"assets/images/pic5.jpg\" class=\"rounded\" alt=\"http://img3.imgtn.bdimg.com/it/u=3490529943,881752914&fm=214&gp=0.jpg\" width=\"300px\" height=\"200px\">\n                <h4>{{name}}</h4>\n                <h5>{{currentStatus}}</h5>\n                <input type=\"text\" placeholder=\"New Status\" [(ngModel)]=\"status\">\n                <button type=\"button\" (click)=\"changeStatus()\" class=\"btn btn-primary\">Update</button>\n            </div>\n            <div class=\"col-md-6\">\n                <h5>New Post!</h5>\n                <textarea placeholder=\"new post here\" rows=\"10\" cols=\"60\" [(ngModel)]=\"newPost\"></textarea>\n                <br/>\n                <input type=\"file\" class=\"btn\">\n                <button type=\"button\" class = \"btn btn-primary\" (click)=\"clear()\">Cancel</button>\n                <button type=\"button\" class = \"btn btn-primary\" (click)=\"addPost()\">Post</button>\n                \n                \n            </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h1>Followers</h1>\n                <div *ngFor=\"let f of followers\">\n                    <mat-card *ngIf=\"f.display\" class=\"followers\">\n                        <mat-card-title class=\"followers-text\">\n                            <h4>{{f.name}}</h4>\n                        </mat-card-title>\n                        <img mat-card-img src=\"{{f.img}}\" alt=\"#\" width=\"200px\" height=\"100px\" class=\"followers\">\n                        <mat-card-content class=\"followers-text\">\n                            <h5>{{f.status}}</h5>\n                        </mat-card-content>\n                        <button type=\"button\" (click)=\"delete(f)\" class=\"btn btn-primary unfollow\">unfollow</button>\n                    </mat-card>\n                </div>\n                <br/>\n                <input type=\"text\" [(ngModel)] = \"follower\">\n                <button type=\"button\" class = \"btn btn-primary\"  (click)=\"add()\">Add New </button>\n            </div>\n            <div class=\"col-md-8\">\n                <h1>Posts</h1>\n                <input type=\"text\" placeholder=\"Search ...\" class=\"form-control\" (keyup)=\"filter($event)\">\n                \n                <div *ngFor=\"let f1 of article\">\n                    <mat-card *ngIf=\"f1.display\">\n                        <mat-card-title>\n                            <h3>{{f1.author}}</h3>\n                        </mat-card-title>\n                        <img mat-card-img src=\"{{f1.img}}\" alt=\"\" width=\"400px\" height=\"230px\">\n                        <mat-card-content>\n                            <h5>{{f1.text}}</h5>\n                            <h4>{{f1.date}}</h4>\n                        </mat-card-content>\n                        <button type=\"button\"  class=\"btn btn-primary\">Edit</button>\n                        <button type=\"button\"  class=\"btn btn-primary\">Comment</button>\n                    </mat-card>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_service__ = __webpack_require__("../../../../../src/app/main/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(nav, share, http) {
        this.nav = nav;
        this.share = share;
        this.http = http;
        this.status = '';
        this.followers = [
            { name: 'Lay', status: 'Love Ying', img: 'assets/images/pic3.jpg', display: true },
            { name: 'Simon', status: 'Love Lay', img: 'assets/images/pic4.jpg', display: true },
            { name: 'Sia', status: 'Love Lay too much', img: 'assets/images/pic5.jpg', display: true }
        ];
        this.follower = '';
        this.currentStatus = 'Yixing is my idol!';
        //use p for posting use article
        this.p = {
            _id: '123',
            text: '123',
            img: '',
            comments: [],
            date: '2017-10-07',
            author: 'YING',
            display: true
        };
        this.name = this.share.get_info().name;
    }
    //search the matched post and display them on main page
    MainComponent.prototype.filter = function (event) {
        for (var i = 0; i < this.article.length; i++) {
            if (event.target.value) {
                if (this.article[i]['author'].indexOf(event.target.value) == -1 && this.article[i]['text'].indexOf(event.target.value) == -1) {
                    this.article[i]['display'] = false;
                }
            }
            else {
                this.article[i]['display'] = true;
            }
        }
    };
    MainComponent.prototype.addPost = function () {
        if (this.newPost) {
            this.p.author = this.name;
            this.p.text = this.newPost;
            this.p.date = Date().toLocaleString();
            this.article = this.article.reverse();
            this.article.push(this.p);
            this.article = this.article.reverse();
            this.newPost = '';
        }
    };
    MainComponent.prototype.clear = function () {
        this.newPost = '';
    };
    MainComponent.prototype.delete = function (f) {
        f.display = false;
    };
    MainComponent.prototype.add = function () {
        this.followers.push({ name: this.follower, status: 'always love you', img: 'assets/images/pic3.jpg', display: true });
    };
    MainComponent.prototype.changeStatus = function () {
        this.currentStatus = this.status;
        this.status = '';
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        var articles = this.http.get('assets/data/articles.json').subscribe(function (response) { _this.article = response['articles']; console.log(_this.article); });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__nav_service__["a" /* NavService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nav_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nav_service__["a" /* NavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_service__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_service__["a" /* ShareService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
], MainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavService = (function () {
    function NavService() {
    }
    return NavService;
}());
NavService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NavService);

//# sourceMappingURL=nav.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"profile\">\n        <div class=\"text-center\">\n            <nav>\n                <a routerLink=\"/main\" routerLinkActive=\"active\" class=\"btn btn-primary\">Main</a>\n            </nav>\n            <router-outlet></router-outlet>\n            <hr>\n        </div>\n            <div class=\"col-sm-6\">\n                    <div class=\"card\" style=\"width: 20rem;\">\n                            <img class=\"card-img-top\" src=\"assets/images/pic5.jpg\" alt=\"http://img3.imgtn.bdimg.com/it/u=3490529943,881752914&fm=214&gp=0.jpg\" width=\"300px\" height=\"180px\">\n                            <h5>Change Image:</h5>\n                            <input type=\"file\"/>\n                            <div class=\"card-block\">\n                              <h3 class=\"card-title\">Current Info</h3>\n                            </div>\n                            <ul class=\"list-group\">\n                              <li class=\"list-group-item\">Name:{{userinfo.name}}</li>\n                              <li class=\"list-group-item\">Email:{{userinfo.email}}</li>\n                              <li class=\"list-group-item\">Phone:{{userinfo.phone}}</li>\n                              <li class=\"list-group-item\">Date of Birth:{{userinfo.birth}}</li>\n                              <li class=\"list-group-item\">Zipcode:{{userinfo.zipcode}}</li>\n                              <li class=\"list-group-item\">Password:{{userinfo.password}}</li>\n                            </ul>  \n                    </div>\n            </div>\n            <form (ngSubmit)=\"onSubmit(profile)\" #profile=\"ngForm\" >\n                <div class=\"fomr-group col-sm-6\" id=\"profile\">\n                    <h2>Update Info</h2>\n                    <p>Name: </p>\n                    <input type=\"text\" name=\"name\" placeholder=\"Name\" ngModel #name=\"ngModel\" pattern=\"^([a-zA-Z]{1})([a-zA-Z0-9])*$\" class=\"form-control\" />\n                    <span *ngIf=\"namechange\">Name is changed to : {{userinfo.name}}. </span>\n                    <span *ngIf=\"!name.valid && name.touched \">Input Name is not in correct format.</span>\n                    <p>Email Address: </p>\n                    <input type=\"text\" name=\"email\" placeholder=\"Email address\" ngModel pattern=\"^([a-zA-Z0-9\\_\\-\\.])+@([a-zA-Z0-9\\_\\-])+((\\.[a-zA-Z0-9]{2,4}){1,2})$\" #email=\"ngModel\" class=\"form-control\"/>\n                    <span *ngIf=\"emailchange\">Email is changed to : {{userinfo.email}}.</span>\n                    <span *ngIf=\"!email.valid && email.touched\">Email is not in correct format.</span>\n                    <p>Phone Number: </p>\n                    <input type=\"text\" name=\"phone\" placeholder=\"123-123-1234\" ngModel pattern=\"^\\(?([0-9]{3})\\)?[-]?([0-9]{3})[-]?([0-9]{4})$\" #phone=\"ngModel\" class=\"form-control\" />\n                    <span *ngIf=\"phonechange\">Phone Number is changed to : {{userinfo.phone}}.</span>\n                    <span *ngIf=\"!phone.valid && phone.touched\">Phone Number should be in format as ddd-ddd-dddd.</span>\n                    <p> Zipcode: </p>\n                    <input type=\"text\" name=\"zipcode\" placeholder=\"12345\" ngModel  pattern=\"^([0-9]{5})$\" #zipcode=\"ngModel\" class=\"form-control\"/>\n                    <span *ngIf=\"!zipcode.valid && zipcode.touched\">Zipcode shoud be 5 digit numbers.</span>\n                    <span *ngIf=\"zipcodechange\">Zipcode is changed to :{{userinfo.zipcode}}.</span>\n                    <p>Password: </p>\n                    <input type=\"password\" name=\"password\" placeholder=\"Enter Password\" ngModel #password=\"ngModel\" class=\"form-control\"/>\n                    <p>Password Confirmation: </p>\n                    <input type=\"password\" name=\"passwordConfirm\" placeholder=\"Enter Again\"  ngModel #passwordConfirm=\"ngModel\" class=\"form-control\"/>\n                    <span *ngIf=\"pw\">Password is not equal to password confirmation.</span>\n                    <span *ngIf=\"passwordchange\">Password is changed to :{{userinfo.password}}.</span>\n                    <br/>\n                    <br/>\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    <button type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n                </div>\n            </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(share) {
        this.share = share;
        this.userinfo = {
            name: 'Ying',
            email: 'yg45@rice.edu',
            phone: '123-123-1234',
            birth: '1995-05-10',
            zipcode: '77030',
            password: '12345'
        };
        //use these to mark each info updates or not
        this.namechange = false;
        this.emailchange = false;
        this.phonechange = false;
        this.zipcodechange = false;
        this.passwordchange = false;
        this.pw = false;
        this.userinfo = this.share.get_info(); //get user info from landing page via service
    }
    ProfileComponent.prototype.onSubmit = function (profile) {
        //check every info updates or not and display the remind info
        if (profile.value.password == profile.value.passwordConfirm) {
            if (this.userinfo.name != profile.value.name && profile.value.name) {
                this.userinfo.name = profile.value.name;
                this.namechange = true;
            }
            if (this.userinfo.email != profile.value.email && profile.value.email) {
                this.userinfo.email = profile.value.email;
                this.emailchange = true;
            }
            if (this.userinfo.phone != profile.value.phone && profile.value.phone) {
                this.userinfo.phone = profile.value.phone;
                this.phonechange = true;
            }
            if (this.userinfo.zipcode != profile.value.zipcode && profile.value.zipcode) {
                this.userinfo.zipcode = profile.value.zipcode;
                this.zipcodechange = true;
            }
            if (this.userinfo.password != profile.value.password && profile.value.password) {
                this.userinfo.password = profile.value.password;
                this.passwordchange = true;
            }
            this.profileForm.reset();
        }
        else {
            this.pw = true;
        }
    };
    ProfileComponent.prototype.reset = function () {
        this.profileForm.reset();
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('profile'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__share_service__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__share_service__["a" /* ShareService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/share.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = (function () {
    function ShareService() {
    }
    ShareService.prototype.send_info = function (data) {
        this.data = data;
    };
    ShareService.prototype.get_info = function () {
        return this.data;
    };
    return ShareService;
}());
ShareService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShareService);

//# sourceMappingURL=share.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map