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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<notifier-container></notifier-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxFlex fxLayoutAlign=\"center center\">\n    <mat-card fxFlex.md=\"100%\" fxFlex.lt-md=\"100%\" fxFlex=\"120rem\">\n\n        <mat-card>\n\n            <mat-toolbar>\n                <mat-icon [routerLink]=\"[ '/']\">\n                    keyboard_backspace\n                </mat-icon>\n                Panel obsługi kompanii\n            </mat-toolbar>\n\n            <div \n            fxLayout=\"row wrap\" fxLayoutAlign=\"flex-start\" fxLayout.lt-sm=\"column\" >\n            <ng-container >\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <img matTooltip=\"Dowódca kompanii\" class=\"commander-icon\" src=\"../../assets/commander.png\"> Dowódca kompanii\n            </mat-card>\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <b>{{company?._Dowodca?.imie}} {{company?._Dowodca?.nazwisko}}</b>\n            </mat-card>\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <img id=\"soldiers\" matTooltip=\"Numer kompanii\" class=\"commander-icon\" src=\"../../assets/soldiers.png\">Numer kompanii\n            </mat-card>\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <b>{{company?.nrKompanii}}</b>\n            </mat-card>\n            </ng-container>\n          </div>\n\n        </mat-card>\n\n        <mat-card>\n            <mat-card-content>\n\n                <ng-container *ngIf=\"user?.soldier?.idOsoby === company?.idDowodcy\">\n                    <form class=\"block\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput #pNum name='pNum' type=\"text\" placeholder=\"Numer plutonu\">\n                        </mat-form-field>\n                    </form>\n                    <button class=\"block\" mat-raised-button color=\"primary\" value=\"Utwórz\" (click)=\"createPlatoon(pNum.value)\">Utwórz pluton</button>\n                </ng-container>\n                \n                \n\n                <button matTooltip=\"Lista żołnierzy\" mat-raised-button color='primary' (click)=\"showContent(1)\">\n                    <mat-icon>people</mat-icon>\n                </button>\n\n                <button *ngIf=\"user?.soldier?.idOsoby === company?.idDowodcy && company?._Prosby.length === 0\" matTooltip=\"Prośby o dołaczenie do kompanii\" mat-raised-button color='primary' (click)=\"showContent(2)\">\n                    <mat-icon>email</mat-icon>\n                </button>\n\n                <button *ngIf=\"user?.soldier?.idOsoby === company?.idDowodcy && company?._Prosby.length > 0\" matTooltip=\"Prośby o dołaczenie do kompanii\" mat-raised-button color='primary' matBadgeSize=\"small\"\n                matBadge=\"!\" matBadgePosition=\"before\" matBadgeColor=\"accent\" (click)=\"showContent(2)\">\n                    <mat-icon>email</mat-icon>\n                </button>\n\n                <button matTooltip=\"Wyślij wiadomość do podwładnych\" mat-raised-button color='primary' (click)=\"showContent(3)\">\n                    <mat-icon>send</mat-icon>\n                </button>\n\n                <button matTooltip=\"Przeglądaj pliki i foldery\" mat-raised-button color='primary' (click)=\"showContent(4)\">\n                    <mat-icon>create_new_folder</mat-icon>\n                </button>\n\n                <button matTooltip=\"Przeglądaj plan\" mat-raised-button color='primary' (click)=\"showContent(5)\">\n                    <mat-icon>view_list</mat-icon>\n                </button>\n\n                <button matTooltip=\"Zwiń okno\" mat-raised-button color='primary' (click)=\"showContent(6)\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card *ngIf=\"soldierListShow\">\n            <mat-toolbar>\n                <mat-icon class=\"toolbar-icon\">people</mat-icon>\n                Przegląd kompanii:\n            </mat-toolbar>\n            <h5>\n                <b>Żołnierze kompanii :</b>\n            </h5>\n            <br><br>\n\n            <mat-chip-list>\n                <mat-basic-chip disabled selected *ngFor=\"let s of company?._Zolnierze\">\n                    <b>{{s?.imie}} {{s?.nazwisko}}</b>\n                </mat-basic-chip>\n            </mat-chip-list>\n            <br>\n            <h5>\n                <b>Plutony kompanii :</b>\n            </h5>\n            <br><br>\n\n            <div *ngFor=\"let p of company?._Plutony\" class=\"block\">\n                <button mat-raised-button color=\"accent\" *ngIf=\"p?.nrPlutonu === user.soldier.nrPlutonu && p?.idDowodcy === user?.userId; \" [routerLink]=\"[ '/company', company.nrKompanii, user.soldier.nrPlutonu]\">\n                    <img src=\"../../assets/platoon_icon_member.png\">Pluton {{p?.nrPlutonu}} ( jesteś dowódcą )\n                </button>\n                <button mat-raised-button color=\"accent\" *ngIf=\"p?.nrPlutonu === user.soldier.nrPlutonu && p?.idDowodcy !== user?.userId; \"  [routerLink]=\"[ '/company', company.nrKompanii, user.soldier.nrPlutonu]\">\n                    <img src=\"../../assets/platoon_icon_member.png\">Pluton {{p?.nrPlutonu}} ( jesteś członkiem )\n                </button>\n                    <button mat-raised-button color=\"primary\" *ngIf=\"p?.nrPlutonu !== user.soldier.nrPlutonu && p?.idDowodcy !== user?.userId; \"  (click)=\"openDialog(p?.nrPlutonu)\">\n                        <img  src=\"../../assets/platoon_icon.png\">Pluton {{p?.nrPlutonu}}\n                    </button>\n               \n            </div>\n\n\n        </mat-card>\n\n        <mat-card *ngIf=\"addAskShow\">\n            <mat-toolbar>\n                <mat-icon class=\"toolbar-icon\">email</mat-icon>\n                Wiadomości\n            </mat-toolbar>\n            <mat-card-content>\n                <h5>\n                    <b>Prośby do dowódcy kompanii :</b>\n                </h5>\n                <br>\n                <ng-container *ngIf=\"user?.soldier?.idOsoby === company?.idDowodcy\">\n                    <ng-container *ngFor=\"let r of company?._Prosby\">\n                        <br>\n                        <br>\n                        <br>\n                        <div class=\"asks\">\n\n\n                            <span>Żołnierz <b> {{r?._Zglaszajacy?.imie}} {{r?._Zglaszajacy?.nazwisko}} </b> prosi o zaakceptowanie {{Request.getRequestTypeString(r?.typProsby)}}</span>\n                            <br>\n                            <mat-chip-list>\n                                <mat-chip (click)=\"request(r?.idProsby, true)\" color=\"primary\" selected>Akceptuj</mat-chip>\n                                <mat-chip (click)=\"request(r?.idProsby, false)\" color=\"accent\" selected>Odrzuć</mat-chip>\n                            </mat-chip-list>\n                        </div>\n                    </ng-container>\n                </ng-container>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card *ngIf=\"sendMessageShow\">\n            <mat-toolbar>\n                <mat-icon class=\"toolbar-icon\">send</mat-icon>\n                Wyślij wiadomość do podwładnych:\n            </mat-toolbar>\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Grupa docelowa\" #target  [(ngModel)]=\"targetInput\">\n                        <mat-option value=\"all\">Cała kompania</mat-option>\n                        <mat-option value=\"ass\">Tylko funkcyjni</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field>\n                    <input #title [(ngModel)]=\"titleInput\" matInput placeholder=\"Tytuł wiadomości\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <textarea #msg [(ngModel)]=\"msgInput\" matInput placeholder=\"Treść wiadomości\"></textarea>\n                </mat-form-field>\n\n            </div>\n            <button class=\"block\" mat-raised-button color=\"primary\" value=\"Wyślij\" (click)=\"sendNotification(target.value, title.value, msg.value)\">Wyślij powiadomienie</button>\n        </mat-card>\n\n        <mat-card *ngIf=\"filesShow\">\n            <mat-toolbar>\n                <mat-icon class=\"toolbar-icon\">folder_open</mat-icon>\n                Foldery i pliki:\n            </mat-toolbar>\n\n            <form class=\"block\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput #newFolder type=\"text\" placeholder=\"Nazwa folderu\">\n                </mat-form-field>\n            </form>\n\n            <button class=\"block\" mat-raised-button color=\"primary\" value=\"Utwórz\" (click)=\"createFolder(newFolder.value, null)\">Utwórz nowy folder</button>\n\n\n            <!--https://v2.clarity.design/tree-view-->\n            <clr-tree [clrLazy]=\"true\">\n                <clr-tree-node *clrRecursiveFor=\"let ff of fileTree | async; getChildren: getTreeSubfolders\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"ff\"\n                    [clrExpandable]=\"ff?.isFolder && (ff?.folder._KatalogiPodrzedne.length > 0 || ff?.folder._Pliki.length > 0)\">\n                    <clr-icon class=\"is-solid\" *ngIf=\"ff?.isFolder\" shape=\"folder\"></clr-icon>\n                    <clr-icon class=\"is-solid file\" *ngIf=\"!ff?.isFolder\" shape=\"file\"></clr-icon>\n                    <ng-container *ngIf=\"ff?.isFolder; else elseFile\">{{ff?.folder.nazwa}}</ng-container>\n                    <ng-template #elseFile>{{ff?.file.opis}}</ng-template>\n                </clr-tree-node>\n            </clr-tree>\n\n            <!--https://github.com/isaacplmann/ngx-contextmenu-->\n            <context-menu #withFunctions [menuClass]=\"'mystyle'\" >\n\n                <ng-template let-item contextMenuItem [visible]=\"isFolder\"  (execute)=\"openContextMenu($event.item?.folder.idKatalogu, 'Utworz podfolder', 'Nazwa folderu',1)\">\n                        <img src=\"../../assets/create_folder.png\"> Utwórz podfolder\n                    </ng-template>\n\n                <ng-template let-item contextMenuItem [visible]=\"isFolder\" [enabled]=\"true\" (execute)=\"openContextMenu($event.item?.folder.idKatalogu, 'Zmień nazwę folderu', 'Nowa nazwa folderu',2)\">\n                        <img src=\"../../assets/rename_folder.png\"> Zmień nazwę\n                </ng-template>\n\n                <ng-template let-item contextMenuItem [visible]=\"isFolder\" [enabled]=\"true\" (execute)=\"uploadFile($event.item?.folder.idKatalogu)\">\n                        <img src=\"../../assets/upload_folder.png\"> Prześlij plik\n                </ng-template>  \n\n                <ng-template  let-item contextMenuItem [visible]=\"user?.soldier?.idOsoby === company?.idDowodcy\" [enabled]=\"user?.soldier?.idOsoby === company?.idDowodcy\" \n                (execute)=\"openContextMenu($event.item?.folder.idKatalogu, 'Czy chcesz usunąc folder', '',3)\">\n                        <img src=\"../../assets/delete_folder.png\"> Usuń cały folder\n                </ng-template>\n\n                <ng-template let-item contextMenuItem [visible]=\"isFile\" (execute)=\"downloadFile($event.item?.file.idPliku)\">\n                        <img src=\"../../assets/download_file.png\"> Pobierz plik\n                </ng-template>\n\n                <ng-template contextMenuItem divider=\"true\"></ng-template>\n            </context-menu>\n\n\n\n            <input type=\"file\" ng2FileSelect hidden #fileInput (change)=\"selectFile($event)\" />\n            <br>\n        </mat-card>\n\n        <mat-card *ngIf=\"showScheduleFlag\">\n            <mat-toolbar>\n                <mat-icon class=\"toolbar-icon\">view_list</mat-icon>\n                Plan zajęć\n            </mat-toolbar>\n            <br>\n            <div>\n            <button mat-raised-button color=\"primary\" (click)=\"openScheduleImage(timeTableImg)\">\n                <mat-icon>view_list</mat-icon> Wyświetl plan</button>\n            <input type=\"file\" ng2FileSelect hidden #timetableInput (change)=\"selectTimetable($event)\" />\n            <button class=\"block\" mat-raised-button color=\"primary\" (click)=\"updateCompanyTimetable()\">\n                    <mat-icon>cloud_upload</mat-icon> Prześlij nowy plan</button>\n            </div>\n        </mat-card>\n\n    </mat-card>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/modal.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/modal.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1 mat-dialog-title fxLayout fxLayoutAlign=\"center center\">Brak uprawnień</h1>\n    <div mat-dialog-content>\n        <p fxLayout fxLayoutAlign=\"center center\">Nie możesz przejść do {{data.platoonId}} plutonu, którego nie jesteś członkiem.\n            W takim przypadku możesz wysłać prośbę o dołączenie do plutonu wybierając odpowiednie stanowisko\n        </p><br><br>\n        <mat-label>Wybierz stanowisko</mat-label>\n        <mat-form-field>\n            \n            <mat-select #sel>\n                <mat-option value=\"com\">\n                    Dowódca plutonu\n                </mat-option>\n                <mat-option value=\"sol\">\n                    Podchorąży\n                </mat-option>\n            </mat-select>\n        </mat-form-field> <br><br><br><br>\n\n    </div>\n    <div mat-dialog-actions fxLayout fxLayoutAlign=\"center center\">\n        <button mat-raised-button color=\"accent\" (click)=\"onNoClick()\">Nie wysyłaj</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit(sel.value)\" cdkFocusInitial>Wyślij</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxFlex fxLayoutAlign=\"center center\">\r\n  <mat-card fxFlex.md=\"100%\" fxFlex.lt-md=\"100%\" fxFlex=\"120rem\">\r\n\r\n    <h2>\r\n      <button mat-raised-button color='primary' (click)=\"logOut()\">\r\n        <mat-icon>directions_run</mat-icon>\r\n      </button>\r\n    </h2>\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Informacje personalne\r\n          </mat-panel-title>\r\n\r\n        </mat-expansion-panel-header>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"flex-start\" fxLayout.lt-sm=\"column\">\r\n          <ng-container>\r\n            <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\r\n              <img src=\"../../assets/soldier_header_info_icon.png\">\r\n              Żołnierz :\r\n              <b>{{user?.soldier?.imie}} {{user?.soldier?.nazwisko}}</b>\r\n            </mat-card>\r\n            <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\r\n              <img src=\"../../assets/platoon_header_info_icon.png\"> Numer kompanii :\r\n              <b>{{user?.soldier?.nrKompanii}}</b>\r\n            </mat-card>\r\n            <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\r\n              <img src=\"../../assets/commander_header_info_icon.png\"> Funkcyjny :\r\n              <b> {{user?.soldier?.funkcyjny ? 'TAK' : 'NIE'}}</b>\r\n            </mat-card>\r\n            <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\r\n              <img src=\"../../assets/platoon_header_info_icon.png\"> Numer plutonu :\r\n              <b>{{user?.soldier?.nrPlutonu}}</b>\r\n            </mat-card>\r\n\r\n          </ng-container>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n    </mat-accordion>\r\n\r\n\r\n    <form class=\"block\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput #cNum name='cNum' type=\"text\" placeholder=\"Numer kompanii\">\r\n      </mat-form-field>\r\n    </form>\r\n\r\n    <button class=\"block\" mat-raised-button color=\"primary\" value=\"Utwórz\" (click)=\"createCompany(cNum.value)\">Utwórz kompanię</button>\r\n\r\n    <mat-card-content>\r\n\r\n      <div class=\"mat-elevation-z8\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <!-- ID Column -->\r\n          <ng-container matColumnDef=\"icon\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol jednostki organizacyjnej </th>\r\n            <td mat-cell *matCellDef=\"let data\">\r\n              <img *ngIf=\"data?.nrKompanii === user?.soldier.nrKompanii\" src=\"../../assets/mens_grey.jpg\">\r\n              <img *ngIf=\"data?.nrKompanii != user?.soldier.nrKompanii\" src=\"../../assets/mens.jpg\"> </td>\r\n          </ng-container>\r\n\r\n          <!-- Course name Column -->\r\n          <ng-container matColumnDef=\"nrKompanii\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Numer Kompanii </th>\r\n            <td mat-cell *matCellDef=\"let data\">{{data?.nrKompanii}}</td>\r\n          </ng-container>\r\n\r\n\r\n          <!-- Action Column -->\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Dołącz lub przejdź </th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n              <span *ngIf=\"row?.nrKompanii === user?.soldier?.nrKompanii\">\r\n                <img class=\"commander-icon\" src=\"../../assets/commander.png\">\r\n              </span>\r\n              <mat-icon *ngIf=\"user?.soldier?.nrKompanii === null && joinCompanySent === false\" class=\"icon-add positive\" (click)=\"joinCompany(row.nrKompanii)\">group_add </mat-icon>\r\n              <mat-icon *ngIf=\"row?.nrKompanii === user?.soldier?.nrKompanii\" class=\"icon-add neutral\" (click)=\"getCompanyDetails(row?.nrKompanii)\">search </mat-icon>\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n          </tr>\r\n        </table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n\r\n  </mat-card>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout fxLayoutAlign=\"center center\">\n  <mat-card fxFlex.xs=\"100%\" fxFlex=\"40rem\" class=\"card-center\">\n    <mat-card-title fxLayoutAlign=\"center\">\n      <img src=\"../../assets/login_soldier_icon.png\">\n    </mat-card-title>\n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"container\" >\n\n      <mat-form-field hintLabel=\"Pole nie może być puste\">\n        <input type=\"text\" matInput placeholder=\"Your Login\" formControlName=\"login\" id=\"defaultForm-email\" name=\"username\" placeholder=\"Username\" [ngClass]=\"{'isValid': loginForm.get('login').errors\n        && loginForm.get('login').touched}\" login required >\n        <mat-error >Pole nie może być puste</mat-error>\n        <mat-label>\n          <mat-icon>account_circle</mat-icon> Nazwa użytkownika\n        </mat-label>\n      </mat-form-field>\n\n      <mat-form-field hintLabel=\"Pole nie może być puste\">\n        <input type=\"password\" matInput placeholder=\"Your password\"  formControlName=\"pass\" id=\"defaultForm-pass\" name=\"password\" placeholder=\"Password\" [ngClass]=\"{'isValid': loginForm.get('pass').errors\n        && loginForm.get('pass').touched}\"\n          required>\n          <mat-error >Pole nie może być puste</mat-error>\n        <mat-label>\n          <mat-icon>vpn_key</mat-icon> Hasło\n        </mat-label>\n      </mat-form-field>\n\n      <mat-card-actions fxLayout fxLayoutAlign=\"center\">\n        <button class=\"login-button\" type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n      </mat-card-actions>\n      <span class=\"font-small grey-text d-flex justify-content-center\">\n        Nie masz konta?\n        <a [routerLink]='[\"/register\"]' class=\"dark-grey-text font-weight-bold ml-1\"> Zarejestruj się</a>\n      </span>\n    </form>\n\n  </mat-card>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/context-menu-modal/context-modal.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/context-menu-modal/context-modal.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1 mat-dialog-title fxLayout fxLayoutAlign=\"center center\">{{data.modalTitle}}</h1>\n    <div mat-dialog-content>\n        <!-- <p fxLayout fxLayoutAlign=\"center center\">Nie możesz przejść do {{data.platoonId}} plutonu, którego nie jesteś członkiem.\n                W takim przypadku możesz wysłać prośbę o dołączenie do plutonu wybetrierając odpowiednie stanowisko\n            </p><br><br> -->\n        <br>\n\n        <mat-form-field  *ngIf=\"data.modalPlaceholder\">\n            <input matInput [(ngModel)]=\"data.folderName\" placeholder=\"{{data.modalPlaceholder}}\">\n        </mat-form-field>\n\n        <mat-checkbox *ngIf=\"!data.modalPlaceholder\" [(ngModel)]=\"data.checked\">Zaznacz aby usunąć</mat-checkbox>\n\n        <br><br><br><br>\n    </div>\n    <div mat-dialog-actions fxLayout fxLayoutAlign=\"center center\">\n        <button mat-raised-button color=\"accent\" (click)=\"onNoClick()\">Zamknij</button>\n        <button *ngIf=\"data.modalPlaceholder\" mat-raised-button color=\"primary\" [mat-dialog-close]=\"data.folderName\" cdkFocusInitial>Wykonaj</button>\n        <button *ngIf=\"!data.modalPlaceholder\" mat-raised-button color=\"primary\" [mat-dialog-close]=\"data.checked\" cdkFocusInitial>Wykonaj</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/schedule-modal.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/schedule-modal.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1 mat-dialog-title fxLayout fxLayoutAlign=\"center center\">Plan zajęć</h1>\n    <div mat-dialog-content>\n   \n       \n        <p *ngIf=\"!data.scheduleImage\" fxLayout fxLayoutAlign=\"center center\">Brak planu zajęć\n        </p><br><br>\n        <img *ngIf=\"data.scheduleImage\" [src]=\"data.scheduleImage\" width=\"1000px\">\n\n    </div>\n    <div mat-dialog-actions fxLayout fxLayoutAlign=\"center center\">\n        <button mat-raised-button color=\"accent\" mat-dialog-close>Zamknij</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"false\">\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <span>\n        <img src=\"../../assets/logo.png\">\n      </span>\n      <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n        <ul fxLayout fxLayoutGap=\"5px\">\n\n          <li>\n            <a [matMenuTriggerFor]=\"menu\">\n              <img class=\"menu\" mat-card-avatar src=\"../../assets/menu_icon2.png\" alt=\"user menu icon\">\n            </a>\n          <li>\n          </li>\n        </ul>\n      </div>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<mat-menu #menu=\"matMenu\">\n\n  <button mat-menu-item (click)=\"logOut()\" [routerLink]=\"['/login']\">\n    <mat-icon>directions_run</mat-icon>\n    <span>Wyloguj</span>\n  </button>\n  <button mat-menu-item [routerLink]=\"['/company', user?.soldier?.nrKompanii]\" *ngIf=\"user?.soldier?.nrKompanii !== null\">\n    <mat-icon>group</mat-icon>\n    <span>Kompania</span>\n  </button>\n  <button mat-menu-item [routerLink]=\"['/company', user?.soldier?.nrKompanii, user?.soldier?.nrPlutonu]\" *ngIf=\"user?.soldier?.nrPlutonu !== null\">\n    <mat-icon>folder_shared</mat-icon>\n    <span>Pluton</span>\n  </button>\n</mat-menu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/platoon/platoon.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/platoon/platoon.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxFlex fxLayoutAlign=\"center center\">\n    <mat-card fxFlex.md=\"100%\" fxFlex.lt-md=\"100%\" fxFlex=\"120rem\">\n\n        <mat-card>\n            <mat-toolbar>\n                <mat-icon [routerLink]=\"['/company', platoon?.nrKompanii]\">\n                    keyboard_backspace\n                </mat-icon>\n                Panel obsługi plutonu\n            </mat-toolbar>\n\n            <div \n            fxLayout=\"row wrap\" fxLayoutAlign=\"flex-start\" fxLayout.lt-sm=\"column\" >\n            <ng-container >\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <img matTooltip=\"Dowódca kompanii\" class=\"commander-icon\" src=\"../../assets/commander.png\"> Dowódca plutonu\n            </mat-card>\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <b>{{platoon?._Dowodca?.imie}} {{platoon?._Dowodca?.nazwisko}}</b>\n            </mat-card>\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <img id=\"soldiers\" matTooltip=\"Numer kompanii\" class=\"commander-icon\" src=\"../../assets/soldiers.png\">Numer plutonu\n            </mat-card>\n              <mat-card class=\"header-info\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n              fxFlex.lt-sm=\"100%\" fxFlex=\"0 1 calc(49%)\">\n              <b>{{platoon?.nrPlutonu}}</b>\n            </mat-card>\n            </ng-container>\n          </div>\n\n        </mat-card>\n        <mat-card>\n            <mat-card-content>\n                \n                <button matTooltip=\"Lista żołnierzy\" mat-raised-button color='primary' (click)=\"showContent(1)\">\n                    <mat-icon>people</mat-icon>\n                </button>\n\n                <button *ngIf=\"user?.soldier?.idOsoby === platoon?.idDowodcy && platoon?._Prosby.length === 0\" matTooltip=\"Prośby o dołaczenie do plutonu\" mat-raised-button color='primary' (click)=\"showContent(2)\">\n                    <mat-icon>email</mat-icon>\n                </button>\n\n                <button *ngIf=\"user?.soldier?.idOsoby === platoon?.idDowodcy && platoon?._Prosby.length > 0\" matTooltip=\"Prośby o dołaczenie do plutonu\" mat-raised-button color='primary'matBadgeSize=\"small\"\n                matBadge=\"!\" matBadgePosition=\"before\" matBadgeColor=\"accent\" (click)=\"showContent(2)\">\n                    <mat-icon>email</mat-icon>\n                </button>\n\n                <button matTooltip=\"Wyślij wiadomość do podwładnych\" mat-raised-button color='primary' (click)=\"showContent(3)\">\n                    <mat-icon>send</mat-icon>\n                </button>\n\n                <button matTooltip=\"Przeglądaj pliki i foldery\" mat-raised-button color='primary' (click)=\"showContent(4)\">\n                    <mat-icon>create_new_folder</mat-icon>\n                </button>\n                <button (click)=\"requestAssRole()\" *ngIf=\"!user?.soldier?.funkcyjny && user.userId !== platoon?.idDowodcy\" matTooltip=\"Dołącz jako funkcyjny\" mat-raised-button color='primary' >\n                    <mat-icon>person_add</mat-icon>\n                </button>\n\n                <button matTooltip=\"Zwiń okno\" mat-raised-button color='primary' (click)=\"showContent(6)\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card *ngIf=\"soldierListShow\">\n                <h5>\n                    <b>Funkcyjni Plutonu :</b>\n                </h5>\n                <br>\n                <mat-chip-list>\n                    <mat-basic-chip disabled selected *ngFor=\"let s of getFunkcyjni() | async\">\n                        <b>{{s?.imie}} {{s?.nazwisko}}</b> \n                    </mat-basic-chip>\n                </mat-chip-list>\n            <h5>\n                <b>Żołnierze Plutonu :</b>\n            </h5>\n            <br>\n            <mat-chip-list>\n                <mat-basic-chip disabled selected *ngFor=\"let s of platoon?._Zolnierze\">\n                   <b>{{s?.imie}} {{s?.nazwisko}}</b> \n                </mat-basic-chip>\n            </mat-chip-list>\n        </mat-card>\n\n        <mat-card *ngIf=\"addAskShow\">\n            <mat-card-content>\n                <h5>\n                    <b>Prośby do dowódcy plutonu :</b>\n                </h5>\n                <br>\n                <ng-container *ngIf=\"user?.soldier?.idOsoby === platoon?.idDowodcy\">\n                    <ng-container *ngFor=\"let r of platoon?._Prosby\">\n                            <br>\n                            <br>\n                            <br>\n                        <div class=\"asks\">\n                          <br>\n                            <span >Żołnierz <b> {{r?._Zglaszajacy?.imie}} {{r?._Zglaszajacy?.nazwisko}} </b> prosi o zaakceptowanie {{Request.getRequestTypeString(r?.typProsby)}}</span>\n\n                            <mat-chip-list aria-label=\"Fish selection\">\n                                <mat-chip (click)=\"request(r?.idProsby, true)\" color=\"primary\" selected>Akceptuj</mat-chip>\n                                <mat-chip (click)=\"request(r?.idProsby, false)\" color=\"accent\" selected>Odrzuć</mat-chip>\n                            </mat-chip-list>\n                        </div>\n                    </ng-container>\n                </ng-container>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card *ngIf=\"sendMessageShow\">\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Grupa docelowa\" #target>\n                        <mat-option value=\"all\">Cały pluton</mat-option>\n                        <mat-option value=\"ass\">Tylko funkcyjni</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field>\n                    <input #title matInput placeholder=\"Tytuł wiadomości\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <textarea #msg matInput placeholder=\"Treść wiadomości\"></textarea>\n                </mat-form-field>\n\n\n            </div>\n            <button class=\"block\" mat-raised-button color=\"primary\" value=\"Wyślij\" (click)=\"sendNotification(target.value, title.value, msg.value)\">Wyślij powiadomienie</button>\n        </mat-card>\n\n        <mat-card *ngIf=\"filesShow\">\n            <mat-toolbar>\n                <mat-icon class=\"toolbar-icon\">folder_open</mat-icon>\n                Foldery i pliki:\n            </mat-toolbar>\n\n            <form class=\"block\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput #newFolder type=\"text\" placeholder=\"Nazwa folderu\">\n                </mat-form-field>\n            </form>\n\n            <button class=\"block\" mat-raised-button color=\"primary\" value=\"Utwórz\" (click)=\"createFolder(newFolder.value, null)\">Utwórz nowy folder</button>\n\n            <!--https://v2.clarity.design/tree-view-->\n            <clr-tree [clrLazy]=\"true\">\n                <clr-tree-node *clrRecursiveFor=\"let ff of fileTree | async; getChildren: getTreeSubfolders\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"ff\"\n                    [clrExpandable]=\"ff?.isFolder && (ff?.folder._KatalogiPodrzedne.length > 0 || ff?.folder._Pliki.length > 0)\">\n                    <clr-icon class=\"is-solid\" *ngIf=\"ff?.isFolder\" shape=\"folder\"></clr-icon>\n                    <clr-icon class=\"is-solid file\" *ngIf=\"!ff?.isFolder\" shape=\"file\"></clr-icon>\n                    <ng-container *ngIf=\"ff?.isFolder; else elseFile\">{{ff?.folder.nazwa}}</ng-container>\n                    <ng-template #elseFile>{{ff?.file.opis}}</ng-template>\n                </clr-tree-node>\n            </clr-tree>\n\n            <context-menu #withFunctions [menuClass]=\"'mystyle'\" >\n\n                    <ng-template let-item contextMenuItem [visible]=\"isFolder\"  (execute)=\"openContextMenu($event.item?.folder.idKatalogu, 'Utworz podfolder', 'Nazwa folderu',1)\">\n                            <img src=\"../../assets/create_folder.png\"> Utwórz podfolder\n                        </ng-template>\n    \n                    <ng-template let-item contextMenuItem [visible]=\"isFolder\" [enabled]=\"true\" (execute)=\"openContextMenu($event.item?.folder.idKatalogu, 'Zmień nazwę folderu', 'Nowa nazwa folderu',2)\">\n                            <img src=\"../../assets/rename_folder.png\"> Zmień nazwę\n                    </ng-template>\n    \n                    <ng-template let-item contextMenuItem [visible]=\"isFolder\" [enabled]=\"true\" (execute)=\"uploadFile($event.item?.folder.idKatalogu)\">\n                            <img src=\"../../assets/upload_folder.png\"> Prześlij plik\n                    </ng-template>  \n    \n                    <ng-template  let-item contextMenuItem [visible]=\"user?.soldier?.idOsoby === platoon?.idDowodcy\" [enabled]=\"user?.soldier?.idOsoby === platoon?.idDowodcy\" \n                    (execute)=\"openContextMenu($event.item?.folder.idKatalogu, 'Czy chcesz usunąc folder', '',3)\">\n                            <img src=\"../../assets/delete_folder.png\"> Usuń cały folder\n                    </ng-template>\n    \n                    <ng-template let-item contextMenuItem [visible]=\"isFile\" (execute)=\"downloadFile($event.item?.file.idPliku)\">\n                            <img src=\"../../assets/download_file.png\"> Pobierz plik\n                    </ng-template>\n    \n                    <ng-template contextMenuItem divider=\"true\"></ng-template>\n                </context-menu>\n\n            <input type=\"file\" ng2FileSelect hidden #fileInput (change)=\"selectFile($event)\" />\n            <br>\n        </mat-card>\n    </mat-card>\n</section>\n<notifier-container></notifier-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout fxLayoutAlign=\"center center\">\n  <mat-card fxFlex.xs=\"100%\" fxFlex=\"40rem\" class=\"card-center\">\n    <mat-card-title fxLayoutAlign=\"center\">\n      <img src=\"../../assets/login_soldier_icon.png\">\n    </mat-card-title>\n\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"container\" >\n\n      <mat-form-field hintLabel=\"Pole nie może być puste\">\n        <input type=\"text\" formControlName=\"firstName\" matInput placeholder=\"Your Login\"  name=\"username\" placeholder=\"Username\" [ngClass]=\"{'isValid': registerForm.get('firstName').errors\n        && registerForm.get('firstName').touched}\">\n        <mat-error >Pole nie może być puste</mat-error>\n        <mat-label>\n          <mat-icon>account_circle</mat-icon> Imię\n        </mat-label>\n      </mat-form-field>\n\n      <mat-form-field hintLabel=\"Pole nie może być puste\">\n        <input type=\"text\" formControlName=\"familyName\" formControlName=\"familyName\" matInput placeholder=\"Your Login\"  name=\"username\" placeholder=\"Username\" \n        [ngClass]=\"{'isValid': registerForm.get('familyName').errors\n        && registerForm.get('familyName').touched}\" >\n        <mat-error >Pole nie może być puste</mat-error>\n        <mat-label>\n          <mat-icon>account_circle</mat-icon> Nazwisko\n        </mat-label>\n      </mat-form-field>\n\n      <mat-form-field hintLabel=\"Pole nie może być puste\">\n        <input type=\"password\" matInput placeholder=\"Your password\"  formControlName=\"pass\" id=\"defaultForm-pass\" name=\"password\" placeholder=\"Password\" \n            required [ngClass]=\"{'isValid': registerForm.get('pass').touched}\" >\n            <mat-error >Pole nie może być puste</mat-error>\n        <mat-label>\n          <mat-icon>vpn_key</mat-icon> Hasło\n        </mat-label>\n      </mat-form-field>\n\n      <mat-form-field hintLabel=\"Hasła muszą się zgadzać\">\n        <input type=\"password\" matInput placeholder=\"Your password\" formControlName=\"confirmPass\" id=\"defaultForm-pass\" name=\"password\" placeholder=\"Password\" \n          required [ngClass]=\"{'isValid': registerForm.get('confirmPass').touched}\">\n          <mat-error >Hasła muszą się zgadzać</mat-error>\n        <mat-label>\n          <mat-icon>vpn_key</mat-icon> Potwierdż hasło\n        </mat-label>\n      </mat-form-field>\n\n      <mat-card-actions fxLayout fxLayoutAlign=\"center\">\n        <button class=\"login-button\" type=\"submit\" mat-raised-button color=\"primary\">Zarejestruj</button>\n      </mat-card-actions>\n      <span class=\"font-small grey-text d-flex justify-content-center\">\n        Nie masz konta?\n        <a [routerLink]='[\"/login\"]' class=\"dark-grey-text font-weight-bold ml-1\"> Zaloguj się</a>\n      </span>\n    </form>\n\n  </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _platoon_platoon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platoon/platoon.component */ "./src/app/platoon/platoon.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.guard */ "./src/services/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");









