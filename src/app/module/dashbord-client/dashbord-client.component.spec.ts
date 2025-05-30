import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordClientComponent } from './dashbord-client.component';

describe('DashbordClientComponent', () => {
  let component: DashbordClientComponent;
  let fixture: ComponentFixture<DashbordClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
