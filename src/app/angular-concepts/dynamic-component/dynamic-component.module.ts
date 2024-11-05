import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { CashoverrideContComponent } from './cashoverride-cont/cashoverride-cont.component';
import { CashoverrideComponent } from './cashoverride/cashoverride.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicComponentRoutingModule } from './dynamic-comp-route.module';
import { PeopleListComponent } from './people/people-list.component';
import { TabsContComponent } from './tabs/tabs-cont.component';
import { TestComponent } from './people/test.component';
import { PersonEditComponent } from './people/people-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashoverrideFormContComponent } from './cashoverride-form-cont/cashoverride-form-cont.component';
import { BasicComponent } from './cashoverride/basic.comp';
import { AddressFormComponent } from './address-form/address-form.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    DynamicComponentComponent,
    TabsComponent,
    TabComponent,
    CashoverrideContComponent,
    CashoverrideComponent,
    PeopleListComponent,
    PersonEditComponent,
    BasicComponent,
    TestComponent,
    TabsContComponent,
    CashoverrideFormContComponent,
    AddressFormComponent,
    SkillComponent,
  ],
  imports: [CommonModule, HttpClientModule,
            ReactiveFormsModule,
            DynamicComponentRoutingModule],
})
export class DynamicComponentModule {}