const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'company/:companyId/:platoonId', component: _platoon_platoon_component__WEBPACK_IMPORTED_MODULE_1__["PlatoonComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'company/:companyId', component: _company_company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n  background-image: url('military_background.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXF9fUHJvamVrdCBUSU1cXFdlYiBDbGllbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvbWlsaXRhcnlfYmFja2dyb3VuZC5qcGdcIik7XG59IiwibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL21pbGl0YXJ5X2JhY2tncm91bmQuanBnXCIpO1xufSJdfQ== */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");





let AppComponent = class AppComponent {
    constructor(router, authenticationService, notifierService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.notifierService = notifierService;
        this.title = 'Kompania Podchorążych';
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _platoon_platoon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platoon/platoon.component */ "./src/app/platoon/platoon.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/interceptors/api.interceptor */ "./src/interceptors/api.interceptor.ts");
/* harmony import */ var src_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/interceptors/error.interceptor */ "./src/interceptors/error.interceptor.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _modals_context_menu_modal_context_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/context-menu-modal/context-modal.component */ "./src/app/modals/context-menu-modal/context-modal.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_14__["CompanyComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__["NavigationComponent"],
            _platoon_platoon_component__WEBPACK_IMPORTED_MODULE_1__["PlatoonComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_14__["Modal"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_14__["ScheduleModal"],
            _modals_context_menu_modal_context_modal_component__WEBPACK_IMPORTED_MODULE_27__["ContextModal"]
        ],
        entryComponents: [_company_company_component__WEBPACK_IMPORTED_MODULE_14__["Modal"], _company_company_component__WEBPACK_IMPORTED_MODULE_14__["ScheduleModal"], _modals_context_menu_modal_context_modal_component__WEBPACK_IMPORTED_MODULE_27__["ContextModal"]],
        imports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_24__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_25__["NotifierModule"],
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_26__["ContextMenuModule"].forRoot({
                autoFocus: true
                // useBootstrap4: true,
            })
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: src_interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_8__["ApiInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: src_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/company/company.component.scss":
/*!************************************************!*\
  !*** ./src/app/company/company.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 1.5rem;\n  margin: 1rem;\n}\n\nh5 {\n  font-size: 1.5rem;\n}\n\nmat-panel-title {\n  margin-top: 4rem;\n  height: 5rem;\n}\n\nsection {\n  margin-top: 2rem;\n  font-size: 1.5rem;\n}\n\nsection mat-card {\n  margin-bottom: 1rem;\n}\n\nsection mat-card mat-toolbar {\n  text-align: center;\n  height: 4rem;\n  -webkit-text-emphasis: none;\n          text-emphasis: none;\n  text-decoration: none;\n  font-size: 1.8rem;\n  font-family: \"Raleway\", sans-serif;\n  border-radius: 0.2rem;\n  margin-bottom: 3rem;\n  box-shadow: 2px 2px 5px 0px #00000057;\n}\n\nsection mat-card mat-toolbar mat-icon {\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n.block {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\nbutton {\n  margin: 0.5rem;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\nimg {\n  height: 3rem;\n  width: 3.5rem;\n}\n\n#soldiers {\n  margin-right: 1.5rem;\n}\n\n.asks {\n  display: inline-flex;\n  width: 100%;\n  align-self: center;\n  line-height: 2rem;\n}\n\nmat-grid-tile {\n  background: #fafafa;\n}\n\nmat-chip {\n  max-width: 200px;\n  margin-left: 1rem;\n}\n\nmat-card {\n  font-size: 1.5rem;\n}\n\nmat-card-content {\n  background-color: #fafafa;\n  padding: 0.7rem;\n}\n\n.toolbar-icon {\n  color: grey;\n}\n\n.ngx-contextmenu {\n  display: list-item;\n}\n\n.clr-tree-node {\n  font-size: 1.5rem;\n}\n\nclr-icon {\n  height: 2rem;\n  width: 2rem;\n  color: #e3b314;\n}\n\n.file {\n  color: #ccceca;\n}\n\n.mystyle .dropdown-menu {\n  background-color: #ebebeb;\n  width: 20rem;\n  font-size: 1.5rem;\n  padding-bottom: 4rem;\n}\n\n.mystyle .dropdown-menu > li > a:focus,\n.mystyle .dropdown-menu > li > a:hover {\n  color: white;\n  background-color: black;\n}\n\n.prosba {\n  color: black;\n  margin: 0.5rem;\n}\n\nspan {\n  align-self: center;\n  margin-right: 1rem;\n}\n\n.context_icon {\n  font-size: 1.6rem;\n}\n\ndiv img {\n  height: 2rem;\n  margin-right: 1rem;\n}\n\nmat-basic-chip {\n  background-color: #616161;\n  color: white;\n  margin: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  width: 12.8rem;\n}\n\n.header-info {\n  margin: 0.5rem;\n  font-size: 1.5rem;\n  height: 5rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9EOlxcX19Qcm9qZWt0IFRJTVxcV2ViIENsaWVudC9zcmNcXGFwcFxcY29tcGFueVxcY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FESEU7RUFDRSxtQkFBQTtBQ0tKOztBREpJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7RUFHQSxxQ0FBQTtBQ0tOOztBREZNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDSVI7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FESkE7RUFDRSxpQkFBQTtBQ09GOztBRExBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDUUY7O0FETkE7RUFDRSxjQUFBO0FDU0Y7O0FEUEE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDVUY7O0FEUkE7O0VBRUUsWUFBQTtFQUNBLHVCQUFBO0FDV0Y7O0FEVEE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ1lGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ2FGOztBRFhBO0VBQ0UsaUJBQUE7QUNjRjs7QURYSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ2NSOztBRFhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDY0o7O0FEWkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNlRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuaDUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbm1hdC1wYW5lbC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGhlaWdodDogNXJlbTtcbn1cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWF0LWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWF0LXRvb2xiYXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgdGV4dC1lbXBoYXNpczogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNTEsIDI1Myk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzAwMDAwMDU3O1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzAwMDAwMDU3O1xuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4ICMwMDAwMDA1NztcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi8vIGZvcm0gc2VuZCBub3RpZmljYXRpb25cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbmltZyB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDMuNXJlbTtcbn1cbiNzb2xkaWVycyB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuLmFza3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbm1hdC1ncmlkLXRpbGUge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxubWF0LWNoaXAge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxubWF0LWNhcmQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAwLjdyZW07XG59XG4udG9vbGJhci1pY29uIHtcbiAgY29sb3I6IGdyZXk7XG59XG4ubmd4LWNvbnRleHRtZW51IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vLyBjb250ZXh0IG1lbnVcbi5jbHItdHJlZS1ub2RlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5jbHItaWNvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGNvbG9yOiAjZTNiMzE0O1xufVxuLmZpbGUge1xuICBjb2xvcjogcmdiKDIwNCwgMjA2LCAyMDIpO1xufVxuLm15c3R5bGUgLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gIHdpZHRoOiAyMHJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuLm15c3R5bGUgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMsXG4ubXlzdHlsZSAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ucHJvc2JhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDAuNXJlbTtcbn1cbnNwYW4ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5jb250ZXh0X2ljb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbmRpdntcbiAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cbm1hdC1iYXNpYy1jaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwYWRkaW5nOjFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIHdpZHRoOiAxMi44cmVtO1xufVxuLmhlYWRlci1pbmZve1xuICBtYXJnaW46IC41cmVtO1xuICBmb250LXNpemU6MS41cmVtOyBcbiAgaGVpZ2h0OiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufSIsInAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5tYXQtcGFuZWwtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBoZWlnaHQ6IDVyZW07XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbnNlY3Rpb24gbWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuc2VjdGlvbiBtYXQtY2FyZCBtYXQtdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0cmVtO1xuICB0ZXh0LWVtcGhhc2lzOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzAwMDAwMDU3O1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjMDAwMDAwNTc7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjMDAwMDAwNTc7XG59XG5zZWN0aW9uIG1hdC1jYXJkIG1hdC10b29sYmFyIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAuNXJlbTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzLjVyZW07XG59XG5cbiNzb2xkaWVycyB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4uYXNrcyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxubWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbm1hdC1jaGlwIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbm1hdC1jYXJkIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAwLjdyZW07XG59XG5cbi50b29sYmFyLWljb24ge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm5neC1jb250ZXh0bWVudSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLmNsci10cmVlLW5vZGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuY2xyLWljb24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBjb2xvcjogI2UzYjMxNDtcbn1cblxuLmZpbGUge1xuICBjb2xvcjogI2NjY2VjYTtcbn1cblxuLm15c3R5bGUgLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICB3aWR0aDogMjByZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cblxuLm15c3R5bGUgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMsXG4ubXlzdHlsZSAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5wcm9zYmEge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG5zcGFuIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5jb250ZXh0X2ljb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuZGl2IGltZyB7XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5tYXQtYmFzaWMtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgd2lkdGg6IDEyLjhyZW07XG59XG5cbi5oZWFkZXItaW5mbyB7XG4gIG1hcmdpbjogMC41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent, Modal, ScheduleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModal", function() { return ScheduleModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/file.service */ "./src/services/file.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/notification.service */ "./src/services/notification.service.ts");
/* harmony import */ var _services_platoon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/platoon.service */ "./src/services/platoon.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _models_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../models/request */ "./src/models/request.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modals_context_menu_modal_context_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/context-menu-modal/context-modal.component */ "./src/app/modals/context-menu-modal/context-modal.component.ts");












let CompanyComponent = class CompanyComponent {
    constructor(companyService, route, authService, notificationService, fileService, platoonService, notifierService, dialog) {
        this.companyService = companyService;
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.fileService = fileService;
        this.platoonService = platoonService;
        this.notifierService = notifierService;
        this.dialog = dialog;
        this.addAskShow = false;
        this.sendMessageShow = false;
        this.soldierListShow = false;
        this.filesShow = false;
        this.showContentFlag = false;
        this.showScheduleFlag = false;
        this.checked = false;
        // for static call
        this.Request = _models_request__WEBPACK_IMPORTED_MODULE_5__["Request"];
        this.alert = window.alert;
        this.win = window;
        this.getTreeSubfolders = (ff) => {
            return this.fileService.getCompanyFolders(this.company.nrKompanii, ff === null ? null : ff.folder.idKatalogu);
        };
        this.notifier = notifierService;
    }
    ngOnInit() {
        this.CCrole = false;
        this.authService.currentUser.subscribe(u => {
            this.user = u;
            // this.CCrole = this.user.soldier.nrKompanii === this.company.idDowodcy ? true : false;
        });
        // this.user = JSON.parse(localStorage.getItem('currentUser'));
        const companyId = this.route.snapshot.paramMap.get('companyId');
        this.getCompanyDetails(companyId);
    }
    isInCCrole() {
        // return this.user.soldier.nrKompanii === this.company.idDowodcy ? Promise.resolve(true) : Promise.resolve(false);
        return this.CCrole === undefined ? false : this.CCrole;
    }
    isFolder(item) {
        return item.isFolder;
    }
    isFile(item) {
        return !item.isFolder;
    }
    getCompanyDetails(companyId) {
        this.companyService.getCompanyDetails(parseInt(companyId, 10)).subscribe((data) => {
            this.company = data;
            this.fileTree = this.getTreeSubfolders(null);
            this.fileService
                .getTimeTableImage(this.company.nrKompanii)
                .subscribe(resp => {
                this.createImageFromBlob(resp.body);
            });
        }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*if (err.status === 403 || err === 'Forbidden') {
              await this.notifierService.notify(
                'error',
                'Nie masz uprawnień do przeglądania tej strony'
              );
              return;
            }*/
            yield this.notifierService.notify('error', 'Nie udało się pobrać szczegółow kompanii');
            console.error(err.message || err);
        }));
    }
    request(requestId, decision) {
        this.companyService.resolveRequest(requestId, decision).subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Pomyślnie przetowrzono prośbę');
            const req = this.company._Prosby.findIndex(q => q.idProsby === requestId);
            this.company._Prosby.splice(req, 1);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się przetowrzyć prośby');
            console.error(err.message || err);
        }));
    }
    requestFromModal(param, platoonId) {
        let res;
        switch (param) {
            case 'sol':
                res = this.platoonService.sendJoinRequest(this.company.nrKompanii, platoonId);
                break;
            case 'com':
                res = this.platoonService.sendPcRequest(this.company.nrKompanii, platoonId);
                break;
            default:
                return;
                break;
        }
        res.subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Wysłano prośbę');
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się wysłać prośby');
            console.error(err.message || err);
        }));
    }
    createPlatoon(platoonId) {
        this.platoonService
            .createPlatoon(this.company.nrKompanii, platoonId)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getCompanyDetails(this.company.nrKompanii.toString());
            yield this.notifierService.notify('success', 'Utworzono nowy pluton');
            this.pNum.nativeElement.value = '';
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się utworzyć plutonu');
            console.error(err.message || err);
        }));
    }
    removeSoldier(soldierId) {
        if (!window.confirm('Czy an pewno usunąć żołnierza?')) {
            return;
        }
        this.companyService
            .removeSoldierFromCompany(this.company.nrKompanii, soldierId)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Usunięto żołnierza z kompanii');
            const sol = this.company._Zolnierze.findIndex(s => s.idOsoby === soldierId);
            this.company._Zolnierze.splice(sol, 1);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się wysłać powiadomienia');
            console.error(err.message || err);
        }));
    }
    sendNotification(target, title, msg) {
        if (title === '' || msg === '') {
            return;
        }
        switch (target) {
            // all soldiers
            case 'all':
                this.notificationService
                    .sendNotification(this.company.nrKompanii, 0, false, title, msg)
                    .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.notifierService.notify('success', 'Powiadomienie zostało wysłane');
                    this.targetInput = '';
                    this.titleInput = '';
                    this.msgInput = '';
                }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.notifierService.notify('error', 'Nie udało się wysłać powiadomienia');
                    console.error(err.message || err);
                }));
                break;
            // only PCA
            case 'ass':
                if (this.company._Plutony === null) {
                    return;
                }
                this.company._Plutony.forEach((p) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.notificationService
                        .sendNotification(this.company.nrKompanii, p.nrPlutonu, true, title, msg)
                        .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.notifierService.notify('success', 'Powiadomienie zostało wysłane');
                        this.targetInput = '';
                        this.titleInput = '';
                        this.msgInput = '';
                    }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.notifierService.notify('error', 'Nie udało się wysłać powiadomienia');
                        console.error(err.message || err);
                    }));
                }));
                break;
            default:
                return;
        }
    }
    createFolder(name, rootFolderId) {
        this.fileService
            .createNewFolder(this.company.nrKompanii, null, rootFolderId, name)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Utworzono nowy folder');
            this.newFolder.nativeElement.value = '';
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się utworzyć folderu');
            console.error(err.message || err);
        }));
    }
    createSubFolder(rootFolderId) {
        const name = window.prompt('Wprowadź nazwę:');
        this.createFolder(name, rootFolderId);
    }
    deleteFolder(rootFolderId) {
        if (!window.confirm('Czy na pewno usunąć folder i całą jego zawartość?')) {
            return;
        }
        this.fileService.deleteFolder(rootFolderId).subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Usunięto folder');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się usunąć folderu');
            console.error(err.message || err);
        }));
    }
    deleteFolderCustom(rootFolderId) {
        this.fileService.deleteFolder(rootFolderId).subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Usunięto folder');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się usunąć folderu');
            console.error(err.message || err);
        }));
    }
    renameFolder(rootFolderId) {
        const name = window.prompt('Wprowadź nazwę:');
        if (name === null || name === '') {
            return;
        }
        this.fileService.renameFolder(rootFolderId, name).subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Zmieniono nazwę');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się zmienić nazwy');
            console.error(err.message || err);
        }));
    }
    renameFolderCustom(folderName, rootFolderId) {
        const name = folderName;
        if (name === null || name === '') {
            return;
        }
        this.fileService.renameFolder(rootFolderId, name).subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Zmieniono nazwę');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się zmienić nazwy');
            console.error(err.message || err);
        }));
    }
    uploadFile(rootFolder) {
        this.uploadRootFolder = rootFolder;
        const event = new MouseEvent('click', { bubbles: false });
        this.fileInput.nativeElement.dispatchEvent(event);
    }
    selectFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.fileService.uploadFile(file, this.uploadRootFolder).subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.notifierService.notify('success', 'Przesłano plik');
                this.uploadRootFolder = null;
                this.fileTree = this.getTreeSubfolders(null);
            }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.notifierService.notify('error', 'Nie udało się przesłać pliku');
                console.error(err.message || err);
            }));
        }
    }
    downloadFile(fileId) {
        this.fileService.getFile(fileId).subscribe();
    }
    createImageFromBlob(image) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.timeTableImg = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    }
    updateCompanyTimetable() {
        const event = new MouseEvent('click', { bubbles: false });
        this.timetableInput.nativeElement.dispatchEvent(event);
    }
    selectTimetable(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.fileService
                .updateTimeTableImage(file, this.company.nrKompanii)
                .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.notifierService.notify('success', 'Przesłano plan zajęć');
                this.fileService
                    .getTimeTableImage(this.company.nrKompanii)
                    .subscribe(resp => {
                    this.createImageFromBlob(resp.body);
                });
            }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.notifierService.notify('error', 'Nie udało się przesłać planu');
                console.error(err.message || err);
            }));
        }
    }
    showContent(content) {
        if (content === 1) {
            this.soldierListShow = true;
        }
        else {
            this.soldierListShow = false;
        }
        if (content === 2) {
            this.addAskShow = true;
        }
        else {
            this.addAskShow = false;
        }
        if (content === 3) {
            this.sendMessageShow = true;
        }
        else {
            this.sendMessageShow = false;
        }
        if (content === 4) {
            this.filesShow = true;
        }
        else {
            this.filesShow = false;
        }
        if (content === 5) {
            this.showScheduleFlag = true;
        }
        else {
            this.showScheduleFlag = false;
        }
        if (content >= 6) {
            this.soldierListShow = false;
            this.addAskShow = false;
            this.sendMessageShow = false;
            this.filesShow = false;
            this.showScheduleFlag = false;
        }
    }
    openContextMenu(rootFolderId, modalTitle, modalPlaceholder, optionSelector) {
        const dialogRef = this.dialog.open(_modals_context_menu_modal_context_modal_component__WEBPACK_IMPORTED_MODULE_11__["ContextModal"], {
            data: {
                modalTitle,
                modalPlaceholder,
                folderName: this.folderName
            }
        });
        console.log(modalTitle);
        console.log(modalPlaceholder);
        dialogRef.afterClosed().subscribe(result => {
            if (modalPlaceholder) {
                this.folderName = result;
            }
            else if (!modalPlaceholder) {
                this.checked = result;
            }
            if (this.folderName) {
                if (optionSelector === 1) {
                    this.createFolder(this.folderName, rootFolderId);
                }
                else if (optionSelector === 2) {
                    this.renameFolderCustom(this.folderName, rootFolderId);
                }
            }
            if (optionSelector === 3 && this.checked) {
                this.deleteFolderCustom(rootFolderId);
            }
        });
    }
    openScheduleImage(scheduleImageParam) {
        const dialogRef = this.dialog.open(ScheduleModal, {
            data: { scheduleImage: scheduleImageParam }
        });
        console.log(scheduleImageParam);
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    openDialog(platoonIdParam) {
        const data = {
            platoonId: platoonIdParam,
            callback: this.requestFromModal.bind(this)
        };
        const dialogRef = this.dialog.open(Modal, {
            width: '40rem',
            data
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.plutonId = result;
        });
    }
};
CompanyComponent.ctorParameters = () => [
    { type: src_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
    { type: _services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"] },
    { type: _services_platoon_service__WEBPACK_IMPORTED_MODULE_3__["PlatoonService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("pNum", { static: false })
], CompanyComponent.prototype, "pNum", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("target", { static: false })
], CompanyComponent.prototype, "target", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("title", { static: false })
], CompanyComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("msg", { static: false })
], CompanyComponent.prototype, "msg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("newFolder", { static: false })
], CompanyComponent.prototype, "newFolder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("fileInput", { static: false })
], CompanyComponent.prototype, "fileInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('timetableInput', { static: false })
], CompanyComponent.prototype, "timetableInput", void 0);
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-company",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.scss */ "./src/app/company/company.component.scss")).default]
    })
], CompanyComponent);

