import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaApipokemonComponent } from './tabla-apipokemon.component';

describe('TablaApipokemonComponent', () => {
  let component: TablaApipokemonComponent;
  let fixture: ComponentFixture<TablaApipokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaApipokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaApipokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
