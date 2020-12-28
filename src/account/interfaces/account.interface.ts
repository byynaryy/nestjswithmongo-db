// ./src/account/interfaces/account.interface.ts
import { Document } from 'mongoose';

export interface Account extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly description: string;
    readonly created_at: Date;
}