let Modal = class Modal {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit(opt) {
        this.data.callback(opt, this.data.platoonId);
        this.dialogRef.close();
    }
};
Modal.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"],] }] }
];
Modal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.scss */ "./src/app/company/modal.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]))
], Modal);

let ScheduleModal = class ScheduleModal {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ScheduleModal.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"],] }] }
];
ScheduleModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: '../modals/schedule-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../modals/schedule-modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/schedule-modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../modals/schedule-modal.scss */ "./src/app/modals/schedule-modal.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]))
], ScheduleModal);



/***/ }),

/***/ "./src/app/company/modal.scss":
/*!************************************!*\
  !*** ./src/app/company/modal.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p, mat-select, mat-label {\n  color: black;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\nmat-dialog-content {\n  width: 100%;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9EOlxcX19Qcm9qZWt0IFRJTVxcV2ViIENsaWVudC9zcmNcXGFwcFxcY29tcGFueVxcbW9kYWwuc2NzcyIsInNyYy9hcHAvY29tcGFueS9tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvbW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAsbWF0LXNlbGVjdCxtYXQtbGFiZWwge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbn1cbm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIiwicCwgbWF0LXNlbGVjdCwgbWF0LWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter {\n  width: 100%;\n}\n\nbutton {\n  margin: 0.5rem;\n}\n\nsection {\n  margin-top: 2rem;\n}\n\nsection mat-card mat-toolbar {\n  height: 4rem;\n  -webkit-text-emphasis: none;\n          text-emphasis: none;\n  text-decoration: none;\n  font-size: 1.8rem;\n  font-family: \"Raleway\", sans-serif;\n  border-radius: 0.2rem;\n  margin-bottom: 3rem;\n  box-shadow: 2px 2px 5px 0px #00000057;\n}\n\ntable {\n  width: 100%;\n}\n\nimg {\n  height: 4rem;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\nmat-icon:hover {\n  opacity: 0.7;\n}\n\nmat-icon:hover:active {\n  opacity: 0.5;\n}\n\nmat-paginator {\n  margin-bottom: 2rem;\n}\n\ntable {\n  text-align: center !important;\n  width: 100%;\n}\n\n.mat-header-cell {\n  text-align: center;\n}\n\n:host ::ng-deep .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n}\n\n.add-logo {\n  height: 3rem;\n}\n\n.icon-add {\n  margin: 1rem;\n  font-size: 3rem;\n}\n\n.icon-add.neutral {\n  color: orange;\n}\n\n.icon-add.positive {\n  color: #00e676;\n}\n\n.icon-add img {\n  height: 3rem;\n  color: lightskyblue;\n}\n\nmat-form-field {\n  width: 35.8rem;\n  font-size: 1.5rem;\n}\n\n@media only screen and (max-width: 600px) {\n  mat-form-field {\n    width: 100%;\n  }\n\n  mat-card-action {\n    width: 100%;\n  }\n}\n\n.block {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.commander-icon {\n  height: 3rem;\n  margin-left: 1rem;\n  margin-bottom: 1rem;\n}\n\nmat-grid-tile {\n  background: #fafafa;\n}\n\nmat-expansion-panel {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\nmat-panel-title {\n  margin-top: 4rem;\n  height: 5rem;\n}\n\n.header-info {\n  margin: 0.5rem;\n  font-size: 1.5rem;\n  background-color: #fafafa;\n}\n\n.header-info span {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcX19Qcm9qZWt0IFRJTVxcV2ViIENsaWVudC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRENFO0VBQ0ksY0FBQTtBQ0VOOztBREFFO0VBQ0UsZ0JBQUE7QUNHSjs7QURETTtFQUVFLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtFQUdBLHFDQUFBO0FDQ1I7O0FER0U7RUFDRSxXQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0FDQUo7O0FERUk7RUFDRSxZQUFBO0FDQU47O0FEQ007RUFDRSxZQUFBO0FDQ1I7O0FER0U7RUFDRSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEREU7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0lOOztBREhJO0VBQ0UsYUFBQTtBQ0tOOztBREhJO0VBQ0UsY0FBQTtBQ0tOOztBREhJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDS047O0FERkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIRTtFQUNFO0lBQ0UsV0FBQTtFQ01KOztFREpFO0lBQ0UsV0FBQTtFQ09KO0FBQ0Y7O0FETEU7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDT047O0FETEU7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1FOOztBRE5FO0VBQ0UsbUJBQUE7QUNTSjs7QURQRTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ1VOOztBRFJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDV0o7O0FEVEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRFZJO0VBQ0UsbUJBQUE7QUNZTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgICAgbWFyZ2luOiAuNXJlbTtcclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICBtYXQtdG9vbGJhciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNTEsIDI1Myk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjMDAwMDAwNTc7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzAwMDAwMDU3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjMDAwMDAwNTc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1hdC1wYWdpbmF0b3J7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmFkZC1sb2dvIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICB9XHJcbiAgLmljb24tYWRkIHtcclxuICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAmLm5ldXRyYWx7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2VcclxuICAgIH1cclxuICAgICYucG9zaXRpdmV7XHJcbiAgICAgIGNvbG9yOiAjMDBlNjc2O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBjb2xvcjogbGlnaHRza3libHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDozNS44cmVtO1xyXG4gICAgZm9udC1zaXplOjEuNXJlbSBcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgbWF0LWNhcmQtYWN0aW9uICB7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ibG9ja3tcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIC5jb21tYW5kZXItaWNvbntcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG4gIH1cclxuICBtYXQtZ3JpZC10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgfVxyXG4gIG1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgbWF0LXBhbmVsLXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDo0cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcbiAgLmhlYWRlci1pbmZve1xyXG4gICAgbWFyZ2luOiAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZToxLjVyZW07IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbiAgICBzcGFue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAiLCIuZmlsdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbnNlY3Rpb24gbWF0LWNhcmQgbWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IDRyZW07XG4gIHRleHQtZW1waGFzaXM6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjMDAwMDAwNTc7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4ICMwMDAwMDA1NztcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4ICMwMDAwMDA1Nztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuXG5tYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC1pY29uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxubWF0LWljb246aG92ZXI6YWN0aXZlIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxudGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLWxvZ28ge1xuICBoZWlnaHQ6IDNyZW07XG59XG5cbi5pY29uLWFkZCB7XG4gIG1hcmdpbjogMXJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuLmljb24tYWRkLm5ldXRyYWwge1xuICBjb2xvcjogb3JhbmdlO1xufVxuLmljb24tYWRkLnBvc2l0aXZlIHtcbiAgY29sb3I6ICMwMGU2NzY7XG59XG4uaWNvbi1hZGQgaW1nIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBjb2xvcjogbGlnaHRza3libHVlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzNS44cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBtYXQtY2FyZC1hY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmNvbW1hbmRlci1pY29uIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxubWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbm1hdC1wYW5lbC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGhlaWdodDogNXJlbTtcbn1cblxuLmhlYWRlci1pbmZvIHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmhlYWRlci1pbmZvIHNwYW4ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");








let HomeComponent = class HomeComponent {
    constructor(companyService, notifierService, authenticationService, router) {
        this.companyService = companyService;
        this.notifierService = notifierService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.joinCompanySent = false;
        this.displayedColumns = [
            'icon',
            'nrKompanii',
            'action'
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.notifier = notifierService;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getCompanyList();
    }
    getCompanyDetails(companyId) {
        this.router.navigate(['/company/', companyId]);
    }
    getCompanyList() {
        this.companyService.getCompaniesList()
            .subscribe((data) => {
            this.companies = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.companies);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się pobrać list kompanii');
            console.error(err.message || err);
        }));
    }
    joinCompany(companyId) {
        this.companyService.sendJoinRequest(companyId)
            .subscribe(_ => {
            this.joinCompanySent = true;
            this.notifierService.notify('success', 'Pomyślnie wysłano prośbę');
        }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się wysłać prośby');
            console.error(err.message || err);
        }));
    }
    createCompany(num) {
        this.companyService.createCompany(num)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Utworzono nową kompanię, której dowódcą jesteś Ty');
            this.cNum.nativeElement.value = '';
            setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.getCompanyList();
                yield this.authenticationService.updateSoldierDetails()
                    .then(ret => this.user = ret);
            }), 2000);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się utworzyć kompanii');
            console.error(err.message || err);
        }));
    }
    logOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authenticationService.logout();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('cNum', { static: false })
], HomeComponent.prototype, "cNum", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
], HomeComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true })
], HomeComponent.prototype, "sort", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 30rem;\n  margin-bottom: 1rem;\n  margin-bottom: 2em;\n}\n\nbutton {\n  width: 20rem;\n}\n\nmat-icon {\n  font-size: 1.5rem;\n}\n\n.card-center {\n  margin-top: 5rem;\n  position: relative;\n}\n\n.icon-space {\n  color: gray;\n  margin-bottom: 7rem;\n  font-size: 10rem;\n}\n\n.container > * {\n  width: 100%;\n  font-size: 1.5rem;\n}\n\nimg {\n  height: 10rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXF9fUHJvamVrdCBUSU1cXFdlYiBDbGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMjByZW07XG59XG5cbm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jYXJkLWNlbnRlciB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24tc3BhY2Uge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgZm9udC1zaXplOiAxMHJlbTtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTByZW07XG4gIG1hcmdpbi1ib3R0b206MnJlbTtcbn1cbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDMwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyMHJlbTtcbn1cblxubWF0LWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNhcmQtY2VudGVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1zcGFjZSB7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA3cmVtO1xuICBmb250LXNpemU6IDEwcmVtO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");







let LoginComponent = class LoginComponent {
    constructor(fb, route, router, authenticationService, notifierService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.notifierService = notifierService;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
        this.loginForm = fb.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    get f() { return this.loginForm.controls; }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(this.f.login.value, this.f.pass.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe((data) => {
            this.router.navigate([this.returnUrl]);
        }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*if (err.status === 403 || err === 'Forbidden') {
              await this.notifierService.notify(
                'error',
                'Podchorążowie nie mają dostępu do tego systemu'
              );
            }*/
            yield this.notifierService.notify('error', 'Logowanie niedane');
        }));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");









