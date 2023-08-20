import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealerStocksComponent } from './add-dealer-stocks.component';

describe('AddDealerStocksComponent', () => {
  let component: AddDealerStocksComponent;
  let fixture: ComponentFixture<AddDealerStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDealerStocksComponent]
    });
    fixture = TestBed.createComponent(AddDealerStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
