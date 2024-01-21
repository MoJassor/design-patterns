import User from "./User";

class UserBuilder {
	public isEmployee = false;
	public isManager = false;
	public hours = 0;
	public money = 0;
	public permissionsList: string[] = [];
	constructor(public name: string) {
		this.name = name;
	}

	makeEmployee() {
		this.isEmployee = true;
		return this;
	}

	makeManager(hours?: number) {
		this.isManager = true;
		if (hours)
			this.hours = hours;
		return this;
	}

	makePartTime(hours: number) {
		this.hours = hours;
		return this;
	}

	withMoney(money: number) {
		this.money = money;
		return this;
	}

	withList(list: string[] = []) {
		if (!this.isEmployee)
			throw new Error('You are not an Employee')
		this.permissionsList = list;
		return this;
	}

	build() {
		return new User(this);
	}

}

export default UserBuilder;
