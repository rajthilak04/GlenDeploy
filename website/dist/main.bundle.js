webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>About</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"special-service\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-7  col-md-4 col-sm-6 col-xs-12 content\">\r\n                    <h3>Ooty Hotels - Glen Park Inn - Best Budget Hotel in Ooty</h3>\r\n                    <p>Ooty Hotels - Glen Park Inn, One of the best Budget Hotel in Ooty, is having Independent Cottages with Best facilities. We are providing our customers best Hotel Rooms in Ooty with modern facilities.</p>\r\n                        \r\n                    <p>Glen Park Inn is providng Golden class accommodation that represents Indian Hospitality at its best. A visit to India as a destination would remain incomplete, without experiencing the warmth of a family in a typical home. Whether you are looking for a personalized, experience based holiday or a place to relax and be at peace during your hectic business travel, without compromising on the comforts of a hotel, our home stay give you the best of both worlds.</p>\r\n                    <p>\r\n                        You will be enjoying highest hospitality in our cottage leaving pleasant memories for repeat visits. We offer tasty food with prompt service in a hygienic atmosphere and above all at a affordable tariff package. We have independent cottages divided into suites and rooms accommodating couples, small and large family groups, student groups (dormitory) and corporate groups. Our rooms are equipped with modern bathroom facilities, and in many cases fire places to warm the cool mountain evenings. Many rooms have sitting areas out front to relax and enjoy the open view.\r\n                    </p>\r\n                    <div class=\"clearfix\"></div>\r\n                    <ul>\r\n                        <li>Drawing Hall, Double and Triple Bedrooms house</li>\r\n                        <li>Also offers a choice of four Bedrooms</li>\r\n                        <li>24 hours Hot and Cold Water</li>\r\n                        <li>Efficient and speedy laundry services</li>\r\n                        <li>High Speed WIFI around the hotel</li>\r\n                        <li>Safe deposit lockers for safe custody of your valuables</li>\r\n                        <li>Currency exchange</li>\r\n                        <li>24 hr security</li>\r\n                        <li>Offers in-house parking facilities for hotel guests</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-5 col-md-8 col-sm-6 col-xs-12 special-service-img\">\r\n                    <img src=\"assets/images/special-service-img.jpg\" alt=\"special-service-img\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br/>\r\n<br/>\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenAbout = /** @class */ (function () {
    function GlenAbout() {
    }
    GlenAbout = __decorate([
        core_1.Component({
            selector: 'glen-about',
            template: __webpack_require__("./src/app/about/about.component.html")
        })
    ], GlenAbout);
    return GlenAbout;
}());
exports.GlenAbout = GlenAbout;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<glen-header></glen-header>\r\n<router-outlet></router-outlet>\r\n<glen-footer></glen-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/hammerjs/hammer.js");
__webpack_require__("./node_modules/mousetrap/mousetrap.js");
var angular_modal_gallery_1 = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
// Data Service
var data_tariff_service_1 = __webpack_require__("./src/app/data-service/data-tariff.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var slider_component_1 = __webpack_require__("./src/app/home/slider/slider.component.ts");
var rooms_component_1 = __webpack_require__("./src/app/home/rooms/rooms.component.ts");
var room_component_1 = __webpack_require__("./src/app/services/roomservice/room.component.ts");
var catering_component_1 = __webpack_require__("./src/app/services/cateringservice/catering.component.ts");
var tourist_component_1 = __webpack_require__("./src/app/services/touristservice/tourist.component.ts");
var cottage_component_1 = __webpack_require__("./src/app/cottages/cottage.component.ts");
var tariff_component_1 = __webpack_require__("./src/app/tariff/tariff.component.ts");
var contact_component_1 = __webpack_require__("./src/app/contact/contact.component.ts");
var gallery_component_1 = __webpack_require__("./src/app/gallery/gallery.component.ts");
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
var destination_component_1 = __webpack_require__("./src/app/destination/destination.component.ts");
var testimonial_component_1 = __webpack_require__("./src/app/testimonial/testimonial.component.ts");
var commonRoomService_component_1 = __webpack_require__("./src/app/common-service/commonRoomService.component.ts");
var footer_component_1 = __webpack_require__("./src/app/footer/footer.component.ts");
var routes_1 = __webpack_require__("./src/routes.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.GlenHeader,
                home_component_1.GlenHomePage,
                slider_component_1.GlenSlider,
                rooms_component_1.GlenRooms,
                room_component_1.GlenRoomService,
                catering_component_1.GlenCateringService,
                tourist_component_1.GlenTouristService,
                cottage_component_1.GlenCottage,
                tariff_component_1.GlenTariff,
                contact_component_1.GlenContact,
                gallery_component_1.GlenGallery,
                about_component_1.GlenAbout,
                destination_component_1.GlenDestination,
                testimonial_component_1.GlenTestimonial,
                commonRoomService_component_1.CommonServiceComponent,
                footer_component_1.FooterGlenComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes, { useHash: true }),
                angular_modal_gallery_1.ModalGalleryModule.forRoot(),
                http_1.HttpModule
            ],
            providers: [data_tariff_service_1.TariffDataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/common-service/commonRoomService.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-service-2\">\r\n    <div class=\"container\">        \r\n        <div class=\"row mgn-btm\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"content\">\r\n                    <i class=\"flaticon-room-service\"></i>\r\n                    <h4>Room Service</h4>\r\n                    <p>Efficient and speedy laundry services that enhance your stay with the comforts of being at home.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"content\">\r\n                    <i class=\"flaticon-wifi\"></i>\r\n                    <h4>Wifi Access</h4>\r\n                    <p>Wifi broadband access is available throughout the hotel, so you can stay in touch with friends and family or take care of business anytime during your stay.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"content\">\r\n                    <i class=\"flaticon-car-parking\"></i>\r\n                    <h4>Parking</h4>\r\n                    <p>Glen Park offers in-house parking facilities for hotel guests, so rest your wheels and enjoy convenience and security in our private parking.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"content\">\r\n                    <i class=\"flaticon-home\"></i>\r\n                    <h4>Restaurant</h4>\r\n                    <p>An everyday-changing menu offers you a variety of appetising and wholesome fare. Vending machines for hot and cold beverages can be accessed even when restaurant is closed.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common-service/commonRoomService.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CommonServiceComponent = /** @class */ (function () {
    function CommonServiceComponent() {
    }
    CommonServiceComponent = __decorate([
        core_1.Component({
            selector: 'common-room-service',
            template: __webpack_require__("./src/app/common-service/commonRoomService.component.html")
        })
    ], CommonServiceComponent);
    return CommonServiceComponent;
}());
exports.CommonServiceComponent = CommonServiceComponent;


