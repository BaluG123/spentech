import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharemarketComponent } from './sharemarket.component';

describe('SharemarketComponent', () => {
  let component: SharemarketComponent;
  let fixture: ComponentFixture<SharemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharemarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