let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]
        ],
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/modals/context-menu-modal/context-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modals/context-menu-modal/context-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContextModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextModal", function() { return ContextModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ContextModal = class ContextModal {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ContextModal.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ContextModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "context-modal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./context-modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/context-menu-modal/context-modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./context-modal.scss */ "./src/app/modals/context-menu-modal/context-modal.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ContextModal);



/***/ }),

/***/ "./src/app/modals/context-menu-modal/context-modal.scss":
/*!**************************************************************!*\
  !*** ./src/app/modals/context-menu-modal/context-modal.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p, mat-select, mat-label {\n  color: black;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\nmat-dialog-content {\n  width: 100%;\n}\n\nmat-form-field {\n  width: 100%;\n  font-size: 1.5rem;\n}\n\nmat-checkbox {\n  width: 100%;\n  font-size: 1.5rem;\n  margin-left: 2rem;\n}\n\ndiv {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2NvbnRleHQtbWVudS1tb2RhbC9EOlxcX19Qcm9qZWt0IFRJTVxcV2ViIENsaWVudC9zcmNcXGFwcFxcbW9kYWxzXFxjb250ZXh0LW1lbnUtbW9kYWxcXGNvbnRleHQtbW9kYWwuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2NvbnRleHQtbWVudS1tb2RhbC9jb250ZXh0LW1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2NvbnRleHQtbWVudS1tb2RhbC9jb250ZXh0LW1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLG1hdC1zZWxlY3QsbWF0LWxhYmVsIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG59XG5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cbm1hdC1jaGVja2JveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbmRpdntcbiAgICBjb2xvcjogYmxhY2s7XG59XG4iLCJwLCBtYXQtc2VsZWN0LCBtYXQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5tYXQtY2hlY2tib3gge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG5kaXYge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/modals/schedule-modal.scss":
/*!********************************************!*\
  !*** ./src/app/modals/schedule-modal.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 90rem;\n  height: 90rem;\n}\n\np, mat-select, mat-label {\n  color: black;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL0Q6XFxfX1Byb2pla3QgVElNXFxXZWIgQ2xpZW50L3NyY1xcYXBwXFxtb2RhbHNcXHNjaGVkdWxlLW1vZGFsLnNjc3MiLCJzcmMvYXBwL21vZGFscy9zY2hlZHVsZS1tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvc2NoZWR1bGUtbW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDogOTByZW07XG4gICAgaGVpZ2h0OiA5MHJlbTtcbn1cbnAsbWF0LXNlbGVjdCxtYXQtbGFiZWwge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn0iLCJpbWcge1xuICB3aWR0aDogOTByZW07XG4gIGhlaWdodDogOTByZW07XG59XG5cbnAsIG1hdC1zZWxlY3QsIG1hdC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav-container:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: url('military_background2.jpg');\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  z-index: -1;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\nimg {\n  height: 4rem;\n}\n\nmenu {\n  background-image: url('list.png');\n}\n\nmenu:hover {\n  background-image: url('list_hover.png');\n}\n\nbutton {\n  text-decoration: none;\n}\n\na {\n  text-decoration: none;\n}\n\na:visited {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9EOlxcX19Qcm9qZWt0IFRJTVxcV2ViIENsaWVudC9zcmNcXGFwcFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FES0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNGRjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURJQTtFQUNFLGlDQUFBO0FDREY7O0FER0E7RUFDRSx1Q0FBQTtBQ0FGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIFxufVxuLnNpZGVuYXYtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudCA6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvbWlsaXRhcnlfYmFja2dyb3VuZDIuanBnJyk7IFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5IDogLjE7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG5cbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuaW1ne1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbm1lbnV7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2xpc3QucG5nJyk7XG59XG5tZW51OmhvdmVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9saXN0X2hvdmVyLnBuZycpO1xufVxuYnV0dG9ue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIFxufVxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6dmlzaXRlZHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn0iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL21pbGl0YXJ5X2JhY2tncm91bmQyLmpwZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC4xO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuXG5tZW51IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xpc3QucG5nXCIpO1xufVxuXG5tZW51OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xpc3RfaG92ZXIucG5nXCIpO1xufVxuXG5idXR0b24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOnZpc2l0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let NavigationComponent = class NavigationComponent {
    constructor(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(u => { this.user = u; });
    }
    logOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.logout();
        });
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/platoon/platoon.component.scss":
/*!************************************************!*\
  !*** ./src/app/platoon/platoon.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 1.5rem;\n  margin: 1rem;\n}\n\nh5 {\n  font-size: 1.5rem;\n}\n\nmat-panel-title {\n  margin-top: 4rem;\n  height: 5rem;\n}\n\nsection {\n  margin-top: 2rem;\n  font-size: 1.5rem;\n}\n\nsection mat-card {\n  margin-bottom: 1rem;\n}\n\nsection mat-card mat-toolbar {\n  text-align: center;\n  height: 4rem;\n  -webkit-text-emphasis: none;\n          text-emphasis: none;\n  text-decoration: none;\n  font-size: 1.8rem;\n  font-family: \"Raleway\", sans-serif;\n  border-radius: 0.2rem;\n  margin-bottom: 3rem;\n  box-shadow: 2px 2px 5px 0px #00000057;\n}\n\nsection mat-card mat-toolbar mat-icon {\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n.block {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\nbutton {\n  margin: 0.5rem;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\nimg {\n  height: 3rem;\n  width: 3.5rem;\n}\n\n#soldiers {\n  margin-right: 1.5rem;\n}\n\n.asks {\n  display: inline-flex;\n  width: 100%;\n  align-self: center;\n}\n\nmat-grid-tile {\n  background: #fafafa;\n}\n\nmat-chip {\n  max-width: 200px;\n  margin-left: 1rem;\n}\n\nmat-card {\n  font-size: 1.5rem;\n}\n\nmat-card-content {\n  background-color: #fafafa;\n  padding: 0.7rem;\n}\n\n.toolbar-icon {\n  color: grey;\n}\n\n.ngx-contextmenu {\n  display: list-item;\n}\n\n.clr-tree-node {\n  font-size: 1.5rem;\n}\n\nclr-icon {\n  height: 2rem;\n  width: 2rem;\n  color: #e3b314;\n}\n\n.file {\n  color: #ccceca;\n}\n\n.mystyle .dropdown-menu {\n  background-color: #ebebeb;\n  width: 20rem;\n  font-size: 1.5rem;\n  padding-bottom: 4rem;\n}\n\n.mystyle .dropdown-menu > li > a:focus,\n.mystyle .dropdown-menu > li > a:hover {\n  color: white;\n  background-color: black;\n}\n\n.prosba {\n  color: black;\n  margin: 0.5rem;\n}\n\nspan {\n  align-self: center;\n  margin-right: 1rem;\n}\n\n.context_icon {\n  font-size: 1.6rem;\n}\n\n.header-info {\n  margin: 0.5rem;\n  font-size: 1.5rem;\n  height: 5rem;\n  background-color: #fafafa;\n}\n\nmat-basic-chip {\n  background-color: #616161;\n  color: white;\n  margin: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  width: 12.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhdG9vbi9EOlxcX19Qcm9qZWt0IFRJTVxcV2ViIENsaWVudC9zcmNcXGFwcFxccGxhdG9vblxccGxhdG9vbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhdG9vbi9wbGF0b29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtBQ0VKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FESEk7RUFDRSxtQkFBQTtBQ0tOOztBREpNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7RUFHQSxxQ0FBQTtBQ0tSOztBREZRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDSVY7O0FERUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0FDRUo7O0FERUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUU7RUFDRSxvQkFBQTtBQ0dKOztBRERFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURERTtFQUNFLG1CQUFBO0FDSUo7O0FERkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkU7RUFDRSxpQkFBQTtBQ0tKOztBREhFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtBQ1FKOztBREpFO0VBQ0UsaUJBQUE7QUNPSjs7QURMRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5FO0VBQ0UsY0FBQTtBQ1NKOztBRFBFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1VKOztBRFJFOztFQUVFLFlBQUE7RUFDQSx1QkFBQTtBQ1dKOztBRFRFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNZSjs7QURWRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNhSjs7QURYRTtFQUNFLGlCQUFBO0FDY0o7O0FEWkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNlSjs7QURiRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL3BsYXRvb24vcGxhdG9vbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgfVxuICBoNSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgbWF0LXBhbmVsLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgfVxuICBzZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hdC1jYXJkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBtYXQtdG9vbGJhciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICB0ZXh0LWVtcGhhc2lzOiBub25lO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNTEsIDI1Myk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4ICMwMDAwMDA1NztcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzAwMDAwMDU3O1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzAwMDAwMDU3O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBcbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuICBidXR0b24ge1xuICAgIG1hcmdpbjogMC41cmVtO1xuICB9XG4gIFxuICAvLyBmb3JtIHNlbmQgbm90aWZpY2F0aW9uXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbWcge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMy41cmVtO1xuICB9XG4gICNzb2xkaWVycyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIH1cbiAgLmFza3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICBcbiAgbWF0LWdyaWQtdGlsZSB7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgfVxuICBtYXQtY2hpcCB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxuICBcbiAgbWF0LWNhcmQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgcGFkZGluZzogMC43cmVtO1xuICB9XG4gIC50b29sYmFyLWljb24ge1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIC5uZ3gtY29udGV4dG1lbnUge1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgfVxuICBcbiAgLy8gY29udGV4dCBtZW51XG4gIC5jbHItdHJlZS1ub2RlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBjbHItaWNvbiB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGNvbG9yOiAjZTNiMzE0O1xuICB9XG4gIC5maWxlIHtcbiAgICBjb2xvcjogcmdiKDIwNCwgMjA2LCAyMDIpO1xuICB9XG4gIC5teXN0eWxlIC5kcm9wZG93bi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICB9XG4gIC5teXN0eWxlIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzLFxuICAubXlzdHlsZSAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIC5wcm9zYmEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgfVxuICBzcGFuIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG4gIC5jb250ZXh0X2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIC5oZWFkZXItaW5mb3tcbiAgICBtYXJnaW46IC41cmVtO1xuICAgIGZvbnQtc2l6ZToxLjVyZW07IFxuICAgIGhlaWdodDogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICB9XG4gIG1hdC1iYXNpYy1jaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwYWRkaW5nOjFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIHdpZHRoOiAxMi44cmVtO1xufSIsInAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5tYXQtcGFuZWwtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBoZWlnaHQ6IDVyZW07XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbnNlY3Rpb24gbWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuc2VjdGlvbiBtYXQtY2FyZCBtYXQtdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0cmVtO1xuICB0ZXh0LWVtcGhhc2lzOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzAwMDAwMDU3O1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjMDAwMDAwNTc7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjMDAwMDAwNTc7XG59XG5zZWN0aW9uIG1hdC1jYXJkIG1hdC10b29sYmFyIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAuNXJlbTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzLjVyZW07XG59XG5cbiNzb2xkaWVycyB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4uYXNrcyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5tYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxubWF0LWNoaXAge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxubWF0LWNhcmQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmc6IDAuN3JlbTtcbn1cblxuLnRvb2xiYXItaWNvbiB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubmd4LWNvbnRleHRtZW51IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4uY2xyLXRyZWUtbm9kZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5jbHItaWNvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGNvbG9yOiAjZTNiMzE0O1xufVxuXG4uZmlsZSB7XG4gIGNvbG9yOiAjY2NjZWNhO1xufVxuXG4ubXlzdHlsZSAuZHJvcGRvd24tbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIHdpZHRoOiAyMHJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuXG4ubXlzdHlsZSAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyxcbi5teXN0eWxlIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnByb3NiYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbnNwYW4ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmNvbnRleHRfaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uaGVhZGVyLWluZm8ge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxubWF0LWJhc2ljLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiAxMi44cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/platoon/platoon.component.ts":
/*!**********************************************!*\
  !*** ./src/app/platoon/platoon.component.ts ***!
  \**********************************************/
