import PersonBuilder from "./UserBuilder";

class User {
    public permissionsList: string[];
    public name: string;
    public isEmployee: boolean;
    public isManager: boolean;
    public hours: number;
    public money: number;

    constructor(builder: PersonBuilder) {
        this.name = builder.name
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 0;
        this.money = builder.money || 0;
        this.permissionsList = builder.permissionsList || [];
    }
    toString() {
        return JSON.stringify(this);
    }
}
export default User;