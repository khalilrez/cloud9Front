import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleResearchComponent } from './single-research/single-research.component';
import { ResearchComponent } from './research/research.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminSetsComponent } from './admin-sets/admin-sets.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminSecurityComponent } from './admin-security/admin-security.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    LoginComponent,
    ContactComponent,
    SingleTeamComponent,
    BlogOneComponent,
    BlogTwoComponent,
    SingleBlogComponent,
    SingleServiceComponent,
    ShopComponent,
    CheckoutComponent,
    SingleProductComponent,
    SingleResearchComponent,
    ResearchComponent,
    NotfoundComponent,
    ComingsoonComponent,

    AdminComponent,
    AdminProfileComponent,
    AdminSetsComponent,
    AdminUsersComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    AdminSecurityComponent,
    DeliveryComponent,
    ReclamationComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
