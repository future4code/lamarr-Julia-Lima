export class User {
    private id: string;
    private email: string;
    private password: string;

    constructor(id: string, email: string, password: string ){
        this.id = id;
        this.email = email;
        this.password = password
        
    }


    public getEmail(): string {
        return this.email;
    }
    public getPassword(): string {
        return this.password;
    }

    public setEmail(newEmail: string): void{
        this.email = newEmail;
    }
    public setPassword(newPassword: string): void{
        this.password = newPassword;
    }
}