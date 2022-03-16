import { Component, OnInit } from '@angular/core';
import { SampleWithTokenService } from './services/sample-with-token.service';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-workshop';

  constructor(
    private readonly sampleService: SampleService,
    private readonly sampleWithTokenService: SampleWithTokenService,
    ){

  }
  ngOnInit(): void {
    this.sampleService.doSomething();
    this.sampleWithTokenService.doSomething();
  }
}
