import { IUser } from "./iuser";

export interface Iempresa {

    idEmpresa: number,
    cif: string,
    nombre: string,
    direccionFiscal: string,
    pais: string,
    user: IUser[];

}
