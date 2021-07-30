import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, OnDestroy,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ExampleSelector } from '../../store/selectors'

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
  @ViewChild('newFormBlock') newFormBlock: ElementRef;

  buttonPortal: TemplatePortal;
  checkboxPortal: TemplatePortal;
  selectPortal: TemplatePortal;
  inputPortal: TemplatePortal;
  textareaPortal: TemplatePortal;

  color: string;
  width: string;
  height: string;
  fontSize: string;
  borderRadius: string;
  borderColor: string;

  showNewForm: boolean = false;

  form: FormGroup;

  activeElement: HTMLElement;

  todo: TemplatePortal<Object>[] = [];
  done = [];

  notifier = new Subject();

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({});
    this.form.addControl('input', new FormControl());
    this.form.addControl('textarea', new FormControl());
    this.form.addControl('checkbox', new FormControl());
    this.form.addControl('select', new FormControl());

    const templateArr = [
      { portal: this.buttonPortal, portalElement: this.buttonTemplate },
      { portal: this.checkboxPortal, portalElement: this.checkboxTemplate },
      { portal: this.selectPortal, portalElement: this.selectTemplate },
      { portal: this.inputPortal, portalElement: this.inputTemplate },
      { portal: this.textareaPortal, portalElement: this.textareaTemplate },
    ];

    this.store.pipe(select(ExampleSelector.changeStyle('color')), (takeUntil(this.notifier)))
      .subscribe(el =>
        this.color = el);

    this.store.pipe(select(ExampleSelector.changeStyle('fontSize')), (takeUntil(this.notifier)))
      .subscribe((el) => {
        this.fontSize = el});

    this.store.pipe(select(ExampleSelector.changeStyle('width')), (takeUntil(this.notifier)))
      .subscribe(el =>
        this.width = el);

    this.store.pipe(select(ExampleSelector.changeStyle('height')), (takeUntil(this.notifier)))
      .subscribe(el =>
        this.height = el);

    this.store.pipe(select(ExampleSelector.changeStyle('borderColor')), (takeUntil(this.notifier)))
      .subscribe(el =>
        this.borderColor = el);

    this.store.pipe(select(ExampleSelector.changeStyle('borderRadius')), (takeUntil(this.notifier)))
      .subscribe(el =>
        this.borderRadius = el);

    templateArr.forEach((el) => {
      const newPortal = el.portal = new TemplatePortal(
        el.portalElement,
        this._viewContainerRef
      )
     this.todo.push(newPortal);
    })
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length < this.todo.length) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        event.previousContainer.data.splice(event.previousIndex, 1);
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
     setTimeout(() => {
       this.newForm.toArray().map((el) => {
         this.newFormContainer.nativeElement.append(el.nativeElement);
       })
     })
    }
  }

  showFormValue(): void {
    for (let [key, value] of Object.entries(this.form.value)) {
      if (value !== null) {
        console.log(key, value);
      }
    }
  }

  closeForm(): void {
    for (let i = 0; i < this.newFormContainer.nativeElement.childNodes.length; i++) {
      this.newFormContainer.nativeElement.firstChild.remove();
    }
    this.showNewForm = false;
    this.done = [];
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }
}
