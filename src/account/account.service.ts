import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    constructor(@InjectModel('Account') private readonly accountModel: Model<Account>) { }
    // fetch all accounts
    async getAllAccount(): Promise<Account[]> {
        const accounts = await this.accountModel.find().exec();
        return accounts;
    }
}
