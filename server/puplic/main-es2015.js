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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_grid_menu_grid_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/grid-menu/grid-menu.component */ "./src/app/components/grid-menu/grid-menu.component.ts");
/* harmony import */ var _components_pages_article_upload_article_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/article-upload/article-upload.component */ "./src/app/components/pages/article-upload/article-upload.component.ts");
/* harmony import */ var _components_pages_article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/article-edit/article-edit.component */ "./src/app/components/pages/article-edit/article-edit.component.ts");
/* harmony import */ var _components_pages_article_delete_article_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/article-delete/article-delete.component */ "./src/app/components/pages/article-delete/article-delete.component.ts");
/* harmony import */ var _components_pages_info_page_upload_info_page_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/info-page-upload/info-page-upload.component */ "./src/app/components/pages/info-page-upload/info-page-upload.component.ts");
/* harmony import */ var _components_pages_info_page_edit_info_page_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/info-page-edit/info-page-edit.component */ "./src/app/components/pages/info-page-edit/info-page-edit.component.ts");
/* harmony import */ var _components_pages_info_page_delete_info_page_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/info-page-delete/info-page-delete.component */ "./src/app/components/pages/info-page-delete/info-page-delete.component.ts");
/* harmony import */ var _components_pages_podcast_upload_podcast_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/podcast-upload/podcast-upload.component */ "./src/app/components/pages/podcast-upload/podcast-upload.component.ts");
/* harmony import */ var _components_pages_podcast_edit_podcast_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/podcast-edit/podcast-edit.component */ "./src/app/components/pages/podcast-edit/podcast-edit.component.ts");
/* harmony import */ var _components_pages_podcast_delete_podcast_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/podcast-delete/podcast-delete.component */ "./src/app/components/pages/podcast-delete/podcast-delete.component.ts");
/* harmony import */ var _components_pages_category_upload_category_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/category-upload/category-upload.component */ "./src/app/components/pages/category-upload/category-upload.component.ts");
/* harmony import */ var _components_pages_category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/category-delete/category-delete.component */ "./src/app/components/pages/category-delete/category-delete.component.ts");
/* harmony import */ var _components_pages_images_collection_images_collection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/images-collection/images-collection.component */ "./src/app/components/pages/images-collection/images-collection.component.ts");
/* harmony import */ var _components_pages_trash_trash_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/trash/trash.component */ "./src/app/components/pages/trash/trash.component.ts");
/* harmony import */ var _components_pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/category-edit/category-edit.component */ "./src/app/components/pages/category-edit/category-edit.component.ts");



















