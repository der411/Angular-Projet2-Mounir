import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBiensComponent } from './liste-biens.component';

describe('ListeBiensComponent', () => {
  let component: ListeBiensComponent;
  let fixture: ComponentFixture<ListeBiensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeBiensComponent]
    });
    fixture = TestBed.createComponent(ListeBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
