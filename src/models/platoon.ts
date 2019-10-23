import { Company } from 'src/models/company';
import { File } from './file';
import { Request } from './request';
import { Folder } from './folder';
import { Soldier } from './soldier';

export class Platoon {
    nrPlutonu: number;
    nrKompanii: number;
    idDowodcy: number;
    _Kompania: Company;
    _Dowodca: Soldier;
    _Katalogi: Folder[];
    _Prosby: Request[];
    _Zolnierze: Soldier[];
    _PlanZajec: File;
}
