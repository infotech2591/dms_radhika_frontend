import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerStocksComponent } from './dealer-stocks.component';

describe('DealerStocksComponent', () => {
  let component: DealerStocksComponent;
  let fixture: ComponentFixture<DealerStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerStocksComponent]
    });
    fixture = TestBed.createComponent(DealerStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
