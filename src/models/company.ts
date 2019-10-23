import { File } from './file';
import { Request } from './request';
import { Folder } from './folder';
import { Soldier } from './soldier';
import { Platoon } from './platoon';

export class Company {
    // tslint:disable: variable-name
    nrKompanii: number;
    idDowodcy: number;
    _Dowodca: Soldier;
    _Plutony: Platoon[];
    _Katalogi: Folder[];
    _Prosby: Request[];
    _Zolnierze: Soldier[];
    _PlanZajec: File;
}