/*! exports provided: PlatoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatoonComponent", function() { return PlatoonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/request */ "./src/models/request.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/company.service */ "./src/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var src_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/notification.service */ "./src/services/notification.service.ts");
/* harmony import */ var src_services_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/file.service */ "./src/services/file.service.ts");
/* harmony import */ var src_services_platoon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/platoon.service */ "./src/services/platoon.service.ts");
/* harmony import */ var _modals_context_menu_modal_context_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/context-menu-modal/context-modal.component */ "./src/app/modals/context-menu-modal/context-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");













let PlatoonComponent = class PlatoonComponent {
    constructor(companyService, route, authService, notificationService, fileService, platoonService, notifierService, dialog) {
        this.companyService = companyService;
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.fileService = fileService;
        this.platoonService = platoonService;
        this.notifierService = notifierService;
        this.dialog = dialog;
        this.checked = false;
        // for static call
        this.Request = _models_request__WEBPACK_IMPORTED_MODULE_1__["Request"];
        this.addAskShow = false;
        this.sendMessageShow = false;
        this.soldierListShow = false;
        this.filesShow = false;
        this.showContentFlag = false;
        this.getTreeSubfolders = (ff) => {
            return this.fileService.getPlatoonFolders(this.platoon.nrKompanii, this.platoon.nrPlutonu, ff === null ? null : ff.folder.idKatalogu);
        };
        this.notifier = notifierService;
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(u => this.user = u);
        // this.user = JSON.parse(localStorage.getItem('currentUser'));
        const companyId = this.route.snapshot.paramMap.get('companyId');
        const platoonId = this.route.snapshot.paramMap.get('platoonId');
        this.getPlatoonDetails(companyId, platoonId);
    }
    isFolder(item) {
        return item.isFolder;
    }
    isFile(item) {
        return !item.isFolder;
    }
    getFunkcyjni() {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create((observer) => {
            observer.next(this.platoon._Zolnierze.filter(s => s.funkcyjny));
            observer.complete();
        });
    }
    getPlatoonDetails(companyId, platoonId) {
        this.platoonService.getPlatoonDetails(companyId, platoonId)
            .subscribe((p) => {
            this.platoon = p;
            this.fileTree = this.getTreeSubfolders(null);
        }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (err.status === 403 || err === 'Forbidden') {
                yield this.notifierService.notify('error', 'Nie masz uprawnień do przeglądania tej strony');
                return;
            }
            yield this.notifierService.notify('error', 'Nie udało się pobrać szczegółow plutonu');
            console.error(err.message || err);
        }));
    }
    createSubFolder(rootFolderId) {
        const name = window.prompt('Wprowadź nazwę:');
        this.createFolder(name, rootFolderId);
    }
    request(requestId, decision) {
        this.platoonService.resolveRequest(requestId, decision).subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Pomyślnie przetowrzono prośbę');
            const req = this.platoon._Prosby.findIndex(q => q.idProsby === requestId);
            this.platoon._Prosby.splice(req, 1);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się przetowrzyć prośby');
            console.error(err.message || err);
        }));
    }
    requestAssRole() {
        this.platoonService.sendAssRequest(this.platoon.nrKompanii, this.platoon.nrPlutonu)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Prośba została wysłana');
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się wysłać prośby');
            console.error(err.message || err);
        }));
    }
    sendNotification(target, title, msg) {
        if (title === '' || msg === '') {
            return;
        }
        switch (target) {
            // all soldiers
            case 'all':
                this.notificationService
                    .sendNotification(this.platoon.nrKompanii, this.platoon.nrPlutonu, false, title, msg)
                    .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.notifierService.notify('success', 'Powiadomienie zostało wysłane');
                    this.target.nativeElement.value = '';
                    this.title.nativeElement.value = '';
                    this.msg.nativeElement.value = '';
                }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.notifierService.notify('error', 'Nie udało się wysłać powiadomienia');
                    console.error(err.message || err);
                }));
                break;
            // only PCA
            case 'ass':
                this.notificationService
                    .sendNotification(this.platoon.nrKompanii, this.platoon.nrPlutonu, true, title, msg)
                    .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.notifierService.notify('success', 'Powiadomienie zostało wysłane');
                    this.target.nativeElement.value = '';
                    this.title.nativeElement.value = '';
                    this.msg.nativeElement.value = '';
                }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.notifierService.notify('error', 'Nie udało się wysłać powiadomienia');
                    console.error(err.message || err);
                }));
                break;
            default: return;
        }
    }
    createFolder(name, rootFolderId) {
        this.fileService.createNewFolder(this.platoon.nrKompanii, this.platoon.nrPlutonu, rootFolderId, name)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Utworzono nowy folder');
            this.newFolder.nativeElement.value = '';
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się utworzyć folderu');
            console.error(err.message || err);
        }));
    }
    deleteFolder(rootFolderId) {
        if (!window.confirm('Czy na pewno usunąć folder i całą jego zawartość?')) {
            return;
        }
        this.fileService.deleteFolder(rootFolderId)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Usunięto folder');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się usunąć folderu');
            console.error(err.message || err);
        }));
    }
    deleteFolderCustom(rootFolderId) {
        this.fileService.deleteFolder(rootFolderId)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Usunięto folder');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się usunąć folderu');
            console.error(err.message || err);
        }));
    }
    renameFolder(rootFolderId) {
        const name = window.prompt('Wprowadź nazwę:');
        if (name === null || name === '') {
            return;
        }
        this.fileService.renameFolder(rootFolderId, name)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Zmieniono nazwę');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się zmienić nazwy');
            console.error(err.message || err);
        }));
    }
    renameFolderCustom(rootFolderId, folderName) {
        const name = folderName;
        if (name === null || name === '') {
            return;
        }
        this.fileService.renameFolder(rootFolderId, name)
            .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Zmieniono nazwę');
            this.fileTree = this.getTreeSubfolders(null);
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się zmienić nazwy');
            console.error(err.message || err);
        }));
    }
    uploadFile(rootFolder) {
        this.uploadRootFolder = rootFolder;
        const event = new MouseEvent('click', { bubbles: false });
        this.fileInput.nativeElement.dispatchEvent(event);
    }
    selectFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.fileService.uploadFile(file, this.uploadRootFolder)
                .subscribe((_) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.notifierService.notify('success', 'Przesłano plik');
                this.uploadRootFolder = null;
                this.fileTree = this.getTreeSubfolders(null);
            }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.notifierService.notify('error', 'Nie udało się przesłać pliku');
                console.error(err.message || err);
            }));
        }
    }
    downloadFile(fileId) {
        this.fileService.getFile(fileId).subscribe();
    }
    showContent(content) {
        if (content === 1) {
            this.soldierListShow = true;
        }
        else {
            this.soldierListShow = false;
        }
        if (content === 2) {
            this.addAskShow = true;
        }
        else {
            this.addAskShow = false;
        }
        if (content === 3) {
            this.sendMessageShow = true;
        }
        else {
            this.sendMessageShow = false;
        }
        if (content === 4) {
            this.filesShow = true;
        }
        else {
            this.filesShow = false;
        }
        if (content >= 5) {
            this.soldierListShow = false;
            this.addAskShow = false;
            this.sendMessageShow = false;
            this.filesShow = false;
        }
    }
    openContextMenu(rootFolderId, modalTitle, modalPlaceholder, optionSelector) {
        const dialogRef = this.dialog.open(_modals_context_menu_modal_context_modal_component__WEBPACK_IMPORTED_MODULE_11__["ContextModal"], {
            data: {
                modalTitle,
                modalPlaceholder,
                folderName: this.folderName
            }
        });
        console.log(modalTitle);
        console.log(modalPlaceholder);
        dialogRef.afterClosed().subscribe(result => {
            if (modalPlaceholder) {
                this.folderName = result;
            }
            else if (!modalPlaceholder) {
                this.checked = result;
            }
            if (this.folderName) {
                if (optionSelector === 1) {
                    this.createFolder(this.folderName, rootFolderId);
                }
                else if (optionSelector === 2) {
                    this.renameFolderCustom(rootFolderId, this.folderName);
                }
            }
            if (optionSelector === 3 && this.checked) {
                this.deleteFolderCustom(rootFolderId);
            }
        });
    }
};
PlatoonComponent.ctorParameters = () => [
    { type: src_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_services_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"] },
    { type: src_services_platoon_service__WEBPACK_IMPORTED_MODULE_10__["PlatoonService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('target', { static: false })
], PlatoonComponent.prototype, "target", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('title', { static: false })
], PlatoonComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('msg', { static: false })
], PlatoonComponent.prototype, "msg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('newFolder', { static: false })
], PlatoonComponent.prototype, "newFolder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('fileInput', { static: false })
], PlatoonComponent.prototype, "fileInput", void 0);
PlatoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-platoon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./platoon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/platoon/platoon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./platoon.component.scss */ "./src/app/platoon/platoon.component.scss")).default]
    })
], PlatoonComponent);



