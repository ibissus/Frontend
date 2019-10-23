import { Soldier } from 'src/models/soldier';
export enum RequestType {
    CC, // Company Commander
    PC, // Platoon Commander
    PA, // Platoon Commander Assistant
    JC, // Join Company Group
    JP // Join Platoon Group
}

export class Request {
    // tslint:disable: variable-name
    idProsby: number;
    nrKompanii: number;
    nrPlutonu: number;
    idZatwierdzajacego: number;
    idZglaszajacego: number;
    obsluzona: boolean;
    typProsby: RequestType;
    _Zglaszajacy: Soldier;

    static getRequestTypeString(req: RequestType): string {
        // Żołnierz prosi o zaakceptowanie...
        switch (req) {
            case RequestType.PC:
                return 'stanowiska dowódcy plutonu';
            case RequestType.JC:
                return 'dołączenia do kompanii';
            case RequestType.JP:
                return 'dołączenia do plutonu';
            case RequestType.PA:
                return 'stanowiska funkcyjnego plutonu';
        }
    }
}
