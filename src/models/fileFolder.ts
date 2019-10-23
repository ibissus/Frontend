import { File } from './file';
import { Folder } from './folder';

export class FileFolder {
    isFolder: boolean;
    folder: Folder;
    file: File;

    constructor(f: File, fol: Folder) {
        this.isFolder = f === null ? true : false;
        this.file = f;
        this.folder = fol;
    }
}

export class FolderContent {
    folders: Folder[];
    files: File[];
}
