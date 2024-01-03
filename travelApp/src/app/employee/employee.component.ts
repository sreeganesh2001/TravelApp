import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  user=true
  employees:any[]=[];
  constructor(){
     this.employees.push({ name: 'John Doe', position: 'Software Developer', email: 'john@gmail.com', phone: '9876785642', salary: '20,000,00' }),
     this.employees.push({ name: 'Jane Smith', position: 'UX Designer', email: 'jane@gmail.com', phone: '8765432109', salary: '25,000,00' }),
     this.employees.push({ name: 'Robert Johnson', position: 'Project Manager', email: 'robert@gmail.com', phone: '7654321987', salary: '30,000,00' }),
     this.employees.push({ name: 'Mary Williams', position: 'Marketing Specialist', email: 'mary@gmail.com', phone: '6543219876', salary: '35,000,00' }),
     this.employees.push({ name: 'Michael Davis', position: 'Financial Analyst', email: 'michael@gmail.com', phone: '5432198765', salary: '40,000,00' }),
     this.employees.push({ name: 'John Doe', position: 'Software Developer', email: 'john@gmail.com', phone: '9876785642', salary: '20,000,00' }),
     this.employees.push({ name: 'Jane Smith', position: 'UX Designer', email: 'jane@gmail.com', phone: '8765432109', salary: '25,000,00' }),
     this.employees.push({ name: 'Robert Johnson', position: 'Project Manager', email: 'robert@gmail.com', phone: '7654321987', salary: '30,000,00' }),
     this.employees.push({ name: 'Mary Williams', position: 'Marketing Specialist', email: 'mary@gmail.com', phone: '6543219876', salary: '35,000,00' }),
     this.employees.push({ name: 'Michael Davis', position: 'Financial Analyst', email: 'michael@gmail.com', phone: '5432198765', salary: '40,000,00' }),
     this.employees.push({ name: 'John Doe', position: 'Software Developer', email: 'john@gmail.com', phone: '9876785642', salary: '20,000,00' }),
     this.employees.push({ name: 'Jane Smith', position: 'UX Designer', email: 'jane@gmail.com', phone: '8765432109', salary: '25,000,00' }),
     this.employees.push({ name: 'Robert Johnson', position: 'Project Manager', email: 'robert@gmail.com', phone: '7654321987', salary: '30,000,00' }),
     this.employees.push({ name: 'Mary Williams', position: 'Marketing Specialist', email: 'mary@gmail.com', phone: '6543219876', salary: '35,000,00' }),
     this.employees.push({ name: 'Michael Davis', position: 'Financial Analyst', email: 'michael@gmail.com', phone: '5432198765', salary: '40,000,00' }),
     this.employees.push({ name: 'John Doe', position: 'Software Developer', email: 'john@gmail.com', phone: '9876785642', salary: '20,000,00' }),
     this.employees.push({ name: 'Jane Smith', position: 'UX Designer', email: 'jane@gmail.com', phone: '8765432109', salary: '25,000,00' }),
     this.employees.push({ name: 'Robert Johnson', position: 'Project Manager', email: 'robert@gmail.com', phone: '7654321987', salary: '30,000,00' }),
     this.employees.push({ name: 'Mary Williams', position: 'Marketing Specialist', email: 'mary@gmail.com', phone: '6543219876', salary: '35,000,00' }),
     this.employees.push({ name: 'Michael Davis', position: 'Financial Analyst', email: 'michael@gmail.com', phone: '5432198765', salary: '40,000,00' })

  }
  click(){
    this.user=false
  }
  show(){
    this.user=true
  }


}
