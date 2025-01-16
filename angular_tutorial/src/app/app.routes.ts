import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PostApiComponent } from './components/post-api/post-api.component';

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
    },
    {
        path:'pipe',
        component : PipeComponent
    },
    {
        path:'template',
        component : TemplateComponent
    },
    {
        path:'reactive',
        component : ReactiveComponent
    },
    {
        path:'get-api',
        component : GetApiComponent
    },
    {
        path:'post-api',
        component : PostApiComponent
    }
];
