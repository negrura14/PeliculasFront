import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  
  constructor(private changeDetectorRef: ChangeDetectorRef){}
  
  @Input()
  titulo = "string";
  
  @ViewChild(RatingComponent)
  ratingComponent: any = RatingComponent;
  
  timer: ReturnType<typeof setInterval> = setTimeout(() => {

  })

  
  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => console.log(new Date()), 1000)
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log('On Changes');
    console.log(changes);
    
  }
  ngOnDestroy(): void {
    
    console.log('On Destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('Do Check');
  }
  ngAfterViewInit(): void {
   
    console.log('After View Init');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();
  }
  
}