/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Contact Us</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p>&nbsp;</p>\r\n    <p>&nbsp;</p>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"row\">    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <div class=\"contact-details\">\r\n                                <!-- Header-->\r\n                                <div class=\"header\">\r\n                                    <h3>Contact Details</h3>\r\n                                    <p>Have some questions or have problems with online reservations? You may easily contact us through contacts below.</p>\r\n                                </div>\r\n                                <!--  Contact-details-box-->\r\n                                <div class=\"media contact-details-box\">\r\n                                    <div class=\"media-left\">\r\n                                        <i class=\"fa fa-map-marker\"></i>\r\n                                    </div>\r\n                                    <div class=\"media-body\">\r\n                                        <h5>Office Address </h5>\r\n                                        <p> Glenpark inn, arni house, kodappamund, ooty -643002</p>\r\n                                        <p>\r\n                                            Getting here The hotel is about behind the Botanical Garden.\r\n                                            Call the hotel for directions +91 99525 07338.\r\n                                        </p>\r\n                                        <p>Ooty is about 260km from Bangalore via Masinagudi and about 90km from Coimbatore.</p>\r\n                                    </div>\r\n                                </div>\r\n                                <!--  Contact-details-box-->\r\n                                <div class=\"media contact-details-box\">\r\n                                    <div class=\"media-left\">\r\n                                        <i class=\"fa fa-phone\"></i>\r\n                                    </div>\r\n                                    <div class=\"media-body\">\r\n                                        <h5>Phone </h5>\r\n                                        <p><a href=\"tel:0477-0477-8556-552\">office: +91 423 3204287 </a></p>\r\n                                        <p><a href=\"tel:+55-417-634-7071\">Mobile: +91 99525 07338</a></p>\r\n                                    </div>\r\n                                </div>\r\n                                <!--  Contact-details-box-->\r\n                                <div class=\"media contact-details-box\">\r\n                                    <div class=\"media-left\">\r\n                                        <i class=\"fa fa-envelope\"></i>\r\n                                    </div>\r\n                                    <div class=\"media-body\">\r\n                                        <h5>Email</h5>\r\n                                        <p><a href=\"mailto:info@themevessel.com\">glenparkinn@yahoo.com </a></p>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- Social List-->                                        \r\n                                <div class=\"social-list clearfix\">\r\n                                    <a href=\"#\" class=\"bg-facebook\">\r\n                                        <i class=\"fa fa-facebook\"></i>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"bg-twitter\">\r\n                                        <i class=\"fa fa-twitter\"></i>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"bg-google\">\r\n                                        <i class=\"fa fa-google-plus\"></i>\r\n                                    </a>\r\n                                </div>                    \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <div class=\"google-maps contact\">\r\n                                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15643.59370677268!2d76.716799!3d11.4149181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66d15084ca2e222!2sGlen+Park+Inn!5e0!3m2!1sen!2sin!4v1459221625105\" width=\"600\" height=\"550\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<common-room-service></common-room-service>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenContact = /** @class */ (function () {
    function GlenContact() {
    }
    GlenContact = __decorate([
        core_1.Component({
            selector: 'glen-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html")
        })
    ], GlenContact);
    return GlenContact;
}());
exports.GlenContact = GlenContact;


/***/ }),

/***/ "./src/app/cottages/cottage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Cottages</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-2\">\r\n        <div class=\"container\">\r\n            <div class=\"main-title\">\r\n                <h1>OOTY COTTAGES, 2, 3, 4 BEDROOM COTTAGES IN OOTY - GLEN PARK INN</h1>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"row\">    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Ooty Cottages</h5>\r\n                            <p>Glen Park Inn providing our customers best cottages in Ooty with modern facilities. We have Independent Cottages like 2,3,4 Bedroom Cottages. They are divided into suites and rooms, can accommodating couples, small and large family groups, student groups (dormitory) and corporate groups. Each unit in the Glen Park Inn is self-contained luxury cottage, with full-fledged amenities and facilities offering maximum privacy.</p>\r\n                            <ul>\r\n                                <li>Drawing Hall, Double and Triple Bedrooms house</li>\r\n                                <li>Also offers a choice of four Bedrooms</li>\r\n                                <li>24 hours Hot and Cold Water</li>\r\n                                <li>Efficient and speedy laundry services</li>\r\n                                <li>High Speed WIFI around the hotel</li>\r\n                                <li>Safe deposit lockers for safe custody of your valuables</li>\r\n                                <li>Currency exchange</li>\r\n                                <li>24 hr security</li>\r\n                                <li>Offers in-house parking facilities for hotel guests</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/catering.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<common-room-service></common-room-service>"

/***/ }),

/***/ "./src/app/cottages/cottage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenCottage = /** @class */ (function () {
    function GlenCottage() {
    }
    GlenCottage = __decorate([
        core_1.Component({
            selector: 'glen-cottage',
            template: __webpack_require__("./src/app/cottages/cottage.component.html")
        })
    ], GlenCottage);
    return GlenCottage;
}());
exports.GlenCottage = GlenCottage;


/***/ }),

/***/ "./src/app/data-service/data-tariff.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var TariffDataService = /** @class */ (function () {
    function TariffDataService(_http) {
        this._http = _http;
    }
    TariffDataService.prototype.getTariff = function () {
        var _this = this;
        return this._http.get("/api/tariff")
            .map(function (result) { return _this.result = result.json().data; });
    };
    TariffDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TariffDataService);
    return TariffDataService;
}());
exports.TariffDataService = TariffDataService;


/***/ }),

