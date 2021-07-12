import {Component, ViewContainerRef, OnInit, ViewChild, TemplateRef, ElementRef} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

import { select, Store } from '@ngrx/store';
import { ExampleSelector} from '../../store/selectors'

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  @ViewChild('buttonTemplate', {static: true}) buttonTemplate: TemplateRef<unknown>;
  @ViewChild('inputTemplate' ,{static: true}) inputTemplate: TemplateRef<unknown>
  @ViewChild('textareaTemplate',{static: true}) textareaTemplate: TemplateRef<unknown>
  @ViewChild('checkboxTemplate',{static: true}) checkboxTemplate: TemplateRef<unknown>
  @ViewChild('selectTemplate',{static: true}) selectTemplate: TemplateRef<unknown>
  @ViewChild('newForm') newForm: ElementRef;
  @ViewChild('newFormBlock') newFormBlock: ElementRef;
  @ViewChild('newFormContainer') newFormContainer: ElementRef

  buttonPortal: TemplatePortal<any>;
  checkboxPortal: TemplatePortal<any>;
  selectPortal: TemplatePortal<any>;
  inputPortal: TemplatePortal<any>
  textareaPortal: TemplatePortal<any>;


  color$: string;
  width$: string
  height$: string
  fontSize$: string
  borderRadius$: string
  borderColor$: string


  activeElement: any;
  cloneForm: any;

  todo: any = [

  ];
  done = [

  ];



  constructor(
    private _viewContainerRef: ViewContainerRef,
    private store$: Store
    ) {
    this.store$.pipe(select(ExampleSelector.color))
    .subscribe(el =>
      this.color$ = el);

    this.store$.pipe(select(ExampleSelector.fontSize))
    .subscribe((el) => {
      this.fontSize$ = el});

    this.store$.pipe(select(ExampleSelector.width))
    .subscribe(el =>
      this.width$ = el);

    this.store$.pipe(select(ExampleSelector.height))
    .subscribe(el =>
      this.height$ = el);

    this.store$.pipe(select(ExampleSelector.borderColor))
    .subscribe(el =>
      this.borderColor$ = el);

    this.store$.pipe(select(ExampleSelector.borderRadius))
      .subscribe(el =>
      this.borderRadius$ = el)

  }

  ngOnInit(): void {

    const templateArr = [
      { portal: this.buttonPortal, portalElement: this.buttonTemplate  },
      { portal: this.checkboxPortal, portalElement: this.checkboxTemplate},
      { portal: this.selectPortal, portalElement: this.selectTemplate},
      { portal: this.inputPortal, portalElement: this.inputTemplate},
      { portal: this.textareaPortal, portalElement: this.textareaTemplate}
    ];

    templateArr.map((x) =>{
      const a = x.portal = new TemplatePortal(
        x.portalElement,
        this._viewContainerRef
      )
      this.todo.push(a)
    })
  }


  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }
    else {
      if (event.container.data.length < this.todo.length) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }else{
        event.previousContainer.data.splice(event.previousIndex, 1)

      }
    }
  }


  choiceElement(event: any): void {
    if(this.done.length > 0) {
      this.activeElement =  event.target
    }
  }


  changeStyle(){
    if(this.activeElement != undefined){
      this.activeElement.style.fontSize = this.fontSize$;
      this.activeElement.style.color = this.color$;
      this.activeElement.style.width = this.width$;
      this.activeElement.style.height = this.height$;
      this.activeElement.style.borderRadius = this.borderRadius$;
      this.activeElement.style.borderColor = this.borderColor$


    }
  }

  createForm(){
    if(this.done.length > 0) {
      this.cloneForm =  this.newForm.nativeElement.cloneNode(true);
      this.newFormContainer.nativeElement.append(this.cloneForm)
      this.newFormBlock.nativeElement.style.display = "flex"
    }

  }

  closeForm(){
    this.newFormBlock.nativeElement.style.display = "none"
    this.cloneForm.remove()
  }

}