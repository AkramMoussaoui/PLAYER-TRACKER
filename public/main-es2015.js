(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header>\n    <img src=\"../assets/logo.png\" />\n  </header>\n  <section class=\"search\">\n    <h1>Track Player Stats</h1>\n    <form [formGroup]=\"newPlayer\" (ngSubmit)=\"searchPlayer(newPlayer.value)\">\n      <div class=\"form-group\">\n        <label for=\"platform\">Platform</label>\n        <select name=\"platform\" id=\"platform\" formControlName=\"platform\">\n          <option value=\"psn\">Playstation</option>\n          <option value=\"xbl\">Xbox</option>\n          <option value=\"origin\">Origin</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"gamertag\">Gamertag</label>\n        <em *ngIf=\"playerId.invalid && playerId.dirty\">Required</em>\n        <input type=\"text\" name=\"text\" formControlName=\"playerId\" id=\"gamertag\"\n          placeholder=\"Origin ID, Xbox Live gamertag, PSN ID, etc\" />\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"Submit\" class=\"btn\" [disabled]=\"newPlayer.invalid\" />\n      </div>\n    </form>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <div *ngIf=\"loading\">\n    <h3>Loading...</h3>\n  </div>\n\n  <div *ngIf=\"error\">\n    <h1>{{error}}</h1>\n    <button class=\"btn\" [routerLink]=\"['/search']\">Go Back</button>\n  </div>\n\n  <div *ngIf=\"profileData\" class=\"container\">\n    <h1 class=\"gamertag\">\n      <img [src]=\"profileData.platformInfo.avatarUrl\" alt class=\"platform-avatar\" />\n      {{profileData.platformInfo.platformUserId}}\n    </h1>\n    <div class=\"grid\">\n      <div>\n        <img [src]=\"profileData.segments[1].metadata.imageUrl\" alt />\n      </div>\n      <div>\n        <ul>\n          <li>\n            <h4>Selected Legend</h4>\n            <p>{{profileData.metadata.activeLegendName}}</p>\n          </li>\n          <li *ngIf=\"profileData.segments[0].stats.season2Wins\">\n            <h4>Season 2 Wins</h4>\n            <p>\n              {{profileData.segments[0].stats.season2Wins.displayValue}}\n              <span>({{profileData.segments[0].stats.season2Wins.percentile}})</span>\n            </p>\n          </li>\n          <li *ngIf=\"profileData.segments[0].stats.level\">\n            <h4>Apex Level</h4>\n            <p>\n              {{profileData.segments[0].stats.level.displayValue}}\n              <span>({{profileData.segments[0].stats.level.percentile}}%)</span>\n            </p>\n          </li>\n          <li *ngIf=\"profileData.segments[0].stats.kills\">\n            <h4>Lifetime Kills</h4>\n            <p>\n              {{profileData.segments[0].stats.kills.displayValue}}\n              <span>({{profileData.segments[0].stats.kills.percentile}}%)</span>\n            </p>\n          </li>\n          <li *ngIf=\"profileData.segments[0].stats.damage\">\n            <h4>Damage Done</h4>\n            <p>\n              {{profileData.segments[0].stats.damage.displayValue}}\n              <span>({{profileData.segments[0].stats.damage.percentile}}%)</span>\n            </p>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button class=\"btn\" [routerLink]=\"['/search']\">Go Back</button>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/router/router.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/router/router.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  max-width: 960px;\r\n  margin: 1rem auto;\r\n  overflow: auto;\r\n  padding: 0 2rem;\r\n}\r\n\r\n.form-group {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.search {\r\n  background: rgba(0, 0, 0, 0.5);\r\n  border: 4px #fff solid;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\ninput,\r\nselect,\r\ntextarea {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.4rem;\r\n  font-size: 1.2rem;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  padding: 0.4rem 1.3rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-top: 1rem;\r\n}\r\n\r\nimg {\r\n  width: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUNBOzs7RUFHRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcbi5zZWFyY2gge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IDRweCAjZmZmIHNvbGlkO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        document.body.className = "body-bg-image";
        this.platform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.playerId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.newPlayer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            platform: this.platform,
            playerId: this.playerId
        });
    }
    searchPlayer(values) {
        this.router.navigate([`/profile/${values.platform}/${values.playerId}`]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _services_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/routes */ "./src/app/services/routes.ts");
/* harmony import */ var _router_router_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router/router.component */ "./src/app/router/router.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _router_router_component__WEBPACK_IMPORTED_MODULE_10__["RouterComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_services_routes__WEBPACK_IMPORTED_MODULE_9__["routes"])
        ],
        providers: [],
        bootstrap: [_router_router_component__WEBPACK_IMPORTED_MODULE_10__["RouterComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: #fff;\r\n  max-width: 700px;\r\n  margin: 1rem auto;\r\n  padding: 2rem 1.5rem;\r\n  border-radius: 20px;\r\n}\r\nh1.gamertag {\r\n  font-size: 2rem;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  padding: 0.3rem 0.5rem;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n  margin-bottom: 3rem;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\na {\r\n  display: inline-block;\r\n  margin-top: 2rem;\r\n  border: #fff 2px solid;\r\n  padding: 0.5rem 0.8rem;\r\n}\r\na:hover {\r\n  border: #ccc 2px solid;\r\n  color: #ccc;\r\n}\r\n.platform-avatar {\r\n  width: 40px;\r\n  margin-right: 0.7rem;\r\n}\r\nimg {\r\n  width: 100%;\r\n}\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 1rem;\r\n}\r\nli {\r\n  background: rgba(0, 0, 0, 0.6);\r\n  padding: 1rem;\r\n  margin-bottom: 0.7rem;\r\n  border-radius: 10px;\r\n}\r\nli p {\r\n  font-size: 2rem;\r\n}\r\nli:first-child p {\r\n  font-size: 1.5rem;\r\n}\r\nli span {\r\n  font-size: 1rem;\r\n  color: #ccc;\r\n}\r\na {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\n.btn {\r\n  display: inline-block;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  padding: 0.4rem 1.3rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-top: 1rem;\r\n}\r\n@media (max-width: 500px) {\r\n  h1 {\r\n    font-size: 1.5rem;\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n  .platform-avatar {\r\n    display: none;\r\n  }\r\n  .grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  li p {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbmgxLmdhbWVydGFnIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgYm9yZGVyOiAjZmZmIDJweCBzb2xpZDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIGJvcmRlcjogI2NjYyAycHggc29saWQ7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuLnBsYXRmb3JtLWF2YXRhciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbn1cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG59XHJcbmxpIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5saSBwIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxubGk6Zmlyc3QtY2hpbGQgcCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxubGkgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wbGF0Zm9ybS1hdmF0YXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIGxpIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_player_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-data.service */ "./src/app/services/player-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(player, route) {
        this.player = player;
        this.route = route;
        this.loading = true;
    }
    ngOnInit() {
        document.body.className = "body-bg-no-image";
        this.player
            .getPlayerData(this.route.snapshot.params["platform"], this.route.snapshot.params["id"])
            .subscribe(data => {
            this.loading = false;
            this.profileData = data.data;
        }, err => {
            this.loading = false;
            this.error = err.error.message;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_player_data_service__WEBPACK_IMPORTED_MODULE_2__["PlayerDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/router/router.component.css":
/*!*********************************************!*\
  !*** ./src/app/router/router.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlci9yb3V0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/router/router.component.ts":
/*!********************************************!*\
  !*** ./src/app/router/router.component.ts ***!
  \********************************************/
/*! exports provided: RouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterComponent", function() { return RouterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RouterComponent = class RouterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RouterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-router',
        template: __webpack_require__(/*! raw-loader!./router.component.html */ "./node_modules/raw-loader/index.js!./src/app/router/router.component.html"),
        styles: [__webpack_require__(/*! ./router.component.css */ "./src/app/router/router.component.css")]
    })
], RouterComponent);



/***/ }),

/***/ "./src/app/services/player-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/player-data.service.ts ***!
  \*************************************************/
/*! exports provided: PlayerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDataService", function() { return PlayerDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PlayerDataService = class PlayerDataService {
    constructor(http) {
        this.http = http;
        this.url = "api/v1/profile";
    }
    getPlayerData(platform, playerId) {
        return this.http.get(`${this.url}/${platform}/${playerId}`);
    }
};
PlayerDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlayerDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PlayerDataService);



/***/ }),

/***/ "./src/app/services/routes.ts":
/*!************************************!*\
  !*** ./src/app/services/routes.ts ***!
  \************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");


const routes = [
    { path: "profile/:platform/:id", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"] },
    { path: "search", component: _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"] },
    { path: "", pathMatch: "full", redirectTo: "/search" }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\akram\Learning\Angular\Apex Legend\Player Tracker\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map