import { Soldier } from 'src/models/soldier';
import { RequestType } from './../models/request';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class PlatoonService {

    createPlatoon(companyID: number, platoonId: number) {
        return this.http.post(this.url + 'platoon/' + companyID, {}, {params: { platoonId: platoonId.toString() }});
    }

    getPlatoonDetails(companyId, platoonId) {
        return this.http.get(this.url + 'platoon', { params: {companyId, platoonId} });
    }

    resolveRequest(requestId: number, decision: boolean) {
        const p = { decision: decision.toString() };
        return this.http.patch<any>(this.url + 'request/' + requestId, {}, { params: p } );
    }

    sendJoinRequest(companyId: number, platoonId) {
        return this.http.post<any>(this.url + 'request', {
            companyId,
            platoonId,
            requestType: RequestType.JP
        });
    }

    sendAssRequest(companyId: number, platoonId) {
        return this.http.post<any>(this.url + 'request', {
            companyId,
            platoonId,
            requestType: RequestType.PA
        });
    }

    sendPcRequest(companyId: number, platoonId) {
        return this.http.post<any>(this.url + 'request', {
            companyId,
            platoonId,
            requestType: RequestType.PC
        });
    }

    constructor(private http: HttpClient, @Inject('API_URL') private url: string) {

    }
}
