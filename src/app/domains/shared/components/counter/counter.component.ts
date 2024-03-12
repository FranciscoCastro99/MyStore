import { Component, Input, SimpleChanges, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // se usa para crear valores por defecto de forma directa y No debe de ser asincrona (NO ASYNC), 
    //aqui no se puede poner un una promesa o un subscribe, cualquier cosa que requiera un tiempo o demora,
    //esto es para declarar variables directas y sobretodo, esto se corre antes de renderizar el componente
    // este corre una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes:SimpleChanges){
    //antes y durante de la renderización, esta puede cambiar de forma dinamica
    //una vez montado puede hacer tracking
    console.log('ngOnChances');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }


  ngOnInit(){
    //after render => este se renderiza despues del componente
    // se corre una vez
    //aqui es perfecto para hacer cosas asincronas, llamar una peticion, hacer un subscribe, then, etc
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(()=>{
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1)
    }, 1000);

  }

  ngAfterViewInit(){
    // after render
    // pregunta si los hijos de este componente como tal ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    //este es para destruir un componente
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
    // window.clearInterval(this.message);
    
  }

  doSomething(){
    console.log('change duration')
    //async
  }
}
