import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, OnDestroy,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ExampleSelector } from 'src/app/store/selectors'
import { ExampleActions } from 'src/app/store/actions';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PortalComponent implements OnInit, OnDestroy {
  @ViewChild('buttonTemplate', { static: true }) buttonTemplate: TemplateRef<Object>;
  @ViewChild('inputTemplate', { static: true }) inputTemplate: TemplateRef<Object>;
  @ViewChild('textareaTemplate', { static: true }) textareaTemplate: TemplateRef<Object>;
  @ViewChild('checkboxTemplate', { static: true }) checkboxTemplate: TemplateRef<Object>;
  @ViewChild('selectTemplate', { static: true }) selectTemplate: TemplateRef<Object>;
  @ViewChild('newFormContainer') newFormContainer: ElementRef;
  @ViewChildren('newForm') newForm: QueryList<any>;
  @ViewChild('newF') newF: ElementRef

  color: string;
  width: string;
  height: string;
  fontSize: string;
  borderRadius: string;
  borderColor: string;

  showNewForm: boolean = false;

  form: FormGroup;

  activeElement: HTMLElement;

  todo: {type: string}[] = []
  done: {type: string}[] = [];

  copy: {type: string}[] = []

  destroySubscribe = new Subject();

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.select(ExampleSelector.initialForm)
      .subscribe((el: {type: string}[] ) => {
        this.todo = el;
      })

    this.form = new FormGroup({});
    this.form.addControl('input', new FormControl());
    this.form.addControl('textarea', new FormControl());
    this.form.addControl('checkbox', new FormControl());
    this.form.addControl('select', new FormControl());

    this.store.pipe(select(ExampleSelector.changeStyle('color')), (takeUntil(this.destroySubscribe)))
      .subscribe(el =>
        this.color = el);

    this.store.pipe(select(ExampleSelector.changeStyle('fontSize')), (takeUntil(this.destroySubscribe)))
      .subscribe((el) => {
        this.fontSize = el});

    this.store.pipe(select(ExampleSelector.changeStyle('width')), (takeUntil(this.destroySubscribe)))
      .subscribe(el =>
        this.width = el);

    this.store.pipe(select(ExampleSelector.changeStyle('height')), (takeUntil(this.destroySubscribe)))
      .subscribe(el =>
        this.height = el);

    this.store.pipe(select(ExampleSelector.changeStyle('borderColor')), (takeUntil(this.destroySubscribe)))
      .subscribe(el =>
        this.borderColor = el);

    this.store.pipe(select(ExampleSelector.changeStyle('borderRadius')), (takeUntil(this.destroySubscribe)))
      .subscribe(el =>
        this.borderRadius = el);
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id !== 'cdk-drop-list-0' && event.container.data.length < 7) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        this.copy = this.done.slice(0)
        this.store.dispatch(ExampleActions.saveNewForm({
          newForm: this.copy
        }))
      } else {
        if(event.previousContainer.id === 'cdk-drop-list-1'){
          event.previousContainer.data.splice(event.previousIndex, 1);
          this.copy = this.done.slice(0)
          this.store.dispatch(ExampleActions.saveNewForm({
            newForm: this.copy
          }))
        }
      }
    }
  }

  choiceElement( event: any ): void {
    if (this.done.length > 0) {
      this.activeElement = event.target;
    }
  }

  changeStyle(): void {
    if (this.activeElement !== undefined) {
      if (Number(this.fontSize) < 41 && Number(this.fontSize) > 5) {
        this.activeElement.style.fontSize = this.fontSize + 'px';
      }
      this.activeElement.style.width = this.width + 'px';
      this.activeElement.style.height = this.height + 'px';
      this.activeElement.style.borderRadius = this.borderRadius + 'px';
      this.activeElement.style.color = this.color;
      this.activeElement.style.borderColor = this.borderColor;
    }
  }

  createForm(): void {
    if (this.done.length > 0) {
      this.showNewForm = true;
    }
  }

  clearForm() {
    this.store.dispatch(ExampleActions.saveNewForm({
      newForm: []
    }))
    this.done = [];
  }

  showFormValue(): void {
    for (let [key, value] of Object.entries(this.form.value)) {
      if (value !== null) {
        console.log(key, value);
      }
    }
  }

  closeForm(): void {
    this.showNewForm = false;
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.destroySubscribe.next();
    this.destroySubscribe.complete();
  }
}