/***/ "./src/app/destination/destination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Destination</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-2\">\r\n        <div class=\"container\">\r\n            <div class=\"main-title\">\r\n                <h1>Places In Ooty</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"row\">    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Avalanche</h5>\r\n                            <p>Located at a distance of 28 km from Ooty, Avalanche Valley is one of the most popular places to visit around Ooty. Named after a landslide which hit the region in the year 1823, the valley is a natural paradise. Filled with shola trees, rhododendrons, orchids, magnolias and a trout stream, Canada dam and Avalanche Lake & dam are the few attractions tourists can explore here. The place is popular for trout fishing as well. It takes around 1 hour to reach the valley from Ooty.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/Avalanches.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Ooty Lake</h5>\r\n                            <p>From just behind the central Bus Stand (also near the Railway station) the famous Ooty Lake stretches, in an irregular 'L' shape, for about 2.75 kms in length and varying distances in width(100m - 140m). For the curious, this lake was artificially formed by John Sullivan, the founder of Ooty, in 1823-25 by damming the mountain streams flowing down Ooty valley. The lake which breached thrice, completely emptying itself, originally extended up to the present day market and ferries were used to get across one side to the other. The lake gradually shrunk in size giving place to the present racecourse, the bus stand and mini garden. At the far end is the Boat House, where all kinds of boats are available for hire from eight in the morning to six in the evening. Surrounded by lofty eucalyptus trees and shrubs the lake is a scenic delight to ones from the concrete jungles. During summer seasons, in May, boat races and boat pageantry are organized for two days at the lake which draws huge crowd. In recent years the lake and the boat house have become the hub of entertainment for the visitors. At the boat house end, there is children's park with a toy train. A deer part is located in the adjacent area. Just outside the Boat house local ponies are available for jolly rides at a charge.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/lakes.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Garden</h5>\r\n                            <p>It's the best garden ever known in India and is a great tourist destination. It is located on the hillock of Ooty which is one of the most popular tourist destinations in India. It has a wide span of more than 50 acres and is spread along the Dodabetta peak, which stays to be the highest peak in the region of Ooty. The garden is taken great care of by the government and the Horticulture department and has a wide variety of plants and trees. It has been lovers point and has been appreciated by all kinds of people alike. May stays to be the best time to visit the place, and there are several programs organized by the local crowd so as to attract the tourists to visit the place.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/gardens.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Rose Garden</h5>\r\n                            <p>Rose garden is the heart and soul of city of Ooty. The construction is so beautiful and there are small tunnels made wherein the roses are planted in tunnels. This botanical garden stays to be the best flower show of the century and it has the highest amount of rose production in the country. Different kinds of roses are grown in all colors and sizes, incorporating different hybrid quality like tea and miniature roses which are gathering great footing in the market place these days. The roses grown in the Botanical garden are best sold at higher prices in the market and stay longer and are best for the bouquets to be created and are a great memorable gift for the beloved.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/Ooty-gardens.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Doddabetta</h5>\r\n                            <p>Doddabetta peak is the highest known peak in the region of Ooty and its altitude stays to be more than 2,623 meters in height. It actually stays in the suburbs of Ooty and is hardly 10 kms from the place. Ooty being the hilly place, the areas in the suburbs can too be easily captured in the camera and the hillock as well as the valley is indeed a great sight seeing place. It is a wonderful place for shooting and capturing nature's scenic beauty in the camera and forecast it to the people all around the globe. The hilly regions of Mysore and the open plain lands too can be easily captured in the camera and it is the best place to take a shot.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/doddabettas-ooty.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Mukkurthi Peak</h5>\r\n                            <p>Timings - Opening & Closing: Summer: 7.00 AM - 6.30 PM , Winter: 7.00 AM - 6.30 PM Mukkurthi is a beautiful peak while programming your Excursions in Ooty, which is located at a distance of 40-km from Ooty. Ideally located on the Southern corner of the Nilgiri Plateau, this peal attracts tourists from distinct corners. The Kollaribetta and Nilgiris Peak are the other major peaks, close to this peak which are for the famous tourist attractions in Ooty. A large number of perennial streams flowing between these peaks, make a complete picturesque reality. Furthermore, Bhavani Puzha. Silent Valley, along the Western Ghats, is a feast to the visitor's eye.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/mukurthisss.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Pykara Lake</h5>\r\n                            <p>Pykara Lake and the fall are on the path going from Ooty to Bangalore and are situated close to Mudumalai. The lake is a wonderful example of nature's beauty and is a paradise on earth. One would definitely love boating in the wonderful lake and the pykara falls close to the lake is a fantastic place where one can enjoy photography. Several movies have been shot at this place and there is a dam in the suburbs, which provides water to the people in the neighbourhood. There is a wonderful bridge in the place where one can enjoy the shooting and photography too.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/pykarasss.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Wellington's Golf Course</h5>\r\n                            <p>Cantonment of Wellington is located in the near vicinity of Coonoor. It is in Wellington that the well-respected Defense Services Staff College is located. The Wellington Golf Course is a popular place to stop and enjoy a civilized round of golf. In the midst of the exotic landscape, the touch of normalcy surrounded with the unusual location makes golfing at Wellington's an attractive possibility for many people. This golf course is especially popular with film crews who film in the area. During the filming of a movie, the relaxing motion necessary for golf can counteract the stress that occurs in the filmmaking process. No wonder Wellington's Golf Course is a popular place to visit.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/ooty golf courses.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>7th Mile</h5>\r\n                            <p>7th Mile (Shooting Spot) Just 6miles from the Ooty city you can reach this spot. Its green & lengthy shooting spot which is surrounded by forest. You can see this spot in most of Indian movies</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/9 th miles.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <h1>Places In Coonoor</h1>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Dolphin's Nose</h5>\r\n                            <p>Dolphin's Nose is an enormous rock formation that is entirely unique. The protruding rock formation looks exactly like what it is named after, a dolphin's nose. It takes some effort to climb to the top of this rock outcropping, but the views are absolutely worth the hard work. There are gigantic ravines found both to the left and right of Dolphin's Nose. In one of the ravine's you can clearly see the awe inspiring Catherine Falls with its continuing stream several thousand meters below. In the other ravine, you can spot where the Coonoor stream meets the Kotagiri stream. Both streams that are contained within these two ravines ultimately feed the Bhavani River which is located a relatively short distance away opposite of the Dolphin's Nose.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/Coonoor-dolphin noses.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Sim's Park</h5>\r\n                            <p>Sim's Park is an unusual botanical garden that was developed back in 1874 by Mr. J.D. Sims and Major Murray. Naturally occurring trees, shrubs and creepers, are in the park as are many unusual species of plants that have been brought in from a variety of places around the world. The park is situated in a deep ravine on the northern side of Coonoor and covers twelve acres of undulating land. The well though out park has a beautiful lay out. There is an annual fruit and vegetable show that is held in the park that is well attended.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/Sims-Park-in-Coonoorsss.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Lamb's Rock</h5>\r\n                            <p>Lamb's rock is an excellent picnic spot near Coonoor. It is a point on the way to Dolphin's Nose. It was named after the man Captain Lamb who tried in earnest to open a path to that particular point. With such a view, no wonder this man put forth such a valiant effort to reach the point. The rock is a jagged cliff that drops down several hundred feet to the lush jungle below. On the right hand is the Hulical ravine. It is possible to see the Coonoor stream some 5000 feet below. This vantage point also provides you with an excellent view of the Coimbatore plains.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/lambss.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Catherine Falls</h5>\r\n                            <p>Catherine Falls is located in the area that surrounds Coonoor. This beautiful waterfall falls from an impressive 250 feet. It can clearly been seen from the top of Dolphin's Nose if seeing the entire waterfall as one total impression is what you are looking for. It is also possible to take a road to the top of the falls. This vantage point allows you to truly appreciate the awesome power that Mother Nature has contained within a waterfall as you look down the 250 feet to the pool of water and its surrounding landscape below.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/destination/Kalhatty Fallsssss.jpg\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<common-room-service></common-room-service>"

