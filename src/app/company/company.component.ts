import { FileFolder } from "src/models/fileFolder";
import { FileService } from "./../../services/file.service";
import { NotificationService } from "./../../services/notification.service";
import { async } from "@angular/core/testing";
import { PlatoonService } from "./../../services/platoon.service";
import { AuthenticationService } from "./../../services/auth.service";
import { Request, RequestType } from "./../../models/request";
import { Subject, Observable } from "rxjs";
import { User } from "./../../models/user";
import { Company } from "./../../models/company";
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Inject
} from "@angular/core";
import { CompanyService } from "src/services/company.service";
import { ActivatedRoute } from "@angular/router";
import { collectExternalReferences } from "@angular/compiler";
import { NotifierService } from "angular-notifier";
import { ContextMenuService, ContextMenuComponent } from "ngx-contextmenu";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ContextModal } from "../modals/context-menu-modal/context-modal.component";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"]
})
export class CompanyComponent implements OnInit {
  private readonly notifier: NotifierService;
  addAskShow = false;
  sendMessageShow = false;
  soldierListShow = false;
  filesShow = false;
  showContentFlag = false;
  showScheduleFlag = false;

  targetInput: "";
  titleInput: "";
  msgInput: "";

  plutonId: number;
  scheduleImage: any | undefined;
  checked = false;
  folderName: string;
  // for static call
  Request = Request;

  company: Company;
  user: User;
  userObs: Observable<User>;
  CCrole!: boolean | undefined;
  timeTableImg: any | undefined;

  uploadRootFolder: number;

  @ViewChild("pNum", { static: false }) pNum: ElementRef;
  @ViewChild("target", { static: false }) target: ElementRef;
  @ViewChild("title", { static: false }) title: ElementRef;
  @ViewChild("msg", { static: false }) msg: ElementRef;
  @ViewChild("newFolder", { static: false }) newFolder: ElementRef;
  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
  @ViewChild('timetableInput', { static: false }) timetableInput: ElementRef;

