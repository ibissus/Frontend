import { Soldier } from 'src/models/soldier';
import { RequestType } from './../models/request';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    sendNotification(companyId: number, platoonId: number, ass: boolean, title: string, body: string) {
        const dto = {
            companyId,
            platoonId,
            onlyAssistants: ass,
            title,
            body
          };

        return this.http.post(this.url + 'notification', dto);
    }


    constructor(private http: HttpClient, @Inject('API_URL') private url: string) {

    }
}