/***/ }),

/***/ "./src/app/destination/destination.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenDestination = /** @class */ (function () {
    function GlenDestination() {
    }
    GlenDestination = __decorate([
        core_1.Component({
            selector: 'glen-destination',
            template: __webpack_require__("./src/app/destination/destination.component.html")
        })
    ], GlenDestination);
    return GlenDestination;
}());
exports.GlenDestination = GlenDestination;


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-footer\">\r\n    <div class=\"container\">\r\n        <ul>\r\n            <li><a [routerLink]=\"['/gallery']\">Gallery</a> | </li> \r\n            <li><a [routerLink]=\"['/about']\">About Us</a> | </li>\r\n            <li><a [routerLink]=\"['/testimonial']\">Testimonials</a> | </li>\r\n            <li><a [routerLink]=\"['/destination']\">Destination</a></li>\r\n        </ul>\r\n        <div class=\"social-list clearfix\">\r\n            <a href=\"#\" class=\"bg-facebook\">\r\n                <i class=\"fa fa-facebook\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"bg-twitter\">\r\n                <i class=\"fa fa-twitter\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"bg-google\">\r\n                <i class=\"fa fa-google-plus\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <hr/>    \r\n    <div class=\"container\">\r\n        <span>© 2013 Glen Park Inn. All Rights Reserved. Powered by Eday Exportz.</span>        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterGlenComponent = /** @class */ (function () {
    function FooterGlenComponent() {
    }
    FooterGlenComponent = __decorate([
        core_1.Component({
            selector: 'glen-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html")
        })
    ], FooterGlenComponent);
    return FooterGlenComponent;
}());
exports.FooterGlenComponent = FooterGlenComponent;


/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Cottages</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-2\">\r\n        <div class=\"container\">\r\n            <div class=\"main-title\">\r\n                <h1>GALLERY - GLEN PARK INN</h1>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <section>\r\n                    <ks-modal-gallery [modalImages]=\"images\" [plainGalleryConfig]=\"plainGalleryRow\"></ks-modal-gallery>\r\n                </section>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br/>\r\n<br/>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var angular_modal_gallery_1 = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
var GlenGallery = /** @class */ (function () {
    function GlenGallery() {
        this.plainGalleryRow = {
            strategy: angular_modal_gallery_1.PlainGalleryStrategy.ROW,
            layout: new angular_modal_gallery_1.LineLayout({ width: '200px', height: '170px' }, { length: 18, wrap: true }, 'flex-start')
        };
        this.images = [
            new angular_modal_gallery_1.Image(0, { img: 'assets/images/gallery/1a.jpg' }),
            new angular_modal_gallery_1.Image(1, { img: 'assets/images/gallery/2a.jpg', description: 'Image 2' }),
            new angular_modal_gallery_1.Image(2, { img: 'assets/images/gallery/3a.jpg', description: 'Image 3' }),
            new angular_modal_gallery_1.Image(3, { img: 'assets/images/gallery/4a.jpg', description: 'Image 4' }),
            new angular_modal_gallery_1.Image(4, { img: 'assets/images/gallery/5a.jpg', description: 'Image 5' }),
            new angular_modal_gallery_1.Image(5, { img: 'assets/images/gallery/6a.jpg', description: 'Image 6' }),
            new angular_modal_gallery_1.Image(6, { img: 'assets/images/gallery/7a.jpg', description: 'Image 7' }),
            new angular_modal_gallery_1.Image(7, { img: 'assets/images/gallery/8a.jpg', description: 'Image 8' }),
            new angular_modal_gallery_1.Image(8, { img: 'assets/images/gallery/9a.jpg', description: 'Image 9' }),
            new angular_modal_gallery_1.Image(9, { img: 'assets/images/gallery/10a.jpg', description: 'Image 10' }),
            new angular_modal_gallery_1.Image(10, { img: 'assets/images/gallery/11a.jpg', description: 'Image 11' }),
            new angular_modal_gallery_1.Image(11, { img: 'assets/images/gallery/11aa.jpg', description: 'Image 12' }),
            new angular_modal_gallery_1.Image(12, { img: 'assets/images/gallery/15.jpg', description: 'Image 13' }),
            new angular_modal_gallery_1.Image(13, { img: 'assets/images/gallery/16.jpg', description: 'Image 14' }),
            new angular_modal_gallery_1.Image(14, { img: 'assets/images/gallery/17.jpg', description: 'Image 15' }),
            new angular_modal_gallery_1.Image(15, { img: 'assets/images/gallery/18.jpg', description: 'Image 16' }),
            new angular_modal_gallery_1.Image(16, { img: 'assets/images/gallery/12a.jpg', description: 'Image 17' }),
            new angular_modal_gallery_1.Image(17, { img: 'assets/images/gallery/13a.jpg', description: 'Image 18' })
        ];
        // array with a single image inside (the first one)
        this.singleImage = [this.images[0]];
        this.dotsConfig = {
            visible: false
        };
        this.previewConfig = {
            visible: false,
            number: 3,
            arrows: true,
            clickable: true,
            size: {
                width: '70px',
                height: '70px'
            }
        };
    }
    GlenGallery = __decorate([
        core_1.Component({
            selector: 'glen-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html")
        })
    ], GlenGallery);
    return GlenGallery;
}());
exports.GlenGallery = GlenGallery;


