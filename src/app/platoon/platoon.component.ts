import { Request } from './../../models/request';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Company } from 'src/models/company';
import { User } from 'src/models/user';
import { Observable, Observer } from 'rxjs';
import { FileFolder } from 'src/models/fileFolder';
import { CompanyService } from 'src/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/services/auth.service';
import { NotificationService } from 'src/services/notification.service';
import { FileService } from 'src/services/file.service';
import { PlatoonService } from 'src/services/platoon.service';
import { Platoon } from 'src/models/platoon';
import { Soldier } from 'src/models/soldier';
import { ContextModal } from '../modals/context-menu-modal/context-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-platoon',
  templateUrl: './platoon.component.html',
  styleUrls: ['./platoon.component.scss']
})
export class PlatoonComponent implements OnInit {
  private readonly notifier: NotifierService;


  checked = false;
  folderName: string;
   // for static call
   Request = Request;

   // company: Company;
   platoon: Platoon;
   user: User;
   userObs: Observable<User>;

   fileTree: Observable<FileFolder[]>;
   uploadRootFolder: number;

  addAskShow = false;
  sendMessageShow = false;
  soldierListShow = false;
  filesShow = false;
  showContentFlag = false;

   @ViewChild('target', {static: false}) target: ElementRef;
   @ViewChild('title', {static: false}) title: ElementRef;
   @ViewChild('msg', {static: false}) msg: ElementRef;
   // TO DO: In Component
   @ViewChild('newFolder', {static: false}) newFolder: ElementRef;
   @ViewChild('fileInput', {static: false}) fileInput: ElementRef;


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
    this.authService.currentUser.subscribe( u => this.user = u );
    // this.user = JSON.parse(localStorage.getItem('currentUser'));

    const companyId = this.route.snapshot.paramMap.get('companyId');
    const platoonId = this.route.snapshot.paramMap.get('platoonId');

