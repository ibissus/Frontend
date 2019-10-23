import { File } from './file';

export class Folder {
    idKatalogu: number;
    idKataloguNadrzednego: number;
    nrKompanii: number;
    nrPlutonu: number;
    nazwa: string;
    _KatalogiPodrzedne: Folder[];
    _Pliki: File[];
}