const routes = [
    { path: '', component: _components_grid_menu_grid_menu_component__WEBPACK_IMPORTED_MODULE_2__["GridMenuComponent"] },
    { path: 'articleUpload', component: _components_pages_article_upload_article_upload_component__WEBPACK_IMPORTED_MODULE_3__["ArticleUploadComponent"] },
    { path: 'articleEdit', component: _components_pages_article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_4__["ArticleEditComponent"] },
    { path: 'articleDelete', component: _components_pages_article_delete_article_delete_component__WEBPACK_IMPORTED_MODULE_5__["ArticleDeleteComponent"] },
    { path: 'infoPageUpload', component: _components_pages_info_page_upload_info_page_upload_component__WEBPACK_IMPORTED_MODULE_6__["InfoPageUploadComponent"] },
    { path: 'infoPageEdit', component: _components_pages_info_page_edit_info_page_edit_component__WEBPACK_IMPORTED_MODULE_7__["InfoPageEditComponent"] },
    { path: 'infoPageDelete', component: _components_pages_info_page_delete_info_page_delete_component__WEBPACK_IMPORTED_MODULE_8__["InfoPageDeleteComponent"] },
    { path: 'podcastUpload', component: _components_pages_podcast_upload_podcast_upload_component__WEBPACK_IMPORTED_MODULE_9__["PodcastUploadComponent"] },
    { path: 'podcastEdit', component: _components_pages_podcast_edit_podcast_edit_component__WEBPACK_IMPORTED_MODULE_10__["PodcastEditComponent"] },
    { path: 'podcastDelete', component: _components_pages_podcast_delete_podcast_delete_component__WEBPACK_IMPORTED_MODULE_11__["PodcastDeleteComponent"] },
    { path: 'categoryUpload', component: _components_pages_category_upload_category_upload_component__WEBPACK_IMPORTED_MODULE_12__["CategoryUploadComponent"] },
    { path: 'categoryEdit', component: _components_pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_16__["CategoryEditComponent"] },
    { path: 'categoryDelete', component: _components_pages_category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_13__["CategoryDeleteComponent"] },
    { path: 'imagesCollection', component: _components_pages_images_collection_images_collection_component__WEBPACK_IMPORTED_MODULE_14__["ImagesCollectionComponent"] },
    { path: 'trash', component: _components_pages_trash_trash_component__WEBPACK_IMPORTED_MODULE_15__["TrashComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");




class AppComponent {
    constructor() {
        this.title = 'angularuploadpanel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-container");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_grid_menu_grid_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/grid-menu/grid-menu.component */ "./src/app/components/grid-menu/grid-menu.component.ts");
/* harmony import */ var _components_pages_article_upload_article_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/article-upload/article-upload.component */ "./src/app/components/pages/article-upload/article-upload.component.ts");
/* harmony import */ var _components_pages_podcast_upload_podcast_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/podcast-upload/podcast-upload.component */ "./src/app/components/pages/podcast-upload/podcast-upload.component.ts");
/* harmony import */ var _components_pages_article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/article-edit/article-edit.component */ "./src/app/components/pages/article-edit/article-edit.component.ts");
/* harmony import */ var _components_pages_article_delete_article_delete_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/article-delete/article-delete.component */ "./src/app/components/pages/article-delete/article-delete.component.ts");
/* harmony import */ var _components_pages_info_page_upload_info_page_upload_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/info-page-upload/info-page-upload.component */ "./src/app/components/pages/info-page-upload/info-page-upload.component.ts");
/* harmony import */ var _components_pages_info_page_edit_info_page_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/info-page-edit/info-page-edit.component */ "./src/app/components/pages/info-page-edit/info-page-edit.component.ts");
/* harmony import */ var _components_pages_info_page_delete_info_page_delete_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pages/info-page-delete/info-page-delete.component */ "./src/app/components/pages/info-page-delete/info-page-delete.component.ts");
/* harmony import */ var _components_pages_podcast_edit_podcast_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pages/podcast-edit/podcast-edit.component */ "./src/app/components/pages/podcast-edit/podcast-edit.component.ts");
/* harmony import */ var _components_pages_podcast_delete_podcast_delete_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pages/podcast-delete/podcast-delete.component */ "./src/app/components/pages/podcast-delete/podcast-delete.component.ts");
/* harmony import */ var _components_pages_category_upload_category_upload_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/pages/category-upload/category-upload.component */ "./src/app/components/pages/category-upload/category-upload.component.ts");
/* harmony import */ var _components_pages_category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/pages/category-delete/category-delete.component */ "./src/app/components/pages/category-delete/category-delete.component.ts");
/* harmony import */ var _components_pages_images_collection_images_collection_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/pages/images-collection/images-collection.component */ "./src/app/components/pages/images-collection/images-collection.component.ts");
/* harmony import */ var _components_pages_images_upload_images_upload_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/pages/images-upload/images-upload.component */ "./src/app/components/pages/images-upload/images-upload.component.ts");
/* harmony import */ var _components_pages_trash_trash_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/pages/trash/trash.component */ "./src/app/components/pages/trash/trash.component.ts");
/* harmony import */ var _components_pages_article_edit_item_article_edit_item_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/pages/article-edit-item/article-edit-item.component */ "./src/app/components/pages/article-edit-item/article-edit-item.component.ts");
/* harmony import */ var _components_pages_info_page_edit_item_info_page_edit_item_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/pages/info-page-edit-item/info-page-edit-item.component */ "./src/app/components/pages/info-page-edit-item/info-page-edit-item.component.ts");
/* harmony import */ var _components_pages_podcast_edit_item_podcast_edit_item_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/pages/podcast-edit-item/podcast-edit-item.component */ "./src/app/components/pages/podcast-edit-item/podcast-edit-item.component.ts");
/* harmony import */ var _components_pages_article_delete_item_article_delete_item_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/pages/article-delete-item/article-delete-item.component */ "./src/app/components/pages/article-delete-item/article-delete-item.component.ts");
/* harmony import */ var _components_pages_info_page_delete_item_info_page_delete_item_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/pages/info-page-delete-item/info-page-delete-item.component */ "./src/app/components/pages/info-page-delete-item/info-page-delete-item.component.ts");
/* harmony import */ var _components_pages_podcast_delete_item_podcast_delete_item_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/pages/podcast-delete-item/podcast-delete-item.component */ "./src/app/components/pages/podcast-delete-item/podcast-delete-item.component.ts");
/* harmony import */ var _components_pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/pages/category-edit/category-edit.component */ "./src/app/components/pages/category-edit/category-edit.component.ts");
/* harmony import */ var _components_pages_category_edit_item_category_edit_item_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/pages/category-edit-item/category-edit-item.component */ "./src/app/components/pages/category-edit-item/category-edit-item.component.ts");
/* harmony import */ var _components_pages_category_delete_item_category_delete_item_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/pages/category-delete-item/category-delete-item.component */ "./src/app/components/pages/category-delete-item/category-delete-item.component.ts");
/* harmony import */ var _components_pages_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/pages/image-item/image-item.component */ "./src/app/components/pages/image-item/image-item.component.ts");
/* harmony import */ var _components_pages_trash_item_trash_item_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/pages/trash-item/trash-item.component */ "./src/app/components/pages/trash-item/trash-item.component.ts");















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"],
        _components_grid_menu_grid_menu_component__WEBPACK_IMPORTED_MODULE_20__["GridMenuComponent"],
        _components_pages_article_upload_article_upload_component__WEBPACK_IMPORTED_MODULE_21__["ArticleUploadComponent"],
        _components_pages_podcast_upload_podcast_upload_component__WEBPACK_IMPORTED_MODULE_22__["PodcastUploadComponent"],
        _components_pages_article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_23__["ArticleEditComponent"],
        _components_pages_article_delete_article_delete_component__WEBPACK_IMPORTED_MODULE_24__["ArticleDeleteComponent"],
        _components_pages_info_page_upload_info_page_upload_component__WEBPACK_IMPORTED_MODULE_25__["InfoPageUploadComponent"],
        _components_pages_info_page_edit_info_page_edit_component__WEBPACK_IMPORTED_MODULE_26__["InfoPageEditComponent"],
        _components_pages_info_page_delete_info_page_delete_component__WEBPACK_IMPORTED_MODULE_27__["InfoPageDeleteComponent"],
        _components_pages_podcast_edit_podcast_edit_component__WEBPACK_IMPORTED_MODULE_28__["PodcastEditComponent"],
        _components_pages_podcast_delete_podcast_delete_component__WEBPACK_IMPORTED_MODULE_29__["PodcastDeleteComponent"],
        _components_pages_category_upload_category_upload_component__WEBPACK_IMPORTED_MODULE_30__["CategoryUploadComponent"],
        _components_pages_category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_31__["CategoryDeleteComponent"],
        _components_pages_images_collection_images_collection_component__WEBPACK_IMPORTED_MODULE_32__["ImagesCollectionComponent"],
        _components_pages_images_upload_images_upload_component__WEBPACK_IMPORTED_MODULE_33__["ImagesUploadComponent"],
        _components_pages_trash_trash_component__WEBPACK_IMPORTED_MODULE_34__["TrashComponent"],
        _components_pages_article_edit_item_article_edit_item_component__WEBPACK_IMPORTED_MODULE_35__["ArticleEditItemComponent"],
        _components_pages_info_page_edit_item_info_page_edit_item_component__WEBPACK_IMPORTED_MODULE_36__["InfoPageEditItemComponent"],
        _components_pages_podcast_edit_item_podcast_edit_item_component__WEBPACK_IMPORTED_MODULE_37__["PodcastEditItemComponent"],
        _components_pages_article_delete_item_article_delete_item_component__WEBPACK_IMPORTED_MODULE_38__["ArticleDeleteItemComponent"],
        _components_pages_info_page_delete_item_info_page_delete_item_component__WEBPACK_IMPORTED_MODULE_39__["InfoPageDeleteItemComponent"],
        _components_pages_podcast_delete_item_podcast_delete_item_component__WEBPACK_IMPORTED_MODULE_40__["PodcastDeleteItemComponent"],
        _components_pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_41__["CategoryEditComponent"],
        _components_pages_category_edit_item_category_edit_item_component__WEBPACK_IMPORTED_MODULE_42__["CategoryEditItemComponent"],
        _components_pages_category_delete_item_category_delete_item_component__WEBPACK_IMPORTED_MODULE_43__["CategoryDeleteItemComponent"],
        _components_pages_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_44__["ImageItemComponent"],
        _components_pages_trash_item_trash_item_component__WEBPACK_IMPORTED_MODULE_45__["TrashItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"],
                    _components_grid_menu_grid_menu_component__WEBPACK_IMPORTED_MODULE_20__["GridMenuComponent"],
                    _components_pages_article_upload_article_upload_component__WEBPACK_IMPORTED_MODULE_21__["ArticleUploadComponent"],
                    _components_pages_podcast_upload_podcast_upload_component__WEBPACK_IMPORTED_MODULE_22__["PodcastUploadComponent"],
                    _components_pages_article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_23__["ArticleEditComponent"],
                    _components_pages_article_delete_article_delete_component__WEBPACK_IMPORTED_MODULE_24__["ArticleDeleteComponent"],
                    _components_pages_info_page_upload_info_page_upload_component__WEBPACK_IMPORTED_MODULE_25__["InfoPageUploadComponent"],
                    _components_pages_info_page_edit_info_page_edit_component__WEBPACK_IMPORTED_MODULE_26__["InfoPageEditComponent"],
                    _components_pages_info_page_delete_info_page_delete_component__WEBPACK_IMPORTED_MODULE_27__["InfoPageDeleteComponent"],
                    _components_pages_podcast_edit_podcast_edit_component__WEBPACK_IMPORTED_MODULE_28__["PodcastEditComponent"],
                    _components_pages_podcast_delete_podcast_delete_component__WEBPACK_IMPORTED_MODULE_29__["PodcastDeleteComponent"],
                    _components_pages_category_upload_category_upload_component__WEBPACK_IMPORTED_MODULE_30__["CategoryUploadComponent"],
                    _components_pages_category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_31__["CategoryDeleteComponent"],
                    _components_pages_images_collection_images_collection_component__WEBPACK_IMPORTED_MODULE_32__["ImagesCollectionComponent"],
                    _components_pages_images_upload_images_upload_component__WEBPACK_IMPORTED_MODULE_33__["ImagesUploadComponent"],
                    _components_pages_trash_trash_component__WEBPACK_IMPORTED_MODULE_34__["TrashComponent"],
                    _components_pages_article_edit_item_article_edit_item_component__WEBPACK_IMPORTED_MODULE_35__["ArticleEditItemComponent"],
                    _components_pages_info_page_edit_item_info_page_edit_item_component__WEBPACK_IMPORTED_MODULE_36__["InfoPageEditItemComponent"],
                    _components_pages_podcast_edit_item_podcast_edit_item_component__WEBPACK_IMPORTED_MODULE_37__["PodcastEditItemComponent"],
                    _components_pages_article_delete_item_article_delete_item_component__WEBPACK_IMPORTED_MODULE_38__["ArticleDeleteItemComponent"],
                    _components_pages_info_page_delete_item_info_page_delete_item_component__WEBPACK_IMPORTED_MODULE_39__["InfoPageDeleteItemComponent"],
                    _components_pages_podcast_delete_item_podcast_delete_item_component__WEBPACK_IMPORTED_MODULE_40__["PodcastDeleteItemComponent"],
                    _components_pages_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_41__["CategoryEditComponent"],
                    _components_pages_category_edit_item_category_edit_item_component__WEBPACK_IMPORTED_MODULE_42__["CategoryEditItemComponent"],
                    _components_pages_category_delete_item_category_delete_item_component__WEBPACK_IMPORTED_MODULE_43__["CategoryDeleteItemComponent"],
                    _components_pages_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_44__["ImageItemComponent"],
                    _components_pages_trash_item_trash_item_component__WEBPACK_IMPORTED_MODULE_45__["TrashItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 1, vars: 0, template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/grid-menu/grid-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-menu/grid-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: GridMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMenuComponent", function() { return GridMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class GridMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
GridMenuComponent.ɵfac = function GridMenuComponent_Factory(t) { return new (t || GridMenuComponent)(); };
GridMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridMenuComponent, selectors: [["app-grid-menu"]], decls: 197, vars: 0, consts: [["id", "cardContainer"], [1, "cardItem"], ["aria-hidden", "true", "aria-label", "Example article icon"], ["mat-raised-button", "", "routerLink", "/articleUpload"], ["mat-raised-button", "", "routerLink", "/articleEdit"], ["mat-raised-button", "", "routerLink", "/articleDelete"], ["aria-hidden", "true", "aria-label", "Example info icon"], ["mat-raised-button", "", "routerLink", "/infoPageUpload"], ["mat-raised-button", "", "routerLink", "/infoPageEdit"], ["mat-raised-button", "", "routerLink", "/infoPageDelete"], ["aria-hidden", "true", "aria-label", "Example radio icon"], ["mat-raised-button", "", "routerLink", "/podcastUpload"], ["mat-raised-button", "", "routerLink", "/podcastEdit"], ["mat-raised-button", "", "routerLink", "/podcastDelete"], ["aria-hidden", "true", "aria-label", "Example category icon"], ["mat-raised-button", "", "routerLink", "/categoryUpload"], ["mat-raised-button", "", "routerLink", "/categoryEdit"], ["mat-raised-button", "", "routerLink", "/categoryDelete"], ["aria-hidden", "true", "aria-label", "Example collections icon"], ["mat-raised-button", "", "routerLink", "/imagesCollection"], ["aria-hidden", "true", "aria-label", "Example delete icon"], ["mat-raised-button", "", "routerLink", "/trash"]], template: function GridMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u044B\u0447\u043D\u0443\u044E \u0441\u0442\u0430\u0442\u044C\u044E. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432 \u0441\u0442\u0430\u0442\u044C\u0435 \u0431\u044B\u043B\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0442\u0430\u0442\u044C\u044E \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0421\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0431\u044B\u0447\u043D\u0443\u044E \u0441\u0442\u0430\u0442\u044C\u044E. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432 \u0441\u0442\u0430\u0442\u044C\u0435 \u0431\u044B\u043B\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0442\u0430\u0442\u044C\u044E \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0421\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u044B\u0447\u043D\u0443\u044E \u0441\u0442\u0430\u0442\u044C\u044E. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 ID \u0441\u0442\u0430\u0442\u044C\u0438, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0438 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0451 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B. \u0414\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443. \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B\u0435 \u0432 \u0441\u0442\u0430\u0442\u044C\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0431\u044B\u043B\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0431\u044B\u043B\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0435\u0440\u0435\u0434 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0451 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B. \u0414\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443. \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B\u0435 \u0432 \u0441\u0442\u0430\u0442\u044C\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u041F\u043E\u0434\u043A\u0430\u0441\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u043A\u0430\u0441\u0442. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u043A\u043E\u0434 \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432 \u043A\u043E\u0434\u0435 \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u0431\u044B\u043B\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u043E\u0434\u043A\u0430\u0441\u0442 \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u041F\u043E\u0434\u043A\u0430\u0441\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u043A\u043E\u0434 \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432 \u043A\u043E\u0434\u0435 \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u0431\u044B\u043B\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u043E\u0434\u043A\u0430\u0441\u0442 \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u041F\u043E\u0434\u043A\u0430\u0441\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 ID \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B. \u0414\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u041E\u0431\u044B\u0447\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442\u0435 \u0431\u044B\u043B\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B \u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043E \u0441\u043D\u043E\u0432\u0430 \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u041E\u0431\u044B\u0447\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0438 \u0432\u0441\u0435\u0445 \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0438\u0445\u0441\u044F \u043A \u043D\u0438\u043C \u0441\u0442\u0430\u0442\u0435\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u041E\u0431\u044B\u0447\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0438 \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0432 \u043D\u0451\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0438 \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A \u043D\u0435\u043C\u0443 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u043F\u0435\u0440\u0435\u0434 \u0435\u0433\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C. \u0412\u0441\u0435 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u044B \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \u0441\u0442\u0430\u0442\u044C\u0438. \u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0413\u041B\u0410\u0412\u041D\u0410\u042F \u0438 \u0421\u0422\u0410\u0422\u042C\u0418 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442\u0435\u0439 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " \u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432\u0441\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u0418\u0445 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0437\u0434\u0435\u0441\u044C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u041E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u043B\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0435\u0439, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0438 \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0430\u043D\u043D\u0435\u0435 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0445 \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u041F\u0415\u0420\u0415\u0419\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".cardItem[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    background-color: #f0f0f0;\r\n    margin-bottom: 45px;\r\n}\r\n\r\n.cardItem[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n#cardContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    margin: auto;\r\n    width: 80%;\r\n    padding-top: 25px;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n    color: #212121;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    vertical-align: bottom;\r\n    font-size: 20px;\r\n    width: 24px;\r\n    height: 20px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkLW1lbnUvZ3JpZC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkLW1lbnUvZ3JpZC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZEl0ZW17XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbi5jYXJkSXRlbSBtYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNjYXJkQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxubWF0LWNhcmQtc3VidGl0bGV7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-menu',
                templateUrl: './grid-menu.component.html',
                styleUrls: ['./grid-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [["id", "topHeader"], ["id", "secondLine"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u041B\u0423\u0411 \u041A\u0410\u0427\u0415\u041B\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u0430\u043D\u0435\u043B\u044C \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u041A\u043E\u043D\u0442\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"]], styles: ["#topHeader[_ngcontent-%COMP%]{\r\n    color: #f0f0f0;\r\n}\r\n\r\n#secondLine[_ngcontent-%COMP%]{\r\n    color: #c2c2c2;\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%]{\r\n    background-color: #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jdG9wSGVhZGVye1xyXG4gICAgY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuXHJcbiNzZWNvbmRMaW5le1xyXG4gICAgY29sb3I6ICNjMmMyYzI7XHJcbn1cclxuXHJcbm1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/article-delete-item/article-delete-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/article-delete-item/article-delete-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ArticleDeleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDeleteItemComponent", function() { return ArticleDeleteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class ArticleDeleteItemComponent {
    constructor() {
        this.deleteArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDelete() {
        this.deleteArticle.emit(this.article);
    }
}
ArticleDeleteItemComponent.ɵfac = function ArticleDeleteItemComponent_Factory(t) { return new (t || ArticleDeleteItemComponent)(); };
ArticleDeleteItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleDeleteItemComponent, selectors: [["app-article-delete-item"]], inputs: { article: "article" }, outputs: { deleteArticle: "deleteArticle" }, decls: 12, vars: 3, consts: [[1, "cardItem"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ArticleDeleteItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDeleteItemComponent_Template_button_click_10_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0423\u0414\u0410\u041B\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.subText, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin: auto;\r\n    margin-bottom: 25px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLWRlbGV0ZS1pdGVtL2FydGljbGUtZGVsZXRlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLWRlbGV0ZS1pdGVtL2FydGljbGUtZGVsZXRlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDc3LjYyNSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleDeleteItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-delete-item',
                templateUrl: './article-delete-item.component.html',
                styleUrls: ['./article-delete-item.component.css']
            }]
    }], function () { return []; }, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/article-delete/article-delete.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/article-delete/article-delete.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticleDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDeleteComponent", function() { return ArticleDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_delete_item_article_delete_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article-delete-item/article-delete-item.component */ "./src/app/components/pages/article-delete-item/article-delete-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function ArticleDeleteComponent_app_article_delete_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-article-delete-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteArticle", function ArticleDeleteComponent_app_article_delete_item_1_Template_app_article_delete_item_deleteArticle_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteArticle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", article_r2);
} }
function ArticleDeleteComponent_mat_progress_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 5);
} }
class ArticleDeleteComponent {
    constructor(categoriesService, articleService, trashService) {
        this.categoriesService = categoriesService;
        this.articleService = articleService;
        this.trashService = trashService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.articles = new Array();
        this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
            categories = categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
            categories.forEach(category => {
                this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
                    articles.forEach(article => {
                        this.articles.push(article);
                    });
                });
            });
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
    deleteArticle(article) {
        this.articles = this.articles.filter(a => a._id != article._id);
        const trashArticle = {
            title: article.title,
            subText: article.subText,
            content: article.content,
            previewImage: article.previewImage,
            fullImage: article.fullImage,
            categoriesId: article.categoriesId,
            articleType: 'category',
            oldId: article._id
        };
        this.trashService.addTrash(trashArticle).subscribe();
        this.articleService.deleteArticleById(article._id).subscribe();
    }
}
ArticleDeleteComponent.ɵfac = function ArticleDeleteComponent_Factory(t) { return new (t || ArticleDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__["TrashService"])); };
ArticleDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleDeleteComponent, selectors: [["app-article-delete"]], decls: 4, vars: 2, consts: [["id", "deleteItemsContainer"], [3, "article", "deleteArticle", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [3, "article", "deleteArticle"], ["color", "accent", "mode", "indeterminate"]], template: function ArticleDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleDeleteComponent_app_article_delete_item_1_Template, 1, 1, "app-article-delete-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleDeleteComponent_mat_progress_spinner_3_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _article_delete_item_article_delete_item_component__WEBPACK_IMPORTED_MODULE_5__["ArticleDeleteItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["#deleteItemsContainer[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLWRlbGV0ZS9hcnRpY2xlLWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2FydGljbGUtZGVsZXRlL2FydGljbGUtZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVsZXRlSXRlbXNDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4jc3Bpbm5lckNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-delete',
                templateUrl: './article-delete.component.html',
                styleUrls: ['./article-delete.component.css']
            }]
    }], function () { return [{ type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] }, { type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }, { type: src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__["TrashService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/article-edit-item/article-edit-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/article-edit-item/article-edit-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticleEditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEditItemComponent", function() { return ArticleEditItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function ArticleEditItemComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r2.categoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.title, " ");
} }
function ArticleEditItemComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ArticleEditItemComponent {
    constructor(articleService) {
        this.articleService = articleService;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.subTextControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.previewImageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.fullImageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoriesIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
        this.titleControl.setValue(this.article.title);
        this.subTextControl.setValue(this.article.subText);
        this.contentControl.setValue(this.article.content);
        this.previewImageControl.setValue(this.article.previewImage.split("/").reverse()[0]);
        this.fullImageControl.setValue(this.article.fullImage.split("/").reverse()[0]);
        this.categoriesIdControl.setValue(this.article.categoriesId);
    }
    onSubmit() {
        this.article.title = this.titleControl.value;
        this.article.subText = this.subTextControl.value;
        this.article.content = this.contentControl.value;
        this.article.previewImage = `api/images/image/${this.previewImageControl.value}`;
        this.article.fullImage = `api/images/image/${this.fullImageControl.value}`;
        this.article.categoriesId = this.categoriesIdControl.value;
        console.log("there");
        this.articleService.updateArticle(this.article).subscribe();
    }
}
ArticleEditItemComponent.ɵfac = function ArticleEditItemComponent_Factory(t) { return new (t || ArticleEditItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"])); };
ArticleEditItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleEditItemComponent, selectors: [["app-article-edit-item"]], inputs: { categories: "categories", article: "article" }, decls: 31, vars: 8, consts: [[1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u043C \u043D\u0430 \u043F\u0440\u0435\u0432\u044C\u044E", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A\u043E\u043D\u0442\u0435\u043D\u0442...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 2hr3rh13r3rh1ouhro23.jpeg", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 esgwfuoewugf23i42gui34.jpeg", "required", "", 3, "formControl"], ["appearance", "fill", 1, "inputField"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"], [3, "value"]], template: function ArticleEditItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArticleEditItemComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u0442\u0435\u043A\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0418\u043C\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0418\u043C\u044F \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ArticleEditItemComponent_mat_option_27_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ArticleEditItemComponent_mat_error_28_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.subTextControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.contentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.previewImageControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.fullImageControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoriesIdControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoriesIdControl.hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: [".articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLWVkaXQtaXRlbS9hcnRpY2xlLWVkaXQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS1lZGl0LWl0ZW0vYXJ0aWNsZS1lZGl0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlRm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnB1dEZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleEditItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-edit-item',
                templateUrl: './article-edit-item.component.html',
                styleUrls: ['./article-edit-item.component.css']
            }]
    }], function () { return [{ type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }]; }, { categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/article-edit/article-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/article-edit/article-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArticleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEditComponent", function() { return ArticleEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_edit_item_article_edit_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article-edit-item/article-edit-item.component */ "./src/app/components/pages/article-edit-item/article-edit-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function ArticleEditComponent_mat_expansion_panel_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article-edit-item", 6);
} if (rf & 2) {
    const article_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r3.categories)("article", article_r2);
} }
function ArticleEditComponent_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleEditComponent_mat_expansion_panel_2_ng_template_6_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r2._id, " ");
} }
function ArticleEditComponent_mat_progress_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 7);
} }
class ArticleEditComponent {
    constructor(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.articles = new Array();
        this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
            this.categories = categories;
            this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
            this.categories.forEach(category => {
                this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
                    articles.forEach(article => {
                        this.articles.push(article);
                    });
                });
            });
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
}
ArticleEditComponent.ɵfac = function ArticleEditComponent_Factory(t) { return new (t || ArticleEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"])); };
ArticleEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleEditComponent, selectors: [["app-article-edit"]], decls: 5, vars: 2, consts: [["id", "accordionContainer"], ["class", "accordionItem", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [1, "accordionItem"], ["matExpansionPanelContent", ""], [3, "categories", "article"], ["color", "accent", "mode", "indeterminate"]], template: function ArticleEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleEditComponent_mat_expansion_panel_2_Template, 7, 2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleEditComponent_mat_progress_spinner_4_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelContent"], _article_edit_item_article_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["ArticleEditItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["#accordionContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.accordionItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n    text-align: right;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWNjb3JkaW9uQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmFjY29yZGlvbkl0ZW17XHJcbiAgICB3aWR0aDogNzcuNjI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNzcGlubmVyQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-edit',
                templateUrl: './article-edit.component.html',
                styleUrls: ['./article-edit.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"] }, { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/article-upload/article-upload.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/article-upload/article-upload.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticleUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleUploadComponent", function() { return ArticleUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function ArticleUploadComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r2.categoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.title, " ");
} }
function ArticleUploadComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ArticleUploadComponent {
    constructor(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.subTextControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.previewImageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.fullImageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoriesIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
        this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
            this.categories = categories;
            this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
        });
    }
    onSubmit() {
        const article = {
            title: this.titleControl.value,
            subText: this.subTextControl.value,
            content: this.contentControl.value,
            previewImage: `api/images/image/${this.previewImageControl.value}`,
            fullImage: `api/images/image/${this.fullImageControl.value}`,
            categoriesId: this.categoriesIdControl.value
        };
        console.log("there");
        this.articleService.addArticle(article).subscribe();
    }
}
ArticleUploadComponent.ɵfac = function ArticleUploadComponent_Factory(t) { return new (t || ArticleUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"])); };
ArticleUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleUploadComponent, selectors: [["app-article-upload"]], decls: 43, vars: 8, consts: [["id", "cardContainer"], [1, "cardItem"], ["aria-hidden", "true", "aria-label", "Example article icon"], [1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u043C \u043D\u0430 \u043F\u0440\u0435\u0432\u044C\u044E", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A\u043E\u043D\u0442\u0435\u043D\u0442...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 2hr3rh13r3rh1ouhro23.jpeg", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 esgwfuoewugf23i42gui34.jpeg", "required", "", 3, "formControl"], ["appearance", "fill", 1, "inputField"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"], [3, "value"]], template: function ArticleUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0432 HTML. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArticleUploadComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u0442\u0435\u043A\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0418\u043C\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0418\u043C\u044F \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ArticleUploadComponent_mat_option_39_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ArticleUploadComponent_mat_error_40_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.subTextControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.contentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.previewImageControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.fullImageControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoriesIdControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoriesIdControl.hasError("required"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["#cardContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.cardItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n    color: #212121;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    vertical-align: bottom;\r\n    font-size: 20px;\r\n    width: 24px;\r\n    height: 20px;\r\n }\r\n\r\n.articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLXVwbG9hZC9hcnRpY2xlLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlLXVwbG9hZC9hcnRpY2xlLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmRDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZEl0ZW17XHJcbiAgICB3aWR0aDogNzcuNjI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG5tYXQtY2FyZC1zdWJ0aXRsZXtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gfVxyXG5cclxuLmFydGljbGVGb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmlucHV0RmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-upload',
                templateUrl: './article-upload.component.html',
                styleUrls: ['./article-upload.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }, { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/category-delete-item/category-delete-item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/category-delete-item/category-delete-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoryDeleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDeleteItemComponent", function() { return CategoryDeleteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class CategoryDeleteItemComponent {
    constructor() {
        this.deleteCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDelete() {
        this.deleteCategory.emit(this.category);
    }
}
CategoryDeleteItemComponent.ɵfac = function CategoryDeleteItemComponent_Factory(t) { return new (t || CategoryDeleteItemComponent)(); };
CategoryDeleteItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryDeleteItemComponent, selectors: [["app-category-delete-item"]], inputs: { category: "category" }, outputs: { deleteCategory: "deleteCategory" }, decls: 12, vars: 3, consts: [[1, "cardItem"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function CategoryDeleteItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDeleteItemComponent_Template_button_click_10_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0423\u0414\u0410\u041B\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.categoryId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.category._id, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin: auto;\r\n    margin-bottom: 25px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXRlZ29yeS1kZWxldGUtaXRlbS9jYXRlZ29yeS1kZWxldGUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NhdGVnb3J5LWRlbGV0ZS1pdGVtL2NhdGVnb3J5LWRlbGV0ZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIHdpZHRoOiA3Ny42MjUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9uc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryDeleteItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-delete-item',
                templateUrl: './category-delete-item.component.html',
                styleUrls: ['./category-delete-item.component.css']
            }]
    }], function () { return []; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/category-delete/category-delete.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/category-delete/category-delete.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoryDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDeleteComponent", function() { return CategoryDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _category_delete_item_category_delete_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category-delete-item/category-delete-item.component */ "./src/app/components/pages/category-delete-item/category-delete-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function CategoryDeleteComponent_app_category_delete_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-category-delete-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCategory", function CategoryDeleteComponent_app_category_delete_item_1_Template_app_category_delete_item_deleteCategory_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteCategory($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r2);
} }
function CategoryDeleteComponent_mat_progress_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 5);
} }
class CategoryDeleteComponent {
    constructor(categoriesService, articleService, trashService) {
        this.categoriesService = categoriesService;
        this.articleService = articleService;
        this.trashService = trashService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
            this.categories = categories;
            this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
    deleteCategory(category) {
        this.categories = this.categories.filter(c => c._id != category._id);
        this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
            articles.forEach(article => {
                let trashArticle = {
                    title: article.title,
                    subText: article.subText,
                    content: article.content,
                    previewImage: article.previewImage,
                    fullImage: article.fullImage,
                    categoriesId: article.categoriesId,
                    articleType: 'category',
                    oldId: article._id
                };
                this.trashService.addTrash(trashArticle).subscribe();
                this.articleService.deleteArticleById(article._id).subscribe();
            });
        });
        this.categoriesService.deleteCategory(category._id).subscribe();
    }
}
CategoryDeleteComponent.ɵfac = function CategoryDeleteComponent_Factory(t) { return new (t || CategoryDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__["TrashService"])); };
CategoryDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryDeleteComponent, selectors: [["app-category-delete"]], decls: 4, vars: 2, consts: [["id", "deleteItemsContainer"], [3, "category", "deleteCategory", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [3, "category", "deleteCategory"], ["color", "accent", "mode", "indeterminate"]], template: function CategoryDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryDeleteComponent_app_category_delete_item_1_Template, 1, 1, "app-category-delete-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryDeleteComponent_mat_progress_spinner_3_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _category_delete_item_category_delete_item_component__WEBPACK_IMPORTED_MODULE_5__["CategoryDeleteItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["#deleteItemsContainer[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXRlZ29yeS1kZWxldGUvY2F0ZWdvcnktZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY2F0ZWdvcnktZGVsZXRlL2NhdGVnb3J5LWRlbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbGV0ZUl0ZW1zQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuI3NwaW5uZXJDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-delete',
                templateUrl: './category-delete.component.html',
                styleUrls: ['./category-delete.component.css']
            }]
    }], function () { return [{ type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] }, { type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }, { type: src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__["TrashService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/category-edit-item/category-edit-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/category-edit-item/category-edit-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoryEditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditItemComponent", function() { return CategoryEditItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class CategoryEditItemComponent {
    constructor(articleService) {
        this.articleService = articleService;
        this.categoriesIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoryTitleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.editCategoryParameters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.categoryTitleControl.setValue(this.category.title);
        this.categoriesIdControl.setValue(this.category.categoryId);
    }
    onSubmit() {
        this.articleService.getArticleByCategoriesId(this.category.categoryId).subscribe(articles => {
            articles.forEach(article => {
                article.categoriesId = this.categoriesIdControl.value;
                this.articleService.updateArticle(article).subscribe();
            });
            this.category.title = this.categoryTitleControl.value;
            this.category.categoryId = this.categoriesIdControl.value;
            this.editCategoryParameters.emit(this.category);
        });
    }
}
CategoryEditItemComponent.ɵfac = function CategoryEditItemComponent_Factory(t) { return new (t || CategoryEditItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"])); };
CategoryEditItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryEditItemComponent, selectors: [["app-category-edit-item"]], inputs: { category: "category" }, outputs: { editCategoryParameters: "editCategoryParameters" }, decls: 11, vars: 2, consts: [[1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u041D\u041E\u0412\u041E\u0415", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 newInfoPage", "required", "", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"]], template: function CategoryEditItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CategoryEditItemComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u043C\u0438 \u0431\u0443\u043A\u0432\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 camelCase, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0441\u044B\u043B\u043A\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoryTitleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoriesIdControl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXRlZ29yeS1lZGl0LWl0ZW0vY2F0ZWdvcnktZWRpdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXRlZ29yeS1lZGl0LWl0ZW0vY2F0ZWdvcnktZWRpdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZUZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaW5wdXRGaWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryEditItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-edit-item',
                templateUrl: './category-edit-item.component.html',
                styleUrls: ['./category-edit-item.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }]; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editCategoryParameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/category-edit/category-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/category-edit/category-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _category_edit_item_category_edit_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category-edit-item/category-edit-item.component */ "./src/app/components/pages/category-edit-item/category-edit-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function CategoryEditComponent_mat_expansion_panel_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-category-edit-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editCategoryParameters", function CategoryEditComponent_mat_expansion_panel_2_ng_template_6_Template_app_category_edit_item_editCategoryParameters_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.editCategoryParameters($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r2);
} }
function CategoryEditComponent_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryEditComponent_mat_expansion_panel_2_ng_template_6_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.categoryId, " ");
} }
function CategoryEditComponent_mat_progress_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 7);
} }
class CategoryEditComponent {
    constructor(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
            this.categories = categories;
            this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
    editCategoryParameters(category) {
        this.categoriesService.updateCategory(category).subscribe();
        const index = this.categories.findIndex(c => c._id == category._id);
        this.categories[index] = category;
    }
}
CategoryEditComponent.ɵfac = function CategoryEditComponent_Factory(t) { return new (t || CategoryEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"])); };
CategoryEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryEditComponent, selectors: [["app-category-edit"]], decls: 5, vars: 2, consts: [["id", "accordionContainer"], ["class", "accordionItem", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [1, "accordionItem"], ["matExpansionPanelContent", ""], [3, "category", "editCategoryParameters"], ["color", "accent", "mode", "indeterminate"]], template: function CategoryEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryEditComponent_mat_expansion_panel_2_Template, 7, 2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryEditComponent_mat_progress_spinner_4_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelContent"], _category_edit_item_category_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["CategoryEditItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["#accordionContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.accordionItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n    text-align: right;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXRlZ29yeS1lZGl0L2NhdGVnb3J5LWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NhdGVnb3J5LWVkaXQvY2F0ZWdvcnktZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FjY29yZGlvbkNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb25JdGVte1xyXG4gICAgd2lkdGg6IDc3LjYyNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4jc3Bpbm5lckNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-edit',
                templateUrl: './category-edit.component.html',
                styleUrls: ['./category-edit.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"] }, { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/category-upload/category-upload.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/category-upload/category-upload.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoryUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryUploadComponent", function() { return CategoryUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class CategoryUploadComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.categoryTitleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoriesIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
    }
    onSubmit() {
        const category = {
            title: this.categoryTitleControl.value,
            categoryId: this.categoriesIdControl.value,
            categoryType: 'category'
        };
        this.categoriesService.addCategory(category).subscribe();
    }
}
CategoryUploadComponent.ɵfac = function CategoryUploadComponent_Factory(t) { return new (t || CategoryUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"])); };
CategoryUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryUploadComponent, selectors: [["app-category-upload"]], decls: 23, vars: 2, consts: [["id", "cardContainer"], [1, "cardItem"], ["aria-hidden", "true", "aria-label", "Example article icon"], [1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u041D\u041E\u0412\u041E\u0415", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 newInfoPage", "required", "", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"]], template: function CategoryUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0432 HTML. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CategoryUploadComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u043C\u0438 \u0431\u0443\u043A\u0432\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 camelCase, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0441\u044B\u043B\u043A\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoryTitleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoriesIdControl);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["#cardContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.cardItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n    color: #212121;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    vertical-align: bottom;\r\n    font-size: 20px;\r\n    width: 24px;\r\n    height: 20px;\r\n }\r\n\r\n.articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXRlZ29yeS11cGxvYWQvY2F0ZWdvcnktdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NhdGVnb3J5LXVwbG9hZC9jYXRlZ29yeS11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmNhcmRJdGVte1xyXG4gICAgd2lkdGg6IDc3LjYyNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxufVxyXG5cclxubWF0LWNhcmQtc3VidGl0bGV7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuIH1cclxuXHJcbi5hcnRpY2xlRm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnB1dEZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-upload',
                templateUrl: './category-upload.component.html',
                styleUrls: ['./category-upload.component.css']
            }]
    }], function () { return [{ type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/image-item/image-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/image-item/image-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItemComponent", function() { return ImageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class ImageItemComponent {
    constructor() {
        this.deleteImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expandImage = false;
    }
    ngOnInit() {
        this.imageSource = `api/images/image/${this.image.filename}`;
    }
    setClasses() {
        let classes = {
            'expandImage': this.expandImage,
            'smallImage': !this.expandImage
        };
        return classes;
    }
    changeImageSize() {
        this.expandImage = !this.expandImage;
    }
    onDelete() {
        this.deleteImage.emit(this.image);
    }
}
ImageItemComponent.ɵfac = function ImageItemComponent_Factory(t) { return new (t || ImageItemComponent)(); };
ImageItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageItemComponent, selectors: [["app-image-item"]], inputs: { image: "image" }, outputs: { deleteImage: "deleteImage" }, decls: 8, vars: 2, consts: [["id", "imagePanel"], ["id", "imageContainer", 3, "ngClass"], [3, "src"], [1, "imageActions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ImageItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageItemComponent_Template_button_click_4_listener() { return ctx.changeImageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0423\u0412\u0415\u041B\u0418\u0427\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageItemComponent_Template_button_click_6_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0423\u0414\u0410\u041B\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["#imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n#imageContainer[_ngcontent-%COMP%]{\r\n    transition-property: width;\r\n    transition-duration: 500ms;\r\n}\r\n\r\n#imagePanel[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.expandImage[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n}\r\n\r\n.smallImage[_ngcontent-%COMP%]{\r\n    width: 32%;\r\n}\r\n\r\n.imageActions[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 30%; \r\n    margin-left: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbWFnZS1pdGVtL2ltYWdlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2ltYWdlLWl0ZW0vaW1hZ2UtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlQ29udGFpbmVyIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jaW1hZ2VDb250YWluZXJ7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG59XHJcblxyXG4jaW1hZ2VQYW5lbHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5leHBhbmRJbWFnZXtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5zbWFsbEltYWdle1xyXG4gICAgd2lkdGg6IDMyJTtcclxufVxyXG5cclxuLmltYWdlQWN0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMzAlOyBcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-item',
                templateUrl: './image-item.component.html',
                styleUrls: ['./image-item.component.css']
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/images-collection/images-collection.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/images-collection/images-collection.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ImagesCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCollectionComponent", function() { return ImagesCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _images_upload_images_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images-upload/images-upload.component */ "./src/app/components/pages/images-upload/images-upload.component.ts");
/* harmony import */ var _image_item_image_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-item/image-item.component */ "./src/app/components/pages/image-item/image-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function ImagesCollectionComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-images-upload", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addNewImage", function ImagesCollectionComponent_ng_template_8_Template_app_images_upload_addNewImage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addNewImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImagesCollectionComponent_mat_expansion_panel_9_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-image-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteImage", function ImagesCollectionComponent_mat_expansion_panel_9_ng_template_6_Template_app_image_item_deleteImage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.deleteImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", image_r5);
} }
function ImagesCollectionComponent_mat_expansion_panel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImagesCollectionComponent_mat_expansion_panel_9_ng_template_6_Template, 1, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", image_r5.filename, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", image_r5.uploadDate, " ");
} }
function ImagesCollectionComponent_mat_progress_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 8);
} }
class ImagesCollectionComponent {
    constructor(imagesService) {
        this.imagesService = imagesService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.imagesService.getImages().subscribe(images => {
            this.images = images;
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
    addNewImage(formdata) {
        this.imagesService.addImage(formdata).subscribe();
    }
    deleteImage(image) {
        console.log("there");
        this.imagesService.deleteImage(image._id);
    }
}
ImagesCollectionComponent.ɵfac = function ImagesCollectionComponent_Factory(t) { return new (t || ImagesCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"])); };
ImagesCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagesCollectionComponent, selectors: [["app-images-collection"]], decls: 12, vars: 2, consts: [["id", "accordionContainer"], [1, "accordionItem"], ["matExpansionPanelContent", ""], ["class", "accordionItem", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [3, "addNewImage"], [3, "image", "deleteImage"], ["color", "accent", "mode", "indeterminate"]], template: function ImagesCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " png/jpeg/jpg/webp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImagesCollectionComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ImagesCollectionComponent_mat_expansion_panel_9_Template, 7, 2, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ImagesCollectionComponent_mat_progress_spinner_11_Template, 1, 0, "mat-progress-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _images_upload_images_upload_component__WEBPACK_IMPORTED_MODULE_4__["ImagesUploadComponent"], _image_item_image_item_component__WEBPACK_IMPORTED_MODULE_5__["ImageItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["#accordionContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.accordionItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n    text-align: right;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbWFnZXMtY29sbGVjdGlvbi9pbWFnZXMtY29sbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaW1hZ2VzLWNvbGxlY3Rpb24vaW1hZ2VzLWNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhY2NvcmRpb25Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uSXRlbXtcclxuICAgIHdpZHRoOiA3Ny42MjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuI3NwaW5uZXJDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-images-collection',
                templateUrl: './images-collection.component.html',
                styleUrls: ['./images-collection.component.css']
            }]
    }], function () { return [{ type: src_app_services_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/images-upload/images-upload.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/images-upload/images-upload.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImagesUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesUploadComponent", function() { return ImagesUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");






function ImagesUploadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesUploadComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const file_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeFile(file_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", file_r2.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r2.name);
} }
class ImagesUploadComponent {
    constructor() {
        this.accept = 'image/*';
        this.addNewImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.files = new Array();
    }
    onFileSelected(event) {
        const newFile = event.target.files[0];
        if (newFile.type === 'image/jpeg' || newFile.type === 'image/png' || newFile.type === 'image/webp' || newFile.type === 'image/jpg') {
            this.files.push(newFile);
        }
    }
    onUpload() {
        this.files.forEach(file => {
            const formdata = new FormData();
            formdata.append('file', file, file.name);
            this.addNewImage.emit(formdata);
        });
    }
    removeFile(file) {
        let index;
        if (this.files && -1 !== (index = this.files.indexOf(file))) {
            this.files.splice(index, 1);
        }
    }
}
ImagesUploadComponent.ɵfac = function ImagesUploadComponent_Factory(t) { return new (t || ImagesUploadComponent)(); };
ImagesUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagesUploadComponent, selectors: [["app-images-upload"]], inputs: { accept: "accept" }, outputs: { addNewImage: "addNewImage" }, decls: 12, vars: 2, consts: [["id", "uploadPanel"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["type", "file", "multiple", "multiple", 2, "display", "none", 3, "accept", "change"], ["fileUpload", ""], [1, "progressBar", 3, "value"], ["mat-icon-button", "", "color", "primary", 3, "click"]], template: function ImagesUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesUploadComponent_div_1_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesUploadComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImagesUploadComponent_Template_input_change_6_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesUploadComponent_Template_button_click_8_listener() { return ctx.onUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0417\u0410\u0413\u0420\u0423\u0417\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("accept", ctx.accept);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]], styles: ["#uploadPanel[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n\r\n.progressBar[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbWFnZXMtdXBsb2FkL2ltYWdlcy11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2ltYWdlcy11cGxvYWQvaW1hZ2VzLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VwbG9hZFBhbmVse1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnByb2dyZXNzQmFye1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-images-upload',
                templateUrl: './images-upload.component.html',
                styleUrls: ['./images-upload.component.css']
            }]
    }], function () { return []; }, { accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addNewImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/info-page-delete-item/info-page-delete-item.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/info-page-delete-item/info-page-delete-item.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: InfoPageDeleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageDeleteItemComponent", function() { return InfoPageDeleteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class InfoPageDeleteItemComponent {
    constructor() {
        this.deleteArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDelete() {
        this.deleteArticle.emit(this.article);
    }
}
InfoPageDeleteItemComponent.ɵfac = function InfoPageDeleteItemComponent_Factory(t) { return new (t || InfoPageDeleteItemComponent)(); };
InfoPageDeleteItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoPageDeleteItemComponent, selectors: [["app-info-page-delete-item"]], inputs: { article: "article" }, outputs: { deleteArticle: "deleteArticle" }, decls: 12, vars: 3, consts: [[1, "cardItem"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function InfoPageDeleteItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoPageDeleteItemComponent_Template_button_click_10_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0423\u0414\u0410\u041B\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.subText, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin: auto;\r\n    margin-bottom: 25px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbmZvLXBhZ2UtZGVsZXRlLWl0ZW0vaW5mby1wYWdlLWRlbGV0ZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaW5mby1wYWdlLWRlbGV0ZS1pdGVtL2luZm8tcGFnZS1kZWxldGUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICB3aWR0aDogNzcuNjI1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoPageDeleteItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-page-delete-item',
                templateUrl: './info-page-delete-item.component.html',
                styleUrls: ['./info-page-delete-item.component.css']
            }]
    }], function () { return []; }, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/info-page-delete/info-page-delete.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/info-page-delete/info-page-delete.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InfoPageDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageDeleteComponent", function() { return InfoPageDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _info_page_delete_item_info_page_delete_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../info-page-delete-item/info-page-delete-item.component */ "./src/app/components/pages/info-page-delete-item/info-page-delete-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function InfoPageDeleteComponent_app_info_page_delete_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-info-page-delete-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteArticle", function InfoPageDeleteComponent_app_info_page_delete_item_1_Template_app_info_page_delete_item_deleteArticle_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteArticle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", article_r2);
} }
function InfoPageDeleteComponent_mat_progress_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 5);
} }
class InfoPageDeleteComponent {
    constructor(categoriesService, articleService, trashService) {
        this.categoriesService = categoriesService;
        this.articleService = articleService;
        this.trashService = trashService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.articles = new Array();
        this.categoriesService.getCategoriesByCategoryType('info').subscribe(categories => {
            categories.forEach(category => {
                this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
                    articles.forEach(article => {
                        this.articles.push(article);
                    });
                });
            });
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
    deleteArticle(article) {
        this.articles = this.articles.filter(a => a._id != article._id);
        const trashArticle = {
            title: article.title,
            subText: 'none',
            content: article.content,
            previewImage: 'none',
            fullImage: article.fullImage,
            categoriesId: article.categoriesId,
            articleType: 'info',
            oldId: article._id
        };
        this.trashService.addTrash(trashArticle).subscribe();
        this.articleService.deleteArticleById(article._id).subscribe();
    }
}
InfoPageDeleteComponent.ɵfac = function InfoPageDeleteComponent_Factory(t) { return new (t || InfoPageDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__["TrashService"])); };
InfoPageDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoPageDeleteComponent, selectors: [["app-info-page-delete"]], decls: 4, vars: 2, consts: [["id", "deleteItemsContainer"], [3, "article", "deleteArticle", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [3, "article", "deleteArticle"], ["color", "accent", "mode", "indeterminate"]], template: function InfoPageDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoPageDeleteComponent_app_info_page_delete_item_1_Template, 1, 1, "app-info-page-delete-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoPageDeleteComponent_mat_progress_spinner_3_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _info_page_delete_item_info_page_delete_item_component__WEBPACK_IMPORTED_MODULE_5__["InfoPageDeleteItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["#deleteItemsContainer[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbmZvLXBhZ2UtZGVsZXRlL2luZm8tcGFnZS1kZWxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbmZvLXBhZ2UtZGVsZXRlL2luZm8tcGFnZS1kZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZWxldGVJdGVtc0NvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbiNzcGlubmVyQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoPageDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-page-delete',
                templateUrl: './info-page-delete.component.html',
                styleUrls: ['./info-page-delete.component.css']
            }]
    }], function () { return [{ type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] }, { type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }, { type: src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_3__["TrashService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/info-page-edit-item/info-page-edit-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/info-page-edit-item/info-page-edit-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InfoPageEditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageEditItemComponent", function() { return InfoPageEditItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class InfoPageEditItemComponent {
    constructor(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.fullImageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoriesIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoryTitleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
        this.categories.forEach(category => {
            if (category.categoryId === this.article.categoriesId) {
                this.category = category;
                this.categoryTitleControl.setValue(this.category.title);
            }
        });
        this.titleControl.setValue(this.article.title);
        this.contentControl.setValue(this.article.content);
        this.fullImageControl.setValue(this.article.fullImage.split("/").reverse()[0]);
        this.categoryTitleControl.setValue(this.category.title);
        this.categoriesIdControl.setValue(this.article.categoriesId);
    }
    onSubmit() {
        this.category.title = this.categoryTitleControl.value;
        this.category.categoryId = this.categoriesIdControl.value;
        this.categoriesService.updateCategory(this.category).subscribe();
        this.article.title = this.titleControl.value;
        this.article.content = this.contentControl.value;
        this.article.fullImage = `api/images/image/${this.fullImageControl.value}`;
        this.article.categoriesId = this.categoriesIdControl.value;
        console.log("there");
        this.articleService.updateInfoPage(this.article).subscribe();
    }
}
InfoPageEditItemComponent.ɵfac = function InfoPageEditItemComponent_Factory(t) { return new (t || InfoPageEditItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"])); };
InfoPageEditItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoPageEditItemComponent, selectors: [["app-info-page-edit-item"]], inputs: { categories: "categories", article: "article" }, decls: 23, vars: 5, consts: [[1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A\u043E\u043D\u0442\u0435\u043D\u0442...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 esgwfuoewugf23i42gui34.jpeg", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u041D\u041E\u0412\u041E\u0415", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 newInfoPage", "required", "", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"]], template: function InfoPageEditItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InfoPageEditItemComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u043C\u044F \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u043C\u0438 \u0431\u0443\u043A\u0432\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 camelCase, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0441\u044B\u043B\u043A\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.contentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.fullImageControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoryTitleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoriesIdControl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbmZvLXBhZ2UtZWRpdC1pdGVtL2luZm8tcGFnZS1lZGl0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2luZm8tcGFnZS1lZGl0LWl0ZW0vaW5mby1wYWdlLWVkaXQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVGb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmlucHV0RmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoPageEditItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-page-edit-item',
                templateUrl: './info-page-edit-item.component.html',
                styleUrls: ['./info-page-edit-item.component.css']
            }]
    }], function () { return [{ type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }, { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }]; }, { categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/info-page-edit/info-page-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/info-page-edit/info-page-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InfoPageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageEditComponent", function() { return InfoPageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _info_page_edit_item_info_page_edit_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../info-page-edit-item/info-page-edit-item.component */ "./src/app/components/pages/info-page-edit-item/info-page-edit-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function InfoPageEditComponent_mat_expansion_panel_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-info-page-edit-item", 6);
} if (rf & 2) {
    const article_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r3.categories)("article", article_r2);
} }
function InfoPageEditComponent_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InfoPageEditComponent_mat_expansion_panel_2_ng_template_6_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r2._id, " ");
} }
function InfoPageEditComponent_mat_progress_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 7);
} }
class InfoPageEditComponent {
    constructor(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.articles = new Array();
        this.categoriesService.getCategoriesByCategoryType('info').subscribe(categories => {
            this.categories = categories;
            this.categories.forEach(category => {
                this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
                    articles.forEach(article => {
                        this.articles.push(article);
                    });
                });
            });
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
}
InfoPageEditComponent.ɵfac = function InfoPageEditComponent_Factory(t) { return new (t || InfoPageEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"])); };
InfoPageEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoPageEditComponent, selectors: [["app-info-page-edit"]], decls: 5, vars: 2, consts: [["id", "accordionContainer"], ["class", "accordionItem", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [1, "accordionItem"], ["matExpansionPanelContent", ""], [3, "categories", "article"], ["color", "accent", "mode", "indeterminate"]], template: function InfoPageEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoPageEditComponent_mat_expansion_panel_2_Template, 7, 2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InfoPageEditComponent_mat_progress_spinner_4_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelContent"], _info_page_edit_item_info_page_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["InfoPageEditItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["#accordionContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.accordionItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n    text-align: right;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbmZvLXBhZ2UtZWRpdC9pbmZvLXBhZ2UtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaW5mby1wYWdlLWVkaXQvaW5mby1wYWdlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhY2NvcmRpb25Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uSXRlbXtcclxuICAgIHdpZHRoOiA3Ny42MjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuI3NwaW5uZXJDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoPageEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-page-edit',
                templateUrl: './info-page-edit.component.html',
                styleUrls: ['./info-page-edit.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"] }, { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/info-page-upload/info-page-upload.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/info-page-upload/info-page-upload.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InfoPageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageUploadComponent", function() { return InfoPageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











class InfoPageUploadComponent {
    constructor(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.fullImageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoriesIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.categoryTitleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
    }
    onSubmit() {
        const category = {
            title: this.categoryTitleControl.value,
            categoryId: this.categoriesIdControl.value,
            categoryType: 'info'
        };
        this.categoriesService.addCategory(category).subscribe();
        const article = {
            title: this.titleControl.value,
            content: this.contentControl.value,
            fullImage: `api/images/image/${this.fullImageControl.value}`,
            categoriesId: this.categoriesIdControl.value
        };
        this.articleService.addInfoPage(article).subscribe();
    }
}
InfoPageUploadComponent.ɵfac = function InfoPageUploadComponent_Factory(t) { return new (t || InfoPageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"])); };
InfoPageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoPageUploadComponent, selectors: [["app-info-page-upload"]], decls: 35, vars: 5, consts: [["id", "cardContainer"], [1, "cardItem"], ["aria-hidden", "true", "aria-label", "Example article icon"], [1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A\u043E\u043D\u0442\u0435\u043D\u0442...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 esgwfuoewugf23i42gui34.jpeg", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u041D\u041E\u0412\u041E\u0415", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 newInfoPage", "required", "", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"]], template: function InfoPageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0432 HTML. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InfoPageUploadComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0418\u043C\u044F \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u043C\u0438 \u0431\u0443\u043A\u0432\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 camelCase, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0441\u044B\u043B\u043A\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.contentControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.fullImageControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoryTitleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoriesIdControl);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["#cardContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.cardItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n    color: #212121;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    vertical-align: bottom;\r\n    font-size: 20px;\r\n    width: 24px;\r\n    height: 20px;\r\n }\r\n\r\n.articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbmZvLXBhZ2UtdXBsb2FkL2luZm8tcGFnZS11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaW5mby1wYWdlLXVwbG9hZC9pbmZvLXBhZ2UtdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FyZENvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkSXRlbXtcclxuICAgIHdpZHRoOiA3Ny42MjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiB9XHJcblxyXG4uYXJ0aWNsZUZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaW5wdXRGaWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoPageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-page-upload',
                templateUrl: './info-page-upload.component.html',
                styleUrls: ['./info-page-upload.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }, { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/podcast-delete-item/podcast-delete-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/podcast-delete-item/podcast-delete-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PodcastDeleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastDeleteItemComponent", function() { return PodcastDeleteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class PodcastDeleteItemComponent {
    constructor() {
        this.deleteArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDelete() {
        this.deleteArticle.emit(this.article);
    }
}
PodcastDeleteItemComponent.ɵfac = function PodcastDeleteItemComponent_Factory(t) { return new (t || PodcastDeleteItemComponent)(); };
PodcastDeleteItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastDeleteItemComponent, selectors: [["app-podcast-delete-item"]], inputs: { article: "article" }, outputs: { deleteArticle: "deleteArticle" }, decls: 12, vars: 3, consts: [[1, "cardItem"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function PodcastDeleteItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PodcastDeleteItemComponent_Template_button_click_10_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0423\u0414\u0410\u041B\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.subText, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin: auto;\r\n    margin-bottom: 25px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LWRlbGV0ZS1pdGVtL3BvZGNhc3QtZGVsZXRlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LWRlbGV0ZS1pdGVtL3BvZGNhc3QtZGVsZXRlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDc3LjYyNSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastDeleteItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-delete-item',
                templateUrl: './podcast-delete-item.component.html',
                styleUrls: ['./podcast-delete-item.component.css']
            }]
    }], function () { return []; }, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/podcast-delete/podcast-delete.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/podcast-delete/podcast-delete.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PodcastDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastDeleteComponent", function() { return PodcastDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _podcast_delete_item_podcast_delete_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../podcast-delete-item/podcast-delete-item.component */ "./src/app/components/pages/podcast-delete-item/podcast-delete-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");







function PodcastDeleteComponent_app_podcast_delete_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-podcast-delete-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteArticle", function PodcastDeleteComponent_app_podcast_delete_item_1_Template_app_podcast_delete_item_deleteArticle_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteArticle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", article_r2);
} }
function PodcastDeleteComponent_mat_progress_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 5);
} }
class PodcastDeleteComponent {
    constructor(articleService, trashService) {
        this.articleService = articleService;
        this.trashService = trashService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.articles = new Array();
        this.articleService.getArticleByCategoriesId('podcasts').subscribe(articles => {
            this.articles = articles;
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
    deleteArticle(article) {
        this.articles = this.articles.filter(a => a._id != article._id);
        const trashArticle = {
            title: article.title,
            subText: article.subText,
            content: article.content,
            oldId: article._id
        };
        this.trashService.addTrash(trashArticle).subscribe();
        this.articleService.deleteArticleById(article._id).subscribe();
    }
}
PodcastDeleteComponent.ɵfac = function PodcastDeleteComponent_Factory(t) { return new (t || PodcastDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_2__["TrashService"])); };
PodcastDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastDeleteComponent, selectors: [["app-podcast-delete"]], decls: 4, vars: 2, consts: [["id", "deleteItemsContainer"], [3, "article", "deleteArticle", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [3, "article", "deleteArticle"], ["color", "accent", "mode", "indeterminate"]], template: function PodcastDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PodcastDeleteComponent_app_podcast_delete_item_1_Template, 1, 1, "app-podcast-delete-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PodcastDeleteComponent_mat_progress_spinner_3_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _podcast_delete_item_podcast_delete_item_component__WEBPACK_IMPORTED_MODULE_4__["PodcastDeleteItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinner"]], styles: ["#deleteItemsContainer[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LWRlbGV0ZS9wb2RjYXN0LWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BvZGNhc3QtZGVsZXRlL3BvZGNhc3QtZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVsZXRlSXRlbXNDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4jc3Bpbm5lckNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-delete',
                templateUrl: './podcast-delete.component.html',
                styleUrls: ['./podcast-delete.component.css']
            }]
    }], function () { return [{ type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"] }, { type: src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_2__["TrashService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/podcast-edit-item/podcast-edit-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/podcast-edit-item/podcast-edit-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PodcastEditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastEditItemComponent", function() { return PodcastEditItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class PodcastEditItemComponent {
    constructor(articleService, categoriesService) {
        this.articleService = articleService;
        this.categoriesService = categoriesService;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.subTextControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
        this.titleControl.setValue(this.article.title);
        this.subTextControl.setValue(this.article.subText);
        this.contentControl.setValue(this.article.content);
    }
    onSubmit() {
        this.article.title = this.titleControl.value;
        this.article.subText = this.subTextControl.value;
        this.article.content = this.contentControl.value;
        console.log("there");
        this.articleService.updatePodcast(this.article).subscribe();
    }
}
PodcastEditItemComponent.ɵfac = function PodcastEditItemComponent_Factory(t) { return new (t || PodcastEditItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"])); };
PodcastEditItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastEditItemComponent, selectors: [["app-podcast-edit-item"]], inputs: { article: "article" }, decls: 15, vars: 3, consts: [[1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u043C \u043D\u0430 \u043F\u0440\u0435\u0432\u044C\u044E", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 https://www.youtube.com/embed/RzYSUScCdjw", "required", "", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"]], template: function PodcastEditItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PodcastEditItemComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u0442\u0435\u043A\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.subTextControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.contentControl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LWVkaXQtaXRlbS9wb2RjYXN0LWVkaXQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcG9kY2FzdC1lZGl0LWl0ZW0vcG9kY2FzdC1lZGl0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlRm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnB1dEZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastEditItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-edit-item',
                templateUrl: './podcast-edit-item.component.html',
                styleUrls: ['./podcast-edit-item.component.css']
            }]
    }], function () { return [{ type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }, { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }]; }, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/podcast-edit/podcast-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/podcast-edit/podcast-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: PodcastEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastEditComponent", function() { return PodcastEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _podcast_edit_item_podcast_edit_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../podcast-edit-item/podcast-edit-item.component */ "./src/app/components/pages/podcast-edit-item/podcast-edit-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");







function PodcastEditComponent_mat_expansion_panel_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-podcast-edit-item", 6);
} if (rf & 2) {
    const article_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", article_r2);
} }
function PodcastEditComponent_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PodcastEditComponent_mat_expansion_panel_2_ng_template_6_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r2._id, " ");
} }
function PodcastEditComponent_mat_progress_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 7);
} }
class PodcastEditComponent {
    constructor(articleService) {
        this.articleService = articleService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.articles = new Array();
        this.articleService.getArticleByCategoriesId('podcasts').subscribe(articles => {
            this.articles = articles;
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
}
PodcastEditComponent.ɵfac = function PodcastEditComponent_Factory(t) { return new (t || PodcastEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"])); };
PodcastEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastEditComponent, selectors: [["app-podcast-edit"]], decls: 5, vars: 2, consts: [["id", "accordionContainer"], ["class", "accordionItem", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [1, "accordionItem"], ["matExpansionPanelContent", ""], [3, "article"], ["color", "accent", "mode", "indeterminate"]], template: function PodcastEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PodcastEditComponent_mat_expansion_panel_2_Template, 7, 2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PodcastEditComponent_mat_progress_spinner_4_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelContent"], _podcast_edit_item_podcast_edit_item_component__WEBPACK_IMPORTED_MODULE_4__["PodcastEditItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinner"]], styles: ["#accordionContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.accordionItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n    text-align: right;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LWVkaXQvcG9kY2FzdC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LWVkaXQvcG9kY2FzdC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWNjb3JkaW9uQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmFjY29yZGlvbkl0ZW17XHJcbiAgICB3aWR0aDogNzcuNjI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNzcGlubmVyQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-edit',
                templateUrl: './podcast-edit.component.html',
                styleUrls: ['./podcast-edit.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/podcast-upload/podcast-upload.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/podcast-upload/podcast-upload.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PodcastUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastUploadComponent", function() { return PodcastUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class PodcastUploadComponent {
    constructor(articleService) {
        this.articleService = articleService;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.subTextControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
    }
    onSubmit() {
        const article = {
            title: this.titleControl.value,
            subText: this.subTextControl.value,
            content: this.contentControl.value
        };
        this.articleService.addPodcast(article).subscribe();
    }
}
PodcastUploadComponent.ɵfac = function PodcastUploadComponent_Factory(t) { return new (t || PodcastUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"])); };
PodcastUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastUploadComponent, selectors: [["app-podcast-upload"]], decls: 27, vars: 3, consts: [["id", "cardContainer"], [1, "cardItem"], ["aria-hidden", "true", "aria-label", "Example article icon"], [1, "articleForm", 3, "ngSubmit"], [1, "inputField"], ["matInput", "", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435...", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u043C \u043D\u0430 \u043F\u0440\u0435\u0432\u044C\u044E", "required", "", 3, "formControl"], ["matInput", "", "placeholder", "\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 https://www.youtube.com/embed/RzYSUScCdjw", "required", "", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", "id", "submitButton"]], template: function PodcastUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0432 HTML. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PodcastUploadComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u0442\u0435\u043A\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.subTextControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.contentControl);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["#cardContainer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.cardItem[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin-left: 10%;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%]{\r\n    color: #212121;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    vertical-align: bottom;\r\n    font-size: 20px;\r\n    width: 24px;\r\n    height: 20px;\r\n }\r\n\r\n.articleForm[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LXVwbG9hZC9wb2RjYXN0LXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb2RjYXN0LXVwbG9hZC9wb2RjYXN0LXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmRDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZEl0ZW17XHJcbiAgICB3aWR0aDogNzcuNjI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG5tYXQtY2FyZC1zdWJ0aXRsZXtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gfVxyXG5cclxuLmFydGljbGVGb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmlucHV0RmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-upload',
                templateUrl: './podcast-upload.component.html',
                styleUrls: ['./podcast-upload.component.css']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/trash-item/trash-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/trash-item/trash-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: TrashItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashItemComponent", function() { return TrashItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class TrashItemComponent {
    constructor() {
        this.deleteTrash = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recoverArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDelete() {
        this.deleteTrash.emit(this.trash);
    }
    onRecover() {
        this.recoverArticle.emit(this.trash);
    }
}
TrashItemComponent.ɵfac = function TrashItemComponent_Factory(t) { return new (t || TrashItemComponent)(); };
TrashItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrashItemComponent, selectors: [["app-trash-item"]], inputs: { trash: "trash" }, outputs: { deleteTrash: "deleteTrash", recoverArticle: "recoverArticle" }, decls: 14, vars: 3, consts: [[1, "cardItem"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function TrashItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrashItemComponent_Template_button_click_10_listener() { return ctx.onRecover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u041E\u0421\u0421\u0422\u0410\u041D\u041E\u0412\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrashItemComponent_Template_button_click_12_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0423\u0414\u0410\u041B\u0418\u0422\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.trash.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.trash._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.trash.subText, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n    width: 77.625%;\r\n    margin: auto;\r\n    margin-bottom: 25px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90cmFzaC1pdGVtL3RyYXNoLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90cmFzaC1pdGVtL3RyYXNoLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDc3LjYyNSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrashItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trash-item',
                templateUrl: './trash-item.component.html',
                styleUrls: ['./trash-item.component.css']
            }]
    }], function () { return []; }, { trash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteTrash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], recoverArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/trash/trash.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/trash/trash.component.ts ***!
  \***********************************************************/
/*! exports provided: TrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashComponent", function() { return TrashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _trash_item_trash_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trash-item/trash-item.component */ "./src/app/components/pages/trash-item/trash-item.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");







function TrashComponent_app_trash_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-trash-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteTrash", function TrashComponent_app_trash_item_1_Template_app_trash_item_deleteTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteTrash($event); })("recoverArticle", function TrashComponent_app_trash_item_1_Template_app_trash_item_recoverArticle_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.recoverArticle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trash_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trash", trash_r2);
} }
function TrashComponent_mat_progress_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 5);
} }
class TrashComponent {
    constructor(trashService, articlesService) {
        this.trashService = trashService;
        this.articlesService = articlesService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.trashService.getTrash().subscribe(trash => {
            this.trashArticles = trash;
        }, error => this.isLoading = false, () => this.isLoading = false);
    }
    deleteTrash(trash) {
        this.trashService.deleteTrash(trash._id).subscribe();
    }
    recoverArticle(trash) {
        if (trash.categoriesId == "podcasts") {
            const article = {
                title: trash.title,
                subText: trash.subText,
                content: trash.content
            };
            this.articlesService.addPodcast(article).subscribe();
        }
        else if (trash.articleType == "category") {
            const article = {
                title: trash.title,
                subText: trash.subText,
                content: trash.content,
                previewImage: trash.previewImage,
                fullImage: trash.fullImage,
                categoriesId: trash.categoriesId
            };
            this.articlesService.addArticle(article).subscribe();
        }
        else if (trash.articleType == "info") {
            const article = {
                title: trash.title,
                subText: trash.subText,
                content: trash.content,
                previewImage: trash.previewImage,
                fullImage: trash.fullImage,
                categoriesId: trash.categoriesId
            };
            this.articlesService.addInfoPage(article).subscribe();
        }
    }
}
TrashComponent.ɵfac = function TrashComponent_Factory(t) { return new (t || TrashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_1__["TrashService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"])); };
TrashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrashComponent, selectors: [["app-trash"]], decls: 4, vars: 2, consts: [["id", "deleteItemsContainer"], [3, "trash", "deleteTrash", "recoverArticle", 4, "ngFor", "ngForOf"], ["id", "spinnerContainer"], ["color", "accent", "mode", "indeterminate", 4, "ngIf"], [3, "trash", "deleteTrash", "recoverArticle"], ["color", "accent", "mode", "indeterminate"]], template: function TrashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrashComponent_app_trash_item_1_Template, 1, 1, "app-trash-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrashComponent_mat_progress_spinner_3_Template, 1, 0, "mat-progress-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trashArticles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _trash_item_trash_item_component__WEBPACK_IMPORTED_MODULE_4__["TrashItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinner"]], styles: ["#deleteItemsContainer[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n}\r\n\r\n#spinnerContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90cmFzaC90cmFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3RyYXNoL3RyYXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVsZXRlSXRlbXNDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4jc3Bpbm5lckNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trash',
                templateUrl: './trash.component.html',
                styleUrls: ['./trash.component.css']
            }]
    }], function () { return [{ type: src_app_services_trash_service__WEBPACK_IMPORTED_MODULE_1__["TrashService"] }, { type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/articles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/articles.service.ts ***!
  \**********************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class ArticlesService {
    constructor(http) {
        this.http = http;
        this.articlesUrl = "/api/articles";
    }
    getArticles() {
        return this.http.get(this.articlesUrl);
    }
    getArticleById(id) {
        const requestUrl = `${this.articlesUrl}/article/${id}`;
        return this.http.get(requestUrl);
    }
    getArticleByCategoriesId(categoriesId) {
        const requestUrl = `${this.articlesUrl}/${categoriesId}`;
        return this.http.get(requestUrl);
    }
    addArticle(article) {
        return this.http.post(this.articlesUrl, article, httpOptions);
    }
    addInfoPage(article) {
        const requestUrl = `${this.articlesUrl}/infoPage`;
        return this.http.post(requestUrl, article, httpOptions);
    }
    addPodcast(article) {
        const requestUrl = `${this.articlesUrl}/podcasts`;
        return this.http.post(requestUrl, article, httpOptions);
    }
    updateArticle(article) {
        const requestUrl = `${this.articlesUrl}/${article._id}`;
        return this.http.patch(requestUrl, article, httpOptions);
    }
    updateInfoPage(article) {
        const requestUrl = `${this.articlesUrl}/infoPage/${article._id}`;
        return this.http.patch(requestUrl, article, httpOptions);
    }
    updatePodcast(article) {
        const requestUrl = `${this.articlesUrl}/podcasts/${article._id}`;
        return this.http.patch(requestUrl, article, httpOptions);
    }
    deleteArticleById(id) {
        const requestUrl = `${this.articlesUrl}/${id}`;
        return this.http.delete(requestUrl, httpOptions);
    }
    deleteArticlesByCategoriesId(categoriesId) {
        const requestUrl = `${this.articlesUrl}/${categoriesId}`;
        return this.http.delete(requestUrl, httpOptions);
    }
}
ArticlesService.ɵfac = function ArticlesService_Factory(t) { return new (t || ArticlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArticlesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticlesService, factory: ArticlesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class CategoriesService {
    constructor(http) {
        this.http = http;
        this.categoriesUrl = "/api/categories";
    }
    getCategories() {
        return this.http.get(this.categoriesUrl);
    }
    getCategoriesByCategoryType(categoryType) {
        const requestUrl = `${this.categoriesUrl}/${categoryType}`;
        return this.http.get(requestUrl);
    }
    addCategory(category) {
        return this.http.post(this.categoriesUrl, category, httpOptions);
    }
    updateCategory(category) {
        const requestUrl = `${this.categoriesUrl}/${category._id}`;
        return this.http.patch(requestUrl, category, httpOptions);
    }
    deleteCategory(id) {
        const requestUrl = `${this.categoriesUrl}/${id}`;
        return this.http.delete(requestUrl, httpOptions);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/images.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/images.service.ts ***!
  \********************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class ImagesService {
    constructor(http) {
        this.http = http;
        this.imagesUrl = "/api/images";
    }
    getImages() {
        const requestUrl = `${this.imagesUrl}/files`;
        return this.http.get(requestUrl);
    }
    addImage(formData) {
        const requestUrl = `${this.imagesUrl}/upload`;
        return this.http.post(requestUrl, formData);
    }
    deleteImage(filename) {
        const requestUrl = `${this.imagesUrl}/files/${filename}`;
        return this.http.delete(requestUrl, httpOptions);
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImagesService, factory: ImagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/trash.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/trash.service.ts ***!
  \*******************************************/
/*! exports provided: TrashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashService", function() { return TrashService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class TrashService {
    constructor(http) {
        this.http = http;
        this.trashUrl = "/api/trash";
    }
    getTrash() {
        return this.http.get(this.trashUrl);
    }
    addTrash(trash) {
        return this.http.post(this.trashUrl, trash, httpOptions);
    }
    addTrashPodcast(trash) {
        const requestUrl = `${this.trashUrl}/podcasts`;
        return this.http.post(requestUrl, trash, httpOptions);
    }
    deleteTrash(id) {
        const requestUrl = `${this.trashUrl}/${id}`;
        return this.http.post(requestUrl, httpOptions);
    }
}
TrashService.ɵfac = function TrashService_Factory(t) { return new (t || TrashService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TrashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrashService, factory: TrashService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrashService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Major_Paranoia\Documents\menter\uploadpanel\angularuploadpanel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map