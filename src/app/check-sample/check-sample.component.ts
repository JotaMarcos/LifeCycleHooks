import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy

{

	quantidade: number = 0;

	constructor() {
		console.log("Construtor");
	}

	adicionar() {
		this.quantidade += 1;
	}

	decrementar() {
		if(this.quantidade > 0) {
			this.quantidade -= 1;
		}
	}

	ngOnInit(): void {
		console.log("ngOnInit");
	}

	// checked -> content -> view
	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

	// quando o primeiro conteúdo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	// depois da inicilização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	// após alguma alteração, verifica o coteúdo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	// após alguma alteração, verifica a view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}


	ngOnDestroy(): void {
		console.log("Goodbye my friend!");
	}




}
