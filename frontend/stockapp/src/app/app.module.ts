import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CnavComponent } from './components/client/cnav/cnav.component';
import { AnavComponent } from './components/admin/anav/anav.component';
import { ClandingComponent } from './components/client/clanding/clanding.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
//import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { ImportDataComponent } from './components/admin/import-data/import-data.component';
import { ManageCompaniesComponent } from './components/admin/manage-companies/manage-companies.component';
import { ManageSEComponent } from './components/admin/manage-se/manage-se.component';
import { CompanyDetails3Component } from './components/client/company-details3/company-details3.component';
import { CompanyComparisonComponent } from './components/client/company-comparison/company-comparison.component';
import { UserDetailsComponent } from './components/client/user-details/user-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AlandingComponent } from './components/admin/alanding/alanding.component'

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogoutComponent } from './components/logout/logout.component';
import { BarComponent } from './components/client/charts/bar/bar.component';
import { PieComponent } from './components/client/charts/pie/pie.component';
import { ScatterComponent } from './components/client/charts/scatter/scatter.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TotalCompComponent } from './components/client/total-comp/total-comp.component';
import { CompanyprofileComponent } from './components/client/companyprofile/companyprofile.component';
import { SeprofileComponent } from './components/client/seprofile/seprofile.component';
import { CrudCompanyComponent } from './components/admin/crud-company/crud-company.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { CompanyDetailsComponent } from './components/admin/company-details/company-details.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CnavComponent,
    AnavComponent,
    ClandingComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ImportDataComponent,
    ManageCompaniesComponent,
    ManageSEComponent,
    CompanyDetails3Component,
    CompanyComparisonComponent,
    UserDetailsComponent,
    AboutUsComponent,
    AlandingComponent,
    LogoutComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    TotalCompComponent,
    CompanyprofileComponent,
    SeprofileComponent,
    CrudCompanyComponent,
    AddCompanyComponent,
    CompanyDetailsComponent,
    CompanyListComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
