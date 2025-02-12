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
import { PutDeleteComponent } from './components/put-delete/put-delete.component';
import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './components/service/auth.guard';
import { SignalComponent } from './components/signal/signal.component';

export const routes: Routes = [
    {  //default route
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
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
                component : DataBindingComponent,
                canActivate : [authGuard]
            },
            {
                path:'signal',
                component : SignalComponent
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
                path:'ng-template',
                component : NgtemplateComponent
            },
            {
                path:'ng-container',
                component : NgContainerComponent
            },
            {
                path:'view-child',
                component : ViewchildComponent
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
            },
            {
                path:'put-delete',
                component : PutDeleteComponent
            }
        ]
    },
    
];
