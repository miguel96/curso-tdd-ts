export const isValid = (password:string)=>{
    return new PasswordValidator(password).isValid();
};

class PasswordValidator {
    constructor(private readonly password: string) {
    }

    isValid():boolean {

        return this.hasUppercase()
            && this.hasLowercase()
            && this.hasValidLength()
            && this.hasNumber()
            && this.hasUnderscore()
            && this.hasAt();

    }

    private hasUnderscore(){
        return this.password.includes('_');
    }
    private hasAt(){
        return this.password.includes('@');
    }

    private hasNumber(){
        return !!this.password.match(/[0-9]/)
    }

    private hasUppercase() {
        return this.password.toUpperCase() !== this.password;
    }

    private hasLowercase() {
        return this.password.toLowerCase() !== this.password;
    }

    private hasValidLength() {
        return this.password.length > 8;
    }
}