/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n    <div class=\"container\">\r\n        <nav class=\"navbar navbar-default\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a [routerLink]=\"['/']\" class=\"logo\">\r\n                    <img src=\"assets/images/glenlogo.png\">\r\n                </a>\r\n            </div>\r\n            <!-- Collect the nav links, forms, and other content for toggling -->\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li><a [routerLink]=\"['/']\">Home</a></li>\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Services<span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a [routerLink]=\"['/room-services']\">Room Services</a></li>\r\n                            <li><a [routerLink]=\"['/catering-services']\">Catering</a></li>\r\n                            <li><a [routerLink]=\"['/tourist-services']\">Tourist</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li><a [routerLink]=\"['/cottages']\">Cottages</a></li>\r\n                    <li><a [routerLink]=\"['/tariff']\">Tariff</a></li>\r\n                    <li><a [routerLink]=\"['/contact']\">Contact Us</a></li>\r\n                </ul>\r\n            </div>\r\n            <!-- /.navbar-collapse -->\r\n            <!-- /.container -->\r\n        </nav>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenHeader = /** @class */ (function () {
    function GlenHeader() {
    }
    GlenHeader = __decorate([
        core_1.Component({
            selector: 'glen-header',
            template: __webpack_require__("./src/app/header/header.component.html")
        })
    ], GlenHeader);
    return GlenHeader;
}());
exports.GlenHeader = GlenHeader;


/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenHomePage = /** @class */ (function () {
    function GlenHomePage() {
    }
    GlenHomePage = __decorate([
        core_1.Component({
            selector: 'glen-home',
            template: "\n        <glen-slider></glen-slider>\n        <glen-rooms></glen-rooms>\n        "
        })
    ], GlenHomePage);
    return GlenHomePage;
}());
exports.GlenHomePage = GlenHomePage;


/***/ }),

