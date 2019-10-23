import { Folder } from './folder';

export class File {
    idPliku: string;
    idKatalogu: number;
    rozszerzenie: string;
    naglowek: string;
    opis: string;
    dodano: string;
    katalog: Folder;
}
