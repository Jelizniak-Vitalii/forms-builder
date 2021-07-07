import { Component, ViewContainerRef, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  buttonPortal: TemplatePortal<any>;
  checkboxPortal: TemplatePortal<any>;
  selectPortal: TemplatePortal<any>;
  inputPortal: TemplatePortal<any>
  textareaPortal: TemplatePortal<any>;
  templateArr: TemplateRef<unknown>[] = [];

  color$: string;  
  width$: string
  height$: string
  fontSize$: string    
  borderStyle$: string  


  activeElement: any;

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

    this.store$.pipe(select(ExampleSelector.borderStyle))
    .subscribe(el => 
      this.borderStyle$ = el);

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
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  choiceElement(event: any): void {
    if(this.done.length > 0) {
      this.activeElement =  event.target
    }    
  }


  changeStyle(){
    this.activeElement.style.fontSize = this.fontSize$;
    this.activeElement.style.color = this.color$;
    this.activeElement.style.width = this.width$;
    this.activeElement.style.height = this.height$;
    this.activeElement.style.borderStyle = this.borderStyle$;
  }

}
