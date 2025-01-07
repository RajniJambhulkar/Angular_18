import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component : AddEmployeeComponent
    },
    {
        path:'emp-list',
        component : EmployeeListComponent
    },
    {
        path:'data-binding',
        component : DataBindingComponent
    },
    {
        path:'structural-dir',
        component : StructuralDirectivesComponent
    },
    {
        path:'attribute-dir',
        component : AttributeDirectivesComponent
    }
];
