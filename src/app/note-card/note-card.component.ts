import { Component, ElementRef, AfterViewInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements AfterViewInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('truncator', { static: true }) truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true }) bodyText!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit() {
    console.log("ngAfterViewInit called.");
    if ( 
      //check text overflow then show truncator fade out
      this.bodyText.nativeElement.scrollHeight > this.bodyText.nativeElement.clientHeight) {
      this.truncator.nativeElement.style.display = 'block';
    } else {
      //hide fadeout truncator
      this.truncator.nativeElement.style.display = 'none';
    }
  }


  onXbuttonClick(){
    this.deleteEvent.emit();

  }
}
