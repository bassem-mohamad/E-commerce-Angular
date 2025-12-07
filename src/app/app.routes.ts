import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { ParentComponent } from './Components/parent-component/parent-component';
import { NotFound } from './Components/not-found/not-found';
import { AboutUs } from './Components/about-us/about-us';
import { ProductDetails } from './Components/product-details/product-details';
import { RegisterTemplateForm } from './Components/register-template-form/register-template-form';
import { RegisterReactiveForm } from './Components/register-reactive-form/register-reactive-form';
import { LoginReactiveForm } from './Components/login-reactive-form/login-reactive-form';
import { authGuard } from './Gaurds/auth-guard';
import { AddProduct } from './Components/add-product/add-product';

export const routes: Routes = [

  // {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'',redirectTo:'Login',pathMatch:'full'},

  {path:'home',component:Home,title:'Home page'},

  {path:'products',component:ParentComponent,title:'products',canActivate:[authGuard]},

  {path:'products/:id',component:ProductDetails,title:'Details'},

  {path:'AddProduct',component:AddProduct,title:'Add-Product',canActivate:[authGuard]},

  {path:'About-us',component:AboutUs,title:'About-Us'},

  // {path:'Register',component:RegisterTemplateForm,title:'Register'},

  {path:'Register',component:RegisterReactiveForm,title:'Register'},

  {path:'Login',component:LoginReactiveForm,title:'Login'},


  //not founf
  // wide card
  {path:'**',component:NotFound}

  // {path:"",component:}
];
