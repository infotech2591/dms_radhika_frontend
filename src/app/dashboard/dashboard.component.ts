import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DealerComponent } from './dealer/dealer.component';
import { CustomerComponent } from './customer/customer.component';
import { DealerStocksComponent } from './dealer-stocks/dealer-stocks.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef | any;
  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver
    ) { }
  
  isDashboardSelected = true;
  isEmailsDialogSelected = false;
  navHeading:any = 'DMS'
  activeItem: string | null = 'dashboard';
  ngOnInit(): void {
    setTimeout(() => {
      this.dashboardDetails();
    }, 100);
  }
  dashboardDetails() {
    this.navHeading = 'DMS'
    this.activeItem = 'dashboard';
    this.loadComponent(HomeComponent);
  }

  getDealers() {
    this.navHeading = 'Dealers'
    this.activeItem = 'dealer';
    this.loadComponent(DealerComponent);
  }

  getCustomer() {
    this.navHeading = 'Customers'
    this.activeItem = 'customer';
    this.loadComponent(CustomerComponent);
  }

  dealerStocks() {
    this.navHeading = 'Dealer Stocks'
    this.activeItem = 'stocks';
    this.loadComponent(DealerStocksComponent);
  }

  logout(){
    localStorage.setItem('isLoggedIn','false');
    this.router.navigate(['/login']);
  }

  private loadComponent(component: any) {
    this.dynamicComponentContainer.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentRef = this.dynamicComponentContainer.createComponent(
      componentFactory
    );
  }
}