/***/ "./src/app/home/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-band\">\r\n    <div class=\"container\">\r\n        <div class=\"col-md-9 col-sm-12\">\r\n            <h1>Glen Park Inn - One among the Best Hotels and Resorts in Ooty - Call us for reservation at <b>+91 99525 07338</b></h1>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-12\">\r\n            <a class=\"btn btn-fill\" href=\"#\">Book Rooms Now</a>\r\n        </div>\r\n                    \r\n    </div>\r\n</div>\r\n<div class=\"favorite-rooms content-area clearfix\">\r\n    <div class=\"container\">\r\n        <div class=\"main-title\">\r\n            <h1>Favorite Rooms</h1>\r\n            <p>Glen Park Inn is one among the best hotels in Ooty, the queen of hills. We are providing golden class accommodation that represents Indian Hospitality at its best.</p>                \r\n            <p>Our Residency - One of the Best Resorts in Ooty, attracts you with a complete furnished Drawing Hall, Double and Triple Bedrooms house with attached Bathrooms, Restaurant – 24 hours Hot and Cold Water and the companion of service goes around the clock. The Residency also offers a choice of four Bedrooms.</p>\r\n        </div>\r\n        <p>&nbsp;</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                <!-- Rooms Box Start-->\r\n                <div class=\"thumbnail rooms-box clearfix\">\r\n                    <img src=\"assets/images/bedroom-1.jpg\" alt=\"bedroom-1\">\r\n                    <!-- detail -->\r\n                    <div class=\"caption detail\">\r\n                        <!-- Header -->\r\n                        <header class=\"clearfix\">\r\n                            <div class=\"pull-left\">\r\n                                <h5 class=\"title\">\r\n                                    <a href=\"#\">Double Bedded room</a>\r\n                                </h5>\r\n                                <ul class=\"custom-list\">\r\n                                    <li><a href=\"#\">1 bed</a> /</li>\r\n                                    <li><a href=\"#\">2 People</a> /</li>\r\n                                    <li><a href=\"#\">sea  view</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </header>\r\n                        <!-- Paragraph -->\r\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back.</p>\r\n                        <!-- Facilities List -->\r\n                        <ul class=\"facilities-list clearfix\">\r\n                            <li><i class=\"flaticon-air-conditioner\"></i><span>Ac</span></li>\r\n                            <li><i class=\"flaticon-air-conditioner\"></i><span>Room Service</span></li>\r\n                            <li><i class=\"flaticon-wifi\"></i><span>Wifi Access</span></li>\r\n                            <li><i class=\"flaticon-key\"></i><span>Free Safe </span></li>\r\n                            <li><i class=\"flaticon-car-parking\"></i><span>Parking</span></li>\r\n                            <li><i class=\"flaticon-monitor\"></i><span>TV</span></li>\r\n                        </ul>\r\n                        <!-- Btn Div-->\r\n                        <div class=\"btn-div\">\r\n                            <a [routerLink]=\"['/tariff']\">\r\n                                <span class=\"read-more\">Get Tariff</span>\r\n                                <span class=\"icon-arrow-right2 bg-danger\">\r\n                                    <i class=\"fa  fa-angle-right\"></i>\r\n                                </span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Rooms Box End-->\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                <!-- Rooms Box Start-->\r\n                <div class=\"thumbnail rooms-box clearfix\">\r\n                    <img src=\"assets/images/bedroom-2.jpg\" alt=\"bedroom-2\">\r\n                    <!-- detail -->\r\n                    <div class=\"caption detail\">\r\n                        <!-- Header -->\r\n                        <header class=\"clearfix\">\r\n                            <div class=\"pull-left\">\r\n                                <h5 class=\"title\">\r\n                                    <a href=\"#\">2 Bed Cottages</a>\r\n                                </h5>\r\n                                <ul class=\"custom-list\">\r\n                                    <li><a href=\"#\">1 bed</a> /</li>\r\n                                    <li><a href=\"#\">2 People</a> /</li>\r\n                                    <li><a href=\"#\">sea  view</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </header>\r\n                        <!-- Paragraph -->\r\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back.</p>\r\n                        <!-- Facilities List -->\r\n                        <ul class=\"facilities-list clearfix\">\r\n                            <li><i class=\"flaticon-air-conditioner\"></i><span>Ac</span></li>\r\n                            <li> <i class=\"flaticon-room-service\"></i><span>Room Service</span></li>\r\n                            <li><i class=\"flaticon-wifi\"></i><span>Wifi Access</span></li>\r\n                            <li><i class=\"flaticon-key\"></i><span>Free Safe </span></li>\r\n                            <li><i class=\"flaticon-car-parking\"></i><span>Parking</span></li>\r\n                            <li><i class=\"flaticon-monitor\"></i><span>TV</span></li>\r\n                        </ul>\r\n                        <!-- Btn Div-->\r\n                        <div class=\"btn-div\">\r\n                            <a [routerLink]=\"['/tariff']\">\r\n                                <span class=\"read-more\">Get Tariff</span>\r\n                                <span class=\"icon-arrow-right2 bg-danger\">\r\n                                    <i class=\"fa  fa-angle-right\"></i>\r\n                                </span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Rooms Box End-->\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                <!-- Rooms Box Start-->\r\n                <div class=\"thumbnail rooms-box clearfix\">\r\n                    <img src=\"assets/images/bedroom-3.jpg\" alt=\"bedroom-6\">\r\n                    <!-- detail -->\r\n                    <div class=\"caption detail\">\r\n                        <!-- Header -->\r\n                        <header class=\"clearfix\">\r\n                            <div class=\"pull-left\">\r\n                                <h5 class=\"title\">\r\n                                    <a href=\"#\">3 Bed Cottages</a>\r\n                                </h5>\r\n                                <ul class=\"custom-list\">\r\n                                    <li><a href=\"#\">1 bed</a> /</li>\r\n                                    <li><a href=\"#\">2 People</a> /</li>\r\n                                    <li><a href=\"#\">sea  view</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </header>\r\n                        <!-- Paragraph -->\r\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back.</p>\r\n                        <!-- Facilities List -->\r\n                        <ul class=\"facilities-list clearfix\">\r\n                            <li><i class=\"flaticon-air-conditioner\"></i><span>Ac</span></li>\r\n                            <li><i class=\"flaticon-room-service\"></i><span>Room Service</span></li>\r\n                            <li><i class=\"flaticon-wifi\"></i><span>Wifi Access</span></li>\r\n                            <li><i class=\"flaticon-key\"></i><span>Free Safe </span></li>\r\n                            <li><i class=\"flaticon-car-parking\"></i><span>Parking</span></li>\r\n                            <li><i class=\"flaticon-monitor\"></i><span>TV</span></li>\r\n                        </ul>\r\n                        <!-- Btn Div-->\r\n                        <div class=\"btn-div\">\r\n                            <a [routerLink]=\"['/tariff']\">\r\n                                <span class=\"read-more\">Get Tariff</span>\r\n                                <span class=\"icon-arrow-right2 bg-danger\">\r\n                                    <i class=\"fa  fa-angle-right\"></i>\r\n                                </span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Rooms Box End-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"special-service\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6  col-md-4 col-sm-6 col-xs-12 content\">\r\n                <h5>Dining Room</h5>\r\n                <h3>Get Ready for the Delicious Dinner</h3>\r\n                <p>We provide intuitive recommendations for perfect pairing of cuisines to accent the delicate flavours and spices of the hills. Guests will enjoy unmatched culinary experience at the Ooty´s fine dining restaurants that include, fine dining with indoor seating. Come and journey with us while overlooking the hills, nature would reveal the mystery of this special place. We serve sumptuous dishes that come alive with South Indian, Chinese and continental flavours, all delightful and delicious to the heart and soul.</p>\r\n                    \r\n                <p>Our restaurant makes it a place to enjoy your fine dining with delicious and mouth watering food menu. We offer a distinctive dining experience, one that explores the nuances of the finest Indian and International Cuisines, serving traditional and contemporary favourites.</p>\r\n                <a [routerLink]=\"['/catering-services']\" class=\"btn btn-fill\">Read More</a>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-8 col-sm-6 col-xs-12 special-service-img\">\r\n                <img src=\"assets/images/special-service-img.jpg\" alt=\"special-service-img\" class=\"img-responsive\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"google-maps\">\r\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15643.59370677268!2d76.716799!3d11.4149181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66d15084ca2e222!2sGlen+Park+Inn!5e0!3m2!1sen!2sin!4v1459221625105\" width=\"600\" height=\"350\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>\r\n</div>"

/***/ }),

/***/ "./src/app/home/rooms/rooms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenRooms = /** @class */ (function () {
    function GlenRooms() {
    }
    GlenRooms = __decorate([
        core_1.Component({
            selector: 'glen-rooms',
            template: __webpack_require__("./src/app/home/rooms/rooms.component.html")
        })
    ], GlenRooms);
    return GlenRooms;
}());
exports.GlenRooms = GlenRooms;


/***/ }),

