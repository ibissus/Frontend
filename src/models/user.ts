import { Observable, of } from 'rxjs';
import { Soldier } from './soldier';

export class User {
    userId: number;
    userName: string;
    token: string;
    roleNames: string[];
    soldier: Soldier;

    get isInCCRole(): boolean {
        if (this.roleNames.indexOf('CompanyCommander') !== -1) { return true; }
        return false;
    }

}
