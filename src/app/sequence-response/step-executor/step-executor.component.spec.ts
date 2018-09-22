import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepExecutorComponent } from './step-executor.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { anything, instance, mock, when } from 'ts-mockito';
import { DataService } from '../../app-common/data-service/data.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('StepExecutorComponent', () => {
  let component: StepExecutorComponent;
  let fixture: ComponentFixture<StepExecutorComponent>;
  let mockedData: DataService;

  beforeEach(async(() => {
    mockedData = mock(DataService);
    when(mockedData.getData(anything(), anything(), anything())).thenReturn(of({id: '1'}));
    TestBed.configureTestingModule({
      declarations: [
        StepExecutorComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {
          provide: DataService,
          useFactory: () => instance(mockedData)
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 1}),
            snapshot: {}
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});