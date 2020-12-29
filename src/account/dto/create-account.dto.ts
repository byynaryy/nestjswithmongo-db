// ./src/customer/dto/create-account.dto.ts
export class CreateAccountDTO {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly description: string;
    readonly created_at: Date;
}
