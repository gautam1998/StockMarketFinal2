import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ClandingComponent } from './components/client/clanding/clanding.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ImportDataComponent } from './components/admin/import-data/import-data.component';
import { ManageCompaniesComponent } from './components/admin/manage-companies/manage-companies.component';
import { AlandingComponent } from './components/admin/alanding/alanding.component';
import { ManageSEComponent } from './components/admin/manage-se/manage-se.component';
import { CompanyComparisonComponent } from './components/client/company-comparison/company-comparison.component';
import { CompanyDetails3Component } from './components/client/company-details3/company-details3.component';
import { UserDetailsComponent } from './components/client/user-details/user-details.component';
import { TotalCompComponent } from './components/client/total-comp/total-comp.component';
import {CompanyprofileComponent} from './components/client/companyprofile/companyprofile.component';
import {SeprofileComponent} from './components/client/seprofile/seprofile.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { CompanyDetailsComponent } from './components/admin/company-details/company-details.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';
import { BarComponent } from './components/client/charts/bar/bar.component';
import { PieComponent } from './components/client/charts/pie/pie.component';
import { ScatterComponent } from './components/client/charts/scatter/scatter.component';


const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'clanding', component: ClandingComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'import', component:  ImportDataComponent},
  {path: 'manageCompanies', component:  ManageCompaniesComponent},
  {path: 'alanding', component: AlandingComponent},
  {path: 'managese', component: ManageSEComponent},
  {path: 'companycomparison', component: CompanyComparisonComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'companydetails', component:CompanyDetails3Component },
  {path: 'userdetails', component:UserDetailsComponent },
  {path:'tcomp',component:TotalCompComponent},
  {path: 'companyprofile',component:CompanyprofileComponent},
  {path: 'seprofile',component:SeprofileComponent},
  {path: 'addcompany',component:AddCompanyComponent},
  {path: 'listcompany',component:CompanyListComponent},
  {path: 'companydetailss',component:CompanyDetailsComponent},
  {path: 'bar',component:BarComponent},
  {path: 'pie',component:PieComponent},
  {path: 'scatter',component:ScatterComponent},
  {path: ':username', component:UserDetailsComponent},
  
  


  

];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
