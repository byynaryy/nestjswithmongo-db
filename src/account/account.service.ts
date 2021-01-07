import { Injectable } from '@nestjs/common';

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

}