/***/ "./src/app/home/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Carousel\r\n================================================== -->\r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div class=\"item active\">\r\n            <img class=\"first-slide\" src=\"assets/images/banner-slider-1.jpg\" alt=\"First slide\">\r\n            <div class=\"container\">\r\n                <div class=\"banner-slider-inner\">\r\n                    <!-- Titel-->\r\n                    <h1><span>Best Hotels in Ooty, Resorts in Ooty -</span> Glen Park</h1>\r\n                    <!-- Paragraph -->\r\n                    <p>Our 68 rooms and suites are wonderfully comfortable with a sleek décor.</p>\r\n                    <!-- Btn -->\r\n                    <a href=\"#\" class=\"btn btn-fill\">view all rooms</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img class=\"second-slide\" src=\"assets/images/banner-slider-2.jpg\" alt=\"Second slide\">\r\n            <div class=\"container\">\r\n                <div class=\"banner-slider-inner\">\r\n                    <!-- Titel-->\r\n                    <h1><span>Best Hotels in Ooty, Resorts in Ooty -</span> Glen Park</h1>\r\n                    <!-- Paragraph -->\r\n                    <p>Our 68 rooms and suites are wonderfully comfortable with a sleek décor.</p>\r\n                    <!-- Btn -->\r\n                    <a href=\"#\" class=\"btn btn-fill\">view all rooms</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img class=\"third-slide\" src=\"assets/images/banner-slider-3.jpg\" alt=\"Third slide\">\r\n            <div class=\"container\">\r\n                <div class=\"banner-slider-inner\">\r\n                    <!-- Titel-->\r\n                    <h1><span>Best Hotels in Ooty, Resorts in Ooty -</span> Glen Park</h1>\r\n                    <!-- Paragraph -->\r\n                    <p>Our 68 rooms and suites are wonderfully comfortable with a sleek décor.</p>\r\n                    <!-- Btn -->\r\n                    <a href=\"#\" class=\"btn btn-fill\">view all rooms</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left fa fa-angle-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right fa fa-angle-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div><!-- /.carousel -->"

/***/ }),

/***/ "./src/app/home/slider/slider.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenSlider = /** @class */ (function () {
    function GlenSlider() {
    }
    GlenSlider = __decorate([
        core_1.Component({
            selector: 'glen-slider',
            template: __webpack_require__("./src/app/home/slider/slider.component.html")
        })
    ], GlenSlider);
    return GlenSlider;
}());
exports.GlenSlider = GlenSlider;


/***/ }),

/***/ "./src/app/services/cateringservice/catering.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Catering Service</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-2\">\r\n        <div class=\"container\">\r\n            <div class=\"main-title\">\r\n                <h1>CATERING SERVICE IN GLEN PARK</h1>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"row\">    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <p>We provide intuitive recommendations for perfect pairing of cuisines to accent the delicate flavours and spices of the hills. Guests will enjoy unmatched culinary experience at the Ooty´s fine dining restaurants that include, fine dining with indoor seating. Come and journey with us while overlooking the hills, nature would reveal the mystery of this special place. We serve sumptuous dishes that come alive with South Indian, Chinese and continental flavours, all delightful and delicious to the heart and soul. </p>\r\n                            \r\n                            <p>Our restaurant makes it a place to enjoy your fine dining with delicious and mouth watering food menu. We offer a distinctive dining experience, one that explores the nuances of the finest Indian and International Cuisines, serving traditional and contemporary favourites.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/catering.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<common-room-service></common-room-service>"

/***/ }),

/***/ "./src/app/services/cateringservice/catering.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenCateringService = /** @class */ (function () {
    function GlenCateringService() {
    }
    GlenCateringService = __decorate([
        core_1.Component({
            selector: 'glen-catering-service',
            template: __webpack_require__("./src/app/services/cateringservice/catering.component.html")
        })
    ], GlenCateringService);
    return GlenCateringService;
}());
exports.GlenCateringService = GlenCateringService;


/***/ }),

/***/ "./src/app/services/roomservice/room.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Room Service</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-2\">\r\n        <div class=\"container\">\r\n            <div class=\"main-title\">\r\n                <h1>ROOM SERVICE IN GLEN PARK</h1>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"row\">    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 details\">\r\n                            <h5>WIfi</h5>\r\n                            <p>Wifi broadband access is available throughout the hotel, so you can stay in touch with friends and family or take care of business anytime during your stay.</p>                            \r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>Laundry</h5>\r\n                            <p>Efficient and speedy laundry services that enhance your stay with the comforts of being at home.</p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 details\">\r\n                            <h5>Parking</h5>\r\n                            <p>Glen Park offers in-house parking facilities for hotel guests, so rest your wheels and enjoy convenience and security in our private parking.</p>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                            <div class=\"col-lg-12 col-md-12 col-sm-12 details\">\r\n                                <h5>Restaurant</h5>\r\n                                <p>An everyday-changing menu offers you a variety of appetising and wholesome fare. Vending machines for hot and cold beverages can be accessed even when restaurant is closed.</p>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <!-- Service box End-->                 \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/services/roomservice/room.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenRoomService = /** @class */ (function () {
    function GlenRoomService() {
    }
    GlenRoomService = __decorate([
        core_1.Component({
            selector: 'glen-room-service',
            template: __webpack_require__("./src/app/services/roomservice/room.component.html")
        })
    ], GlenRoomService);
    return GlenRoomService;
}());
exports.GlenRoomService = GlenRoomService;


/***/ }),

/***/ "./src/app/services/touristservice/tourist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Tourist Service</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-2\">\r\n        <div class=\"container\">\r\n            <div class=\"main-title\">\r\n                <h1>TOURIST SERVICE IN GLEN PARK</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"row\">    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <p>We proide tourism and travel-related services includes services provided by hotels and restaurants (including catering), travel agencies and tour operator services, tourist guide services and other related services. </p>                            \r\n                            <p>Whether you are an international travelers seeking to explore India or a domestic traveler looking for India vacations, we understand your perspective and deliver you the right travel services.</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                            <img src=\"assets/images/catering.jpg\" alt=\"photo-services-5\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<common-room-service></common-room-service>"

/***/ }),

