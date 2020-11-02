import { NucleicAcidSequence } from 'src/app/models/nucleic-acid-sequence';
import { TranscriberComponent } from 'src/app/components/transcriber.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranscriberService } from '../services/transcriber.service';
import { element } from 'protractor';
import { By } from '@angular/platform-browser';

describe('TranscriberComponent', () => {
    let component: TranscriberComponent;
    let fixture: ComponentFixture<TranscriberComponent>;
    let transcriberServiceStub: Partial<TranscriberService>;

    beforeEach( async() => {
        transcriberServiceStub = {
            //add some mock values here
        };
        
        TestBed.configureTestingModule({
            declarations: [TranscriberComponent],
            imports: [HttpClientTestingModule],
            providers: [{ provide: TranscriberService, useValue: transcriberServiceStub }]
        });
    });

    beforeEach( () => {
        fixture = TestBed.createComponent(TranscriberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain a text box', () => {
        let sequenceTextBox = fixture.nativeElement.querySelector('textarea');
        expect(sequenceTextBox).toBeTruthy();
    });

    it('should contain a submit button', () => {
        const submitButton = fixture.nativeElement.querySelector('button');
        expect(submitButton).toBeTruthy();
    });

    it('should retrieve the correctly transcribed RNA sequence', () => {
        let sequenceTextBox = fixture.nativeElement.querySelector('textarea');
        const submitButton = fixture.nativeElement.querySelector('button');
        sequenceTextBox.sendKeys('TAC');
        submitButton.click();
        fixture.detectChanges();
        const resultSequence = fixture.nativeElement.querySelector('div').text;
        expect(resultSequence).toEqual('AUG');
    });
});

