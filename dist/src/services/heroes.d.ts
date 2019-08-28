import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';
export declare const getAll: () => Promise<Heroes[]>;
export declare const addhero: (hero: IHeroRequest) => Promise<Heroes>;
export declare const updatehero: (hero: IHeroRequest) => Promise<Heroes>;
export declare const deletehero: (id: number) => Promise<import("typeorm").DeleteResult>;
