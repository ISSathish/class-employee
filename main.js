class Employee{
	constructor(name,salary){
		this.name=name;
		this.salary=salary;
	}
	calculate(){
		let ans=12*this.salary;
		console.log(ans)
	}
}
	class Manager extends Employee{
		constructor(name,salary,department,bonus){
		super(name,salary)
			this.department=department;
			this.bonus=bonus;
	}
	calculate(){
		let d=this.salary+this.bonus;
		console.log(`I am ${this.name} Monthly salary is ${this.salary} Department is ${this.department} my bonus is ${this.bonus} total salary ${d}`)
	}
	}
let res=new Employee("sathish",10000)
res.calculate()
let res2=new Manager("sathish",10000,"Tester",1000);
res2.calculate()