  alert = window.alert;
  win = window;
  fileTree: Observable<FileFolder[]>;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private fileService: FileService,
    private platoonService: PlatoonService,
    private notifierService: NotifierService,
    public dialog: MatDialog
  ) {
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

  isFolder(item: FileFolder) {
    return item.isFolder;
  }

  isFile(item: FileFolder) {
    return !item.isFolder;
  }

  getCompanyDetails(companyId: string) {
    this.companyService.getCompanyDetails(parseInt(companyId, 10)).subscribe(
      (data: Company) => {
        this.company = data;
        this.fileTree = this.getTreeSubfolders(null);
        this.fileService
          .getTimeTableImage(this.company.nrKompanii)
          .subscribe(resp => {
            this.createImageFromBlob(resp.body);
          });
      },
      async err => {
        /*if (err.status === 403 || err === 'Forbidden') {
          await this.notifierService.notify(
            'error',
            'Nie masz uprawnień do przeglądania tej strony'
          );
          return;
        }*/
        await this.notifierService.notify(
          'error',
          'Nie udało się pobrać szczegółow kompanii'
        );
        console.error(err.message || err);
      }
    );
  }

  request(requestId: number, decision: boolean) {
    this.companyService.resolveRequest(requestId, decision).subscribe(
      async _ => {
        await this.notifierService.notify(
          'success',
          'Pomyślnie przetowrzono prośbę'
        );

        const req: number = this.company._Prosby.findIndex(
          q => q.idProsby === requestId
        );
        this.company._Prosby.splice(req, 1);
      },
      async err => {
        await this.notifierService.notify(
          'error',
          'Nie udało się przetowrzyć prośby'
        );
        console.error(err.message || err);
      }
    );
  }

  requestFromModal(param: string, platoonId: number) {
    let res: Observable<any>;

    switch (param) {
      case 'sol':
        res = this.platoonService.sendJoinRequest(
          this.company.nrKompanii,
          platoonId
        );
        break;
      case 'com':
        res = this.platoonService.sendPcRequest(
          this.company.nrKompanii,
          platoonId
        );
        break;
      default:
        return;
        break;
    }

    res.subscribe(
      async _ => {
        await this.notifierService.notify('success', 'Wysłano prośbę');
      },
      async err => {
        await this.notifierService.notify(
          'error',
          'Nie udało się wysłać prośby'
        );
        console.error(err.message || err);
      }
    );
  }

  createPlatoon(platoonId: number) {
    this.platoonService
      .createPlatoon(this.company.nrKompanii, platoonId)
      .subscribe(
        async _ => {
          this.getCompanyDetails(this.company.nrKompanii.toString());
          await this.notifierService.notify('success', 'Utworzono nowy pluton');
          this.pNum.nativeElement.value = '';
        },
        async err => {
          await this.notifierService.notify(
            'error',
            'Nie udało się utworzyć plutonu'
          );
          console.error(err.message || err);
        }
      );
  }

  removeSoldier(soldierId: number) {
    if (!window.confirm('Czy an pewno usunąć żołnierza?')) {
      return;
    }
    this.companyService
      .removeSoldierFromCompany(this.company.nrKompanii, soldierId)
      .subscribe(
        async _ => {
          await this.notifierService.notify(
            'success',
            'Usunięto żołnierza z kompanii'
          );
          const sol = this.company._Zolnierze.findIndex(
            s => s.idOsoby === soldierId
          );
          this.company._Zolnierze.splice(sol, 1);
        },
        async err => {
          await this.notifierService.notify(
            'error',
            'Nie udało się wysłać powiadomienia'
          );
          console.error(err.message || err);
        }
      );
  }

  sendNotification(target: string, title: string, msg: string) {
    if (title === '' || msg === '') {
      return;
    }
    switch (target) {
      // all soldiers
      case 'all':
        this.notificationService
          .sendNotification(this.company.nrKompanii, 0, false, title, msg)
          .subscribe(
            async _ => {
              await this.notifierService.notify(
                'success',
                'Powiadomienie zostało wysłane'
              );
              this.targetInput = '';
              this.titleInput = '';
              this.msgInput = '';
             
            },
            async err => {
              await this.notifierService.notify(
                'error',
                'Nie udało się wysłać powiadomienia'
              );
              console.error(err.message || err);
            }
          );
        break;

      // only PCA
      case 'ass':
        if (this.company._Plutony === null) {
          return;
        }
        this.company._Plutony.forEach(async p => {
          this.notificationService
            .sendNotification(
              this.company.nrKompanii,
              p.nrPlutonu,
              true,
              title,
              msg
            )
            .subscribe(
              async _ => {
                await this.notifierService.notify(
                  'success',
                  'Powiadomienie zostało wysłane'
                );
                this.targetInput = '';
                this.titleInput = '';
                this.msgInput = '';
                
              },
              async err => {
                await this.notifierService.notify(
                  'error',
                  'Nie udało się wysłać powiadomienia'
                );
                console.error(err.message || err);
              }
            );
        });
        break;
      default:
        return;
    }
  }

  createFolder(name: string, rootFolderId: number) {
    this.fileService
      .createNewFolder(this.company.nrKompanii, null, rootFolderId, name)
      .subscribe(
        async _ => {
          await this.notifierService.notify('success', 'Utworzono nowy folder');
          this.newFolder.nativeElement.value = '';
          this.fileTree = this.getTreeSubfolders(null);
        },
        async err => {
          await this.notifierService.notify(
            'error',
            'Nie udało się utworzyć folderu'
          );
          console.error(err.message || err);
        }
      );
  }

  createSubFolder(rootFolderId: number) {
    const name = window.prompt('Wprowadź nazwę:');
    this.createFolder(name, rootFolderId);
  }

  deleteFolder(rootFolderId: number) {
    if (!window.confirm('Czy na pewno usunąć folder i całą jego zawartość?')) {
      return;
    }
    this.fileService.deleteFolder(rootFolderId).subscribe(
      async _ => {
        await this.notifierService.notify('success', 'Usunięto folder');
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        await this.notifierService.notify(
          'error',
          'Nie udało się usunąć folderu'
        );
        console.error(err.message || err);
      }
    );
  }

  deleteFolderCustom(rootFolderId: number) {
    this.fileService.deleteFolder(rootFolderId).subscribe(
      async _ => {
        await this.notifierService.notify('success', 'Usunięto folder');
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        await this.notifierService.notify(
          'error',
          'Nie udało się usunąć folderu'
        );
        console.error(err.message || err);
      }
    );
  }

  renameFolder(rootFolderId: number) {
    const name = window.prompt('Wprowadź nazwę:');
    if (name === null || name === '') {
      return;
    }

    this.fileService.renameFolder(rootFolderId, name).subscribe(
      async _ => {
        await this.notifierService.notify('success', 'Zmieniono nazwę');
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        await this.notifierService.notify(
          'error',
          'Nie udało się zmienić nazwy'
        );
        console.error(err.message || err);
      }
    );
  }

  renameFolderCustom(folderName: string, rootFolderId: number) {
    const name = folderName;
    if (name === null || name === '') {
      return;
    }

    this.fileService.renameFolder(rootFolderId, name).subscribe(
      async _ => {
        await this.notifierService.notify('success', 'Zmieniono nazwę');
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        await this.notifierService.notify(
          'error',
          'Nie udało się zmienić nazwy'
        );
        console.error(err.message || err);
      }
    );
  }

  uploadFile(rootFolder: number) {
    this.uploadRootFolder = rootFolder;
    const event = new MouseEvent('click', { bubbles: false });
    this.fileInput.nativeElement.dispatchEvent(event);
  }

  selectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.fileService.uploadFile(file, this.uploadRootFolder).subscribe(
        async _ => {
          await this.notifierService.notify('success', 'Przesłano plik');
          this.uploadRootFolder = null;
          this.fileTree = this.getTreeSubfolders(null);
        },
        async err => {
          await this.notifierService.notify(
            'error',
            'Nie udało się przesłać pliku'
          );
          console.error(err.message || err);
        }
      );
    }
  }

  downloadFile(fileId: number) {
    this.fileService.getFile(fileId).subscribe();
  }

  private createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.timeTableImg = reader.result;
      },
      false
    );

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
        .subscribe(
          async _ => {
            await this.notifierService.notify(
              'success',
              'Przesłano plan zajęć'
            );
            setTimeout(() => this.fileService
            .getTimeTableImage(this.company.nrKompanii)
            .subscribe(resp => {
              this.createImageFromBlob(resp.body);
            }), 1000);
            
          },
          async err => {
            await this.notifierService.notify(
              'error',
              'Nie udało się przesłać planu'
            );
            console.error(err.message || err);
          }
        );
    }
  }

  getTreeSubfolders = (ff: FileFolder) => {
    return this.fileService.getCompanyFolders(
      this.company.nrKompanii,
      ff === null ? null : ff.folder.idKatalogu
    );
  };

  showContent(content: number) {
    if (content === 1) {
      this.soldierListShow = true;
    } else {
      this.soldierListShow = false;
    }
    if (content === 2) {
      this.addAskShow = true;
    } else {
      this.addAskShow = false;
    }
    if (content === 3) {
      this.sendMessageShow = true;
    } else {
      this.sendMessageShow = false;
    }
    if (content === 4) {
      this.filesShow = true;
    } else {
      this.filesShow = false;
    }
    if (content === 5) {
      this.showScheduleFlag = true;
    } else {
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

  openContextMenu(
    rootFolderId: number,
    modalTitle: string,
    modalPlaceholder: string,
    optionSelector: number
  ): void {
    const dialogRef = this.dialog.open(ContextModal, {
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
      } else if (!modalPlaceholder) {
        this.checked = result;
      }

      if (this.folderName) {
        if (optionSelector === 1) {
          this.createFolder(this.folderName, rootFolderId);
        } else if (optionSelector === 2) {
          this.renameFolderCustom(this.folderName, rootFolderId);
        }
      }
      if (optionSelector === 3 && this.checked) {
        this.deleteFolderCustom(rootFolderId);
      }
    });
  }

  openScheduleImage(scheduleImageParam: any): void {
    const dialogRef = this.dialog.open(ScheduleModal, {
      data: { scheduleImage: scheduleImageParam }
    });
    console.log(scheduleImageParam);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog(platoonIdParam: number): void {
    const data: DialogData = {
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
}

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class Modal {
  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(opt: string): void {
    this.data.callback(opt, this.data.platoonId);
    this.dialogRef.close();
  }
}
@Component({
  selector: '../modals/schedule-modal',
  templateUrl: '../modals/schedule-modal.html',
  styleUrls: ['../modals/schedule-modal.scss']
})
export class ScheduleModal {
  constructor(
    public dialogRef: MatDialogRef<ScheduleModal>,
    @Inject(MAT_DIALOG_DATA) public data: ScheduleDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  platoonId: number;
  callback: (param1: any, param2: any) => void;
}
export interface ScheduleDialogData {
  scheduleImage: any;
}
