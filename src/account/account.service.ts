// ./src/account/account.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './interfaces/account.interface';
import { createAccountDTO } from './dto/create-account.dto';


@Injectable()
export class AccountService {
    constructor(@InjectModel('Account') private readonly accountModel: Model<Account>) { }

    // fetch all accounts
    async getAllAccount(): Promise<Account[]> {
        const accounts = await this.accountModel.find().exec();
        return accounts;
    }

    // Get a single account
    async getAccount(accountID): Promise<Account> {
        const account = await this.accountModel.findById(accountID).exec();
        return account;
    }

    // Post a single account
    async addAccount(createAccountDTO:Create): : Promise<Account> {
        const newAccount = await this.accountModel(createAccountDTO);
        return newAccount.save();
    }
}