/***/ "./src/app/services/touristservice/tourist.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenTouristService = /** @class */ (function () {
    function GlenTouristService() {
    }
    GlenTouristService = __decorate([
        core_1.Component({
            selector: 'glen-tourist-service',
            template: __webpack_require__("./src/app/services/touristservice/tourist.component.html")
        })
    ], GlenTouristService);
    return GlenTouristService;
}());
exports.GlenTouristService = GlenTouristService;


/***/ }),

/***/ "./src/app/tariff/tariff.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"service-page\">\r\n        <div class=\"banner-sec\">\r\n            <div class=\"container\">\r\n                <div class=\"col-md-12\">\r\n                    <h1>Tariff</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"hotel-service-2\">\r\n            <div class=\"container\">\r\n                <div class=\"main-title\">\r\n                    <h1>Glen Park Tariff (Season & Non-Season Backs)</h1>                \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"hotel-service-3\">\r\n            <div class=\"container\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"row\">    \r\n                        <!-- Service box Start-->\r\n                        <div *ngFor=\"let trif of tariff\" class=\"service-box clearfix\">\r\n                            <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                                    <h3>{{ trif.tariff_name }}</h3>\r\n                                    <p><b>{{ trif.season_one }}</b> - <b>{{ trif.season_two }}</b> - <b>{{ trif.season_three }}</b></p>\r\n                                    <table class=\"table responsive\">\r\n                                        <tr>\r\n                                            <th>Room Type</th>\r\n                                            <th>Price(Rs)</th>\r\n                                        </tr>\r\n                                        <tr *ngFor=\"let beds of trif.room_details\">\r\n                                            <td>{{ beds.bed }}</td>\r\n                                            <td>{{ beds.price }}</td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"col-lg-5 col-md-6 col-sm-12 item-photo\">\r\n                                    <img src=\"assets/images/{{trif.imagePath}}\" alt=\"photo-services-5\">\r\n                                </div>\r\n                        </div>\r\n                        <!-- Service box End-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <common-room-service></common-room-service>"

/***/ }),

/***/ "./src/app/tariff/tariff.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_tariff_service_1 = __webpack_require__("./src/app/data-service/data-tariff.service.ts");
var GlenTariff = /** @class */ (function () {
    function GlenTariff(_TariffDataSerive) {
        var _this = this;
        this._TariffDataSerive = _TariffDataSerive;
        this._TariffDataSerive.getTariff()
            .subscribe(function (res) { return _this.tariff = res; });
    }
    GlenTariff = __decorate([
        core_1.Component({
            selector: 'glen-tariff',
            template: __webpack_require__("./src/app/tariff/tariff.component.html")
        }),
        __metadata("design:paramtypes", [data_tariff_service_1.TariffDataService])
    ], GlenTariff);
    return GlenTariff;
}());
exports.GlenTariff = GlenTariff;


/***/ }),

/***/ "./src/app/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-page\">\r\n    <div class=\"banner-sec\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Testimonials</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-2\">\r\n        <div class=\"container\">\r\n            <div class=\"main-title\">\r\n                <h1>User Comments About Glen Park</h1>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"hotel-service-3\">\r\n        <div class=\"container\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"row\">    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 details\">\r\n                            <h5>-Selva Suriya</h5>\r\n                            <p>“ It was a wonderful experience staying at this hotel. Location is very beautiful and very near to some attractions. Front desk staff was excellent and very co-operative.we stayed 2 nights here and it was a very nice stay.”</p>                            \r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-7 col-md-6 col-sm-12 details\">\r\n                            <h5>-Ram Murthy</h5>\r\n                            <p>“ It was a wonderful experience staying at this hotel. I loved the intimate but warm feeling of this hotel. Your staff is excellent. This event was talked about by all my friends and they will definitely remember your hotel and service. Thanks for making it a perfect day.”</p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->\r\n    \r\n                    <!-- Service box Start-->\r\n                    <div class=\"service-box clearfix\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 details\">\r\n                            <h5>-Sri Ram</h5>\r\n                            <p>“ Good service, clean room, decent WiFi speeds & great food. I stayed in the 3 Bed Cottage Room and found it be good value for the money you spend on it.” </p>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <!-- Service box End-->           \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GlenTestimonial = /** @class */ (function () {
    function GlenTestimonial() {
    }
    GlenTestimonial = __decorate([
        core_1.Component({
            selector: 'glen-testimonial',
            template: __webpack_require__("./src/app/testimonial/testimonial.component.html")
        })
    ], GlenTestimonial);
    return GlenTestimonial;
}());
exports.GlenTestimonial = GlenTestimonial;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var room_component_1 = __webpack_require__("./src/app/services/roomservice/room.component.ts");
var catering_component_1 = __webpack_require__("./src/app/services/cateringservice/catering.component.ts");
var tourist_component_1 = __webpack_require__("./src/app/services/touristservice/tourist.component.ts");
var cottage_component_1 = __webpack_require__("./src/app/cottages/cottage.component.ts");
var tariff_component_1 = __webpack_require__("./src/app/tariff/tariff.component.ts");
var contact_component_1 = __webpack_require__("./src/app/contact/contact.component.ts");
var gallery_component_1 = __webpack_require__("./src/app/gallery/gallery.component.ts");
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
var destination_component_1 = __webpack_require__("./src/app/destination/destination.component.ts");
var testimonial_component_1 = __webpack_require__("./src/app/testimonial/testimonial.component.ts");
exports.appRoutes = [
    { path: '', component: home_component_1.GlenHomePage },
    { path: 'room-services', component: room_component_1.GlenRoomService },
    { path: 'catering-services', component: catering_component_1.GlenCateringService },
    { path: 'tourist-services', component: tourist_component_1.GlenTouristService },
    { path: 'cottages', component: cottage_component_1.GlenCottage },
    { path: 'tariff', component: tariff_component_1.GlenTariff },
    { path: 'contact', component: contact_component_1.GlenContact },
    { path: 'gallery', component: gallery_component_1.GlenGallery },
    { path: 'about', component: about_component_1.GlenAbout },
    { path: 'destination', component: destination_component_1.GlenDestination },
    { path: 'testimonial', component: testimonial_component_1.GlenTestimonial },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map