/***/ }),

/***/ "./src/app/register/password.validation.ts":
/*!*************************************************!*\
  !*** ./src/app/register/password.validation.ts ***!
  \*************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PasswordValidation {
    static MatchPassword(AC) {
        const password = AC.get('pass').value;
        const confirmPassword = AC.get('confirmPass').value;
        if (password !== confirmPassword) {
            AC.get('confirmPass').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  font-size: 1.5rem;\n}\n\nmat-form-field {\n  width: 30rem;\n  margin-bottom: 1rem;\n  margin-bottom: 2em;\n}\n\nbutton {\n  width: 20rem;\n}\n\nmat-icon {\n  font-size: 1.5rem;\n}\n\n.card-center {\n  margin-top: 5rem;\n  position: relative;\n}\n\n.icon-space {\n  color: gray;\n  margin-bottom: 7rem;\n  font-size: 10rem;\n}\n\n.container > * {\n  width: 100%;\n  font-size: 1.5rem;\n}\n\nimg {\n  height: 10rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXF9fUHJvamVrdCBUSU1cXFdlYiBDbGllbnQvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLFlBQUE7QUNFSjs7QURBRTtFQUNFLGlCQUFBO0FDR0o7O0FEQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjByZW07XG4gIH1cbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIFxuICAuY2FyZC1jZW50ZXIge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaWNvbi1zcGFjZSB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgICBmb250LXNpemU6IDEwcmVtO1xuICB9XG4gIFxuICAuY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcbiAgfVxuICAiLCJmb3JtIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDMwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyMHJlbTtcbn1cblxubWF0LWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNhcmQtY2VudGVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1zcGFjZSB7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA3cmVtO1xuICBmb250LXNpemU6IDEwcmVtO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.validation */ "./src/app/register/password.validation.ts");







