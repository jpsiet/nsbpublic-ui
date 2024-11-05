
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule,MatDialogModule,MatMenuModule,RouterModule,
        RouterTestingModule],
      providers: []
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('ng on it ', fakeAsync(() => {
    expect(component).toBeTruthy();
    // Create a spy on the getProducts method of the ProductService

  }));
});

