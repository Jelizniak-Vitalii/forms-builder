import { Component, ElementRef,  ViewContainerRef, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {ComponentPortal, DomPortal, Portal, CdkPortal, TemplatePortal} from '@angular/cdk/portal';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { InputComponent } from './../input/input.component'



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements AfterViewInit {
  constructor() { }

  // @Input() inputWid: any;
  ngAfterViewInit(): void {

  
    

  }
  size: any;

  todo = [
    
      {value_before: '<input class="example-box__items" appStyleDirective placeholder="Ведите текст">'},
      {value_before: '<button class="example-box__items" appStyleDirective>Button</button>'},
      {value_before: '<textarea class="example-box__items" placeholder="Ведите текст"></textarea>'},
      {value_before: '<input class="example-box__items" type="checkbox">'},
      {value_before: '<select class="example-box__items"><option>First</option><option>Second</option></select>'},


 
  ];

  done = [
    {value_before: ''},
  ];

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

  select(event: Event){
    this.size =  event.target
  }

  inputWid(event: any){
    this.size.style.width = event.value
  }
  inputHeight(event: any){
    this.size.style.height = event.value
  }
  inputBorderStyle(event: any){
    this.size.style.borderStyle = event.value
  }
  inputBorderWidth(event: any){
    this.size.style.borderWidth = event.value
  }
  inputColor(event: any){
    this.size.style.color = event.value
  }
  inputFontWeight(event: any){
    this.size.style.fontWeight = event.value
  }
  inputFontSize(event: any){
    this.size.style.fontSize = event.value
  }

}