let RegisterComponent = class RegisterComponent {
    constructor(fb, route, router, authenticationService, notifierService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.notifierService = notifierService;
        this.registerForm = fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            familyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            confirmPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, {
            validator: _password_validation__WEBPACK_IMPORTED_MODULE_6__["PasswordValidation"].MatchPassword
        });
    }
    get f() { return this.registerForm.controls; }
    ngOnInit() {
    }
    onSubmit() {
        if (this.registerForm.invalid) {
            if (this.f.pass.value !== this.f.confirmPass.value) {
                this.notifierService.notify('error', 'Hasła nie są zgodne');
            }
            return;
        }
        const form = {
            firstName: this.f.firstName.value,
            familyName: this.f.familyName.value,
            password: this.f.pass.value,
        };
        this.authenticationService.register(form).subscribe((login) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('success', 'Utworzono nowego użytkownika. Możesz się zalogować. Twój login to: ' + login + '');
            this.registerForm.reset();
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.notifierService.notify('error', 'Nie udało się zarejestrować');
        }));
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    APIurl: 'https://localhost:5001/api/'
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

/***/ "./src/interceptors/api.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/interceptors/api.interceptor.ts ***!
  \*********************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");



let ApiInterceptor = class ApiInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + currentUser.token
                }
            });
        }
        return next.handle(request);
    }
};
ApiInterceptor.ctorParameters = () => [
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiInterceptor);



