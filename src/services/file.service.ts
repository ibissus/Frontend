import { FolderContent } from './../models/fileFolder';
import { RequestType } from './../models/request';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Observer } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';
import { Folder } from 'src/models/folder';
import { FileFolder } from 'src/models/fileFolder';
import { Summary } from '@angular/compiler';
declare var require: any;

@Injectable({ providedIn: 'root' })
export class FileService {

    createNewFolder(companyId: number, platoonId: number, rootFolderId: number, name: string) {
        const dto = {
            companyId,
            platoonId,
            rootFolderId,
            name
        };
        return this.http.post(this.url + 'folder', dto);
    }

    getCompanyFolders(companyId: number, rootFolder: number): Observable<FileFolder[]> {

        return Observable.create((observer: Observer<FileFolder[]>) => {
            const ff: FileFolder[] = [];

            let p = { };
            if (rootFolder !== null) {
                p = { rootFolder: rootFolder.toString() };
            }

            this.http.get(this.url + 'folder/' + companyId, { params: p })
                .subscribe((fol: FolderContent) => {
                    fol.folders.forEach(f => {
                        ff.push(new FileFolder(null, f));
                    });
                    if (fol.files !== null) {
                        fol.files.forEach(f => {
                            ff.push(new FileFolder(f, null));
                        });
                    }
                    observer.next(ff);
                    observer.complete();
                });
        });
    }

    getPlatoonFolders(companyId: number, platoonId, rootFolder: number): Observable<FileFolder[]> {

        return Observable.create((observer: Observer<FileFolder[]>) => {
            const ff: FileFolder[] = [];

            let p = { };

            if (rootFolder !== null) {
                p = {
                    companyId: companyId.toString(),
                    platoonId: platoonId.toString(),
                    rootFolder: rootFolder.toString()
                 };
            } else {
                p = {
                    companyId: companyId.toString(),
                    platoonId: platoonId.toString()
                 };
            }

            this.http.get(this.url + 'folder/', { params: p })
                .subscribe((fol: FolderContent) => {
                    fol.folders.forEach(f => {
                        ff.push(new FileFolder(null, f));
                    });
                    if (fol.files !== null) {
                        fol.files.forEach(f => {
                            ff.push(new FileFolder(f, null));
                        });
                    }
                    observer.next(ff);
                    observer.complete();
                });
        });
    }

    deleteFolder(rootFolder: number) {
        return this.http.delete(this.url + 'folder/' + rootFolder);
    }

    renameFolder(folderId: number, name: string) {
        return this.http.patch(this.url + 'folder/' + folderId, { }, { params: { newName: name } });
    }

    uploadFile(file, rootFolder: number) {
        const formData = new FormData();
        formData.append('contentFolder', rootFolder.toString());
        formData.append('description', file.name);
        formData.append('file', file);

        return this.http.post(this.url + 'file', formData);
    }

    getFile(fileId: number) {
        return this.http.get(this.url + 'file/' + fileId, { responseType: 'blob', observe: 'response' })
        .pipe(map((resp) => {
            const contentType = resp.headers.get('Content-Type');
            const fileName = decodeURIComponent(resp.headers.get('OriginalFileName')).replace('+', ' ');
            /*const details = resp.headers.get('Content-Disposition').split('; ');
            const fileName = (details.find(d => d.substr(0, 9) === 'filename=').split('='))[1];*/

            const blob = new Blob([resp.body], { type: contentType });
            const saveAs = require('file-saver');
            saveAs(blob, fileName);
        }));
    }


     getTimeTableImage(companyId: number) {
        return this.http.get(this.url + 'timetable/' + companyId, { responseType: 'blob', observe: 'response' });
     }

     updateTimeTableImage(file, companyId: number) {
        const formData = new FormData();
        formData.append('file', file);

        return this.http.post(this.url + 'timeTable/' + companyId, formData);
     }

    constructor(private http: HttpClient, @Inject('API_URL') private url: string) {}
}