    this.getPlatoonDetails(companyId, platoonId);
  }

  isFolder(item: FileFolder) {
    return item.isFolder;
  }

  isFile(item: FileFolder) {
    return !item.isFolder;
  }

  getFunkcyjni() {
    return Observable.create((observer: Observer<Soldier[]>) => {
      observer.next(this.platoon._Zolnierze.filter(s => s.funkcyjny));
      observer.complete();
    });
  }

  getPlatoonDetails(companyId, platoonId) {
    this.platoonService.getPlatoonDetails(companyId, platoonId)
      .subscribe((p: Platoon) => {
        this.platoon = p;
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        if (err.status === 403 || err === 'Forbidden') {
          await this.notifierService.notify(
            'error',
            'Nie masz uprawnień do przeglądania tej strony'
          );
          return;
        }
        await this.notifierService.notify('error',
          'Nie udało się pobrać szczegółow plutonu'
        );
        console.error(err.message || err);
      }
    );
  }

  createSubFolder(rootFolderId: number) {
    const name = window.prompt('Wprowadź nazwę:');
    this.createFolder(name, rootFolderId);
  }

  request(requestId: number, decision: boolean) {
    this.platoonService.resolveRequest(requestId, decision).subscribe(
      async _ => {
        await this.notifierService.notify('success', 'Pomyślnie przetowrzono prośbę');

        const req: number = this.platoon._Prosby.findIndex(q => q.idProsby === requestId);
        this.platoon._Prosby.splice(req, 1);
      },
      async err => {
        await this.notifierService.notify('error', 'Nie udało się przetowrzyć prośby');
        console.error(err.message || err);
      }
    );
  }

  requestAssRole() {
    this.platoonService.sendAssRequest(this.platoon.nrKompanii, this.platoon.nrPlutonu)
    .subscribe(
      async _ => {
        await this.notifierService.notify('success', 'Prośba została wysłana');
      },
      async err => {
        await this.notifierService.notify('error',
          'Nie udało się wysłać prośby'
        );
        console.error(err.message || err);
      }
    );
  }

  sendNotification(target: string, title: string, msg: string) {
    if (title === '' || msg === '') { return; }
    switch (target) {
      // all soldiers
      case 'all':
        this.notificationService
          .sendNotification(this.platoon.nrKompanii, this.platoon.nrPlutonu, false, title, msg)
          .subscribe(
            async _ => {
              await this.notifierService.notify('success', 'Powiadomienie zostało wysłane');
              this.target.nativeElement.value = '';
              this.title.nativeElement.value = '';
              this.msg.nativeElement.value = '';
            },
            async err => {
              await this.notifierService.notify('error',
                'Nie udało się wysłać powiadomienia'
              );
              console.error(err.message || err);
            }
          );
        break;

      // only PCA
      case 'ass':
        this.notificationService
          .sendNotification(this.platoon.nrKompanii, this.platoon.nrPlutonu, true, title, msg)
          .subscribe(
            async _ => {
              await this.notifierService.notify('success',
                'Powiadomienie zostało wysłane'
              );
              this.target.nativeElement.value = '';
              this.title.nativeElement.value = '';
              this.msg.nativeElement.value = '';
            },
            async err => {
              await this.notifierService.notify('error',
                'Nie udało się wysłać powiadomienia'
              );
              console.error(err.message || err);
            }
          );
        break;
        default: return;
    }
  }

  createFolder(name: string, rootFolderId: number) {
    this.fileService.createNewFolder(this.platoon.nrKompanii, this.platoon.nrPlutonu, rootFolderId, name)
      .subscribe(async _ => {
        await this.notifierService.notify('success', 'Utworzono nowy folder');
        this.newFolder.nativeElement.value = '';
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        await this.notifierService.notify('error', 'Nie udało się utworzyć folderu');
        console.error(err.message || err);
      });
  }

  deleteFolder(rootFolderId: number) {
    if (!window.confirm('Czy na pewno usunąć folder i całą jego zawartość?')) { return; }
    this.fileService.deleteFolder(rootFolderId)
      .subscribe(async _ => {
        await this.notifierService.notify('success', 'Usunięto folder');
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        await this.notifierService.notify('error', 'Nie udało się usunąć folderu');
        console.error(err.message || err);
      });
  }

  deleteFolderCustom(rootFolderId: number) {
    this.fileService.deleteFolder(rootFolderId)
      .subscribe(async _ => {
        await this.notifierService.notify('success', 'Usunięto folder');
        this.fileTree = this.getTreeSubfolders(null);
      },
      async err => {
        await this.notifierService.notify('error', 'Nie udało się usunąć folderu');
        console.error(err.message || err);
      });
  }

  renameFolder(rootFolderId: number) {
    const name = window.prompt('Wprowadź nazwę:');
    if (name === null || name === '') { return; }

    this.fileService.renameFolder(rootFolderId, name)
    .subscribe(async _ => {
      await this.notifierService.notify('success', 'Zmieniono nazwę');
      this.fileTree = this.getTreeSubfolders(null);
    },
    async err => {
      await this.notifierService.notify('error', 'Nie udało się zmienić nazwy');
      console.error(err.message || err);
    });
  }
  renameFolderCustom(rootFolderId: number, folderName: string) {
    const name = folderName;
    if (name === null || name === '') { return; }

    this.fileService.renameFolder(rootFolderId, name)
    .subscribe(async _ => {
      await this.notifierService.notify('success', 'Zmieniono nazwę');
      this.fileTree = this.getTreeSubfolders(null);
    },
    async err => {
      await this.notifierService.notify('error', 'Nie udało się zmienić nazwy');
      console.error(err.message || err);
    });
  }

  uploadFile(rootFolder: number) {
    this.uploadRootFolder = rootFolder;
    const event = new MouseEvent('click', {bubbles: false});
    this.fileInput.nativeElement.dispatchEvent(event);
  }

  selectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.fileService.uploadFile(file, this.uploadRootFolder)
        .subscribe(async _ => {
          await this.notifierService.notify('success', 'Przesłano plik');
          this.uploadRootFolder = null;
          this.fileTree = this.getTreeSubfolders(null);
        },
        async err => {
          await this.notifierService.notify('error', 'Nie udało się przesłać pliku');
          console.error(err.message || err);
        });
    }
  }

  downloadFile(fileId: number) {
    this.fileService.getFile(fileId).subscribe();
  }

 getTreeSubfolders = (ff: FileFolder) => {
  return this.fileService.getPlatoonFolders(
    this.platoon.nrKompanii, this.platoon.nrPlutonu,
    ff === null ? null : ff.folder.idKatalogu
  );
}

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
  if (content >= 5) {
  this.soldierListShow = false;
  this.addAskShow = false;
  this.sendMessageShow = false;
  this.filesShow = false;
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
        this.renameFolderCustom( rootFolderId, this.folderName);
      }
    }
    if (optionSelector === 3 && this.checked) {
      this.deleteFolderCustom(rootFolderId);
    }
  });
}
}