/***/ }),

/***/ "./src/interceptors/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/interceptors/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService, notifierService) {
        this.authenticationService = authenticationService;
        this.notifierService = notifierService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            else if (err.status === 403) {
                this.notifierService.notify('error', 'Nie masz uprawnień do przeglądania tej strony');
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
const providers = [
    { provide: 'API_URL', useFactory: () => _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIurl, deps: [] },
];
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/models/fileFolder.ts":
/*!**********************************!*\
  !*** ./src/models/fileFolder.ts ***!
  \**********************************/
/*! exports provided: FileFolder, FolderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFolder", function() { return FileFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderContent", function() { return FolderContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FileFolder {
    constructor(f, fol) {
        this.isFolder = f === null ? true : false;
        this.file = f;
        this.folder = fol;
    }
}
class FolderContent {
}


/***/ }),

/***/ "./src/models/request.ts":
/*!*******************************!*\
  !*** ./src/models/request.ts ***!
  \*******************************/
/*! exports provided: RequestType, Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var RequestType;
(function (RequestType) {
    RequestType[RequestType["CC"] = 0] = "CC";
    RequestType[RequestType["PC"] = 1] = "PC";
    RequestType[RequestType["PA"] = 2] = "PA";
    RequestType[RequestType["JC"] = 3] = "JC";
    RequestType[RequestType["JP"] = 4] = "JP"; // Join Platoon Group
})(RequestType || (RequestType = {}));
class Request {
    static getRequestTypeString(req) {
        // Żołnierz prosi o zaakceptowanie...
        switch (req) {
            case RequestType.PC:
                return 'stanowiska dowódcy plutonu';
            case RequestType.JC:
                return 'dołączenia do kompanii';
            case RequestType.JP:
                return 'dołączenia do plutonu';
            case RequestType.PA:
                return 'stanowiska funkcyjnego plutonu';
        }
    }
}


/***/ }),

/***/ "./src/services/auth.guard.ts":
/*!************************************!*\
  !*** ./src/services/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            // update soldier info
            this.authenticationService.updateSoldierDetails();
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthenticationService = class AuthenticationService {
    constructor(http, url, router) {
        this.http = http;
        this.router = router;
        this.url = url;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(login, password) {
        // tslint:disable-next-line: object-literal-shorthand
        return this.http.post(this.url + 'auth', {}, { params: { login: login, password: password } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }
    register(form) {
        return this.http.post(this.url + 'register', form);
    }
    updateSoldierDetails() {
        return new Promise((resolve, reject) => {
            const user = this.currentUserValue;
            this.http.get(this.url + 'soldier/' + user.userId)
                .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                user.soldier = data;
                yield localStorage.setItem('currentUser', JSON.stringify(user));
                resolve(JSON.parse(localStorage.getItem('currentUser')));
            }));
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))
], AuthenticationService);



/***/ }),

/***/ "./src/services/company.service.ts":
/*!*****************************************!*\
  !*** ./src/services/company.service.ts ***!
  \*****************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/request */ "./src/models/request.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CompanyService = class CompanyService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getCompaniesList() {
        return this.http.get(this.url + 'company');
    }
    getCompanyDetails(companId) {
        return this.http.get(this.url + 'company/' + companId);
    }
    sendJoinRequest(companId) {
        return this.http.post(this.url + 'request', {
            companyId: companId,
            requestType: _models_request__WEBPACK_IMPORTED_MODULE_1__["RequestType"].JC
        });
    }
    createCompany(companId) {
        return this.http.post(this.url + 'company/' + companId, {});
    }
    resolveRequest(requestId, decision) {
        const p = { decision: decision.toString() };
        return this.http.patch(this.url + 'request/' + requestId, {}, { params: p });
    }
    removeSoldierFromCompany(companyId, soldierId) {
        return this.http.delete(this.url + 'companyMembers/' + companyId, { params: { soldierId: soldierId.toString() } });
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['API_URL',] }] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('API_URL'))
], CompanyService);



/***/ }),

/***/ "./src/services/file.service.ts":
/*!**************************************!*\
  !*** ./src/services/file.service.ts ***!
  \**************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_models_fileFolder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/fileFolder */ "./src/models/fileFolder.ts");






let FileService = class FileService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    createNewFolder(companyId, platoonId, rootFolderId, name) {
        const dto = {
            companyId,
            platoonId,
            rootFolderId,
            name
        };
        return this.http.post(this.url + 'folder', dto);
    }
    getCompanyFolders(companyId, rootFolder) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            const ff = [];
            let p = {};
            if (rootFolder !== null) {
                p = { rootFolder: rootFolder.toString() };
            }
            this.http.get(this.url + 'folder/' + companyId, { params: p })
                .subscribe((fol) => {
                fol.folders.forEach(f => {
                    ff.push(new src_models_fileFolder__WEBPACK_IMPORTED_MODULE_5__["FileFolder"](null, f));
                });
                if (fol.files !== null) {
                    fol.files.forEach(f => {
                        ff.push(new src_models_fileFolder__WEBPACK_IMPORTED_MODULE_5__["FileFolder"](f, null));
                    });
                }
                observer.next(ff);
                observer.complete();
            });
        });
    }
    getPlatoonFolders(companyId, platoonId, rootFolder) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            const ff = [];
            let p = {};
            if (rootFolder !== null) {
                p = {
                    companyId: companyId.toString(),
                    platoonId: platoonId.toString(),
                    rootFolder: rootFolder.toString()
                };
            }
            else {
                p = {
                    companyId: companyId.toString(),
                    platoonId: platoonId.toString()
                };
            }
            this.http.get(this.url + 'folder/', { params: p })
                .subscribe((fol) => {
                fol.folders.forEach(f => {
                    ff.push(new src_models_fileFolder__WEBPACK_IMPORTED_MODULE_5__["FileFolder"](null, f));
                });
                if (fol.files !== null) {
                    fol.files.forEach(f => {
                        ff.push(new src_models_fileFolder__WEBPACK_IMPORTED_MODULE_5__["FileFolder"](f, null));
                    });
                }
                observer.next(ff);
                observer.complete();
            });
        });
    }
    deleteFolder(rootFolder) {
        return this.http.delete(this.url + 'folder/' + rootFolder);
    }
    renameFolder(folderId, name) {
        return this.http.patch(this.url + 'folder/' + folderId, {}, { params: { newName: name } });
    }
    uploadFile(file, rootFolder) {
        const formData = new FormData();
        formData.append('contentFolder', rootFolder.toString());
        formData.append('description', file.name);
        formData.append('file', file);
        return this.http.post(this.url + 'file', formData);
    }
    getFile(fileId) {
        return this.http.get(this.url + 'file/' + fileId, { responseType: 'blob', observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            const contentType = resp.headers.get('Content-Type');
            const fileName = decodeURIComponent(resp.headers.get('OriginalFileName')).replace('+', ' ');
            /*const details = resp.headers.get('Content-Disposition').split('; ');
            const fileName = (details.find(d => d.substr(0, 9) === 'filename=').split('='))[1];*/
            const blob = new Blob([resp.body], { type: contentType });
            const saveAs = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
            saveAs(blob, fileName);
        }));
    }
    getTimeTableImage(companyId) {
        return this.http.get(this.url + 'timetable/' + companyId, { responseType: 'blob', observe: 'response' });
    }
    updateTimeTableImage(file, companyId) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.url + 'timeTable/' + companyId, formData);
    }
};
FileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] }
];
FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))
], FileService);



/***/ }),

/***/ "./src/services/notification.service.ts":
/*!**********************************************!*\
  !*** ./src/services/notification.service.ts ***!
  \**********************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NotificationService = class NotificationService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    sendNotification(companyId, platoonId, ass, title, body) {
        const dto = {
            companyId,
            platoonId,
            onlyAssistants: ass,
            title,
            body
        };
        return this.http.post(this.url + 'notification', dto);
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['API_URL',] }] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API_URL'))
], NotificationService);



/***/ }),

/***/ "./src/services/platoon.service.ts":
/*!*****************************************!*\
  !*** ./src/services/platoon.service.ts ***!
  \*****************************************/
/*! exports provided: PlatoonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatoonService", function() { return PlatoonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/request */ "./src/models/request.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PlatoonService = class PlatoonService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    createPlatoon(companyID, platoonId) {
        return this.http.post(this.url + 'platoon/' + companyID, {}, { params: { platoonId: platoonId.toString() } });
    }
    getPlatoonDetails(companyId, platoonId) {
        return this.http.get(this.url + 'platoon', { params: { companyId, platoonId } });
    }
    resolveRequest(requestId, decision) {
        const p = { decision: decision.toString() };
        return this.http.patch(this.url + 'request/' + requestId, {}, { params: p });
    }
    sendJoinRequest(companyId, platoonId) {
        return this.http.post(this.url + 'request', {
            companyId,
            platoonId,
            requestType: _models_request__WEBPACK_IMPORTED_MODULE_1__["RequestType"].JP
        });
    }
    sendAssRequest(companyId, platoonId) {
        return this.http.post(this.url + 'request', {
            companyId,
            platoonId,
            requestType: _models_request__WEBPACK_IMPORTED_MODULE_1__["RequestType"].PA
        });
    }
    sendPcRequest(companyId, platoonId) {
        return this.http.post(this.url + 'request', {
            companyId,
            platoonId,
            requestType: _models_request__WEBPACK_IMPORTED_MODULE_1__["RequestType"].PC
        });
    }
};
PlatoonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['API_URL',] }] }
];
PlatoonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('API_URL'))
], PlatoonService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\__Projekt TIM\Web Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map