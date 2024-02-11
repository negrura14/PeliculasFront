import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrl: './input-markdown.component.css'
})
export class InputMarkdownComponent implements OnInit{

  contenidoMarkdown = '';

  constructor() {}

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  inputTextArea(event: Event) {
    const texto = (event.target as HTMLTextAreaElement).value;
    this.contenidoMarkdown = texto;
    this.changeMarkdown.emit(texto)
  }
}