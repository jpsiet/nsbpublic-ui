import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CashoverrideFormContComponent } from './cashoverride-form-cont.component';

describe('CashoverrideFormContComponent', () => {
  let component: CashoverrideFormContComponent;
  let fixture: ComponentFixture<CashoverrideFormContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashoverrideFormContComponent ],
      imports:[CommonModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoverrideFormContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  describe('ngonDestory test', ()=>{

    it(' called ' , () =>{
      const mockSubscription = jasmine.createSpyObj('Subscription',['unsubscribe']);

      (mockSubscription.unsubscribe as jasmine.Spy).and.callFake(()=>{});

      component['subcriptions'][0] = mockSubscription;
      component['subcriptions'][1] = mockSubscription;
      component['subcriptions'][2] = mockSubscription;
      component['subcriptions'][3] = mockSubscription;
      component.ngOnDestroy();
      expect(mockSubscription.unsubscribe).toHaveBeenCalled();
      expect(mockSubscription.unsubscribe).toHaveBeenCalledTimes(4);
    })

  })
});
