import { Soldier } from 'src/models/soldier';
import { RequestType } from './../models/request';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CompanyService {

    getCompaniesList() {
        return this.http.get<any>(this.url + 'company');
    }

    getCompanyDetails(companId: number) {
        return this.http.get<any>(this.url + 'company/' + companId);
    }

    sendJoinRequest(companId: number) {
        return this.http.post<any>(this.url + 'request', {
            companyId: companId,
            requestType: RequestType.JC
        });
    }

    createCompany(companId: number) {
        return this.http.post<any>(this.url + 'company/' + companId, {});
    }

    resolveRequest(requestId: number, decision: boolean) {
        const p = { decision: decision.toString() };
        return this.http.patch<any>(this.url + 'request/' + requestId, {}, { params: p } );
    }

    removeSoldierFromCompany(companyId: number, soldierId: number) {
        return this.http.delete(this.url + 'companyMembers/' + companyId, { params: { soldierId: soldierId.toString() } });
    }

    constructor(private http: HttpClient, @Inject('API_URL') private url: string) {

    }

}
