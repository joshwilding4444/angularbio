import { Component, OnInit } from '@angular/core';
import { NucleicAcidSequence } from 'src/app/models/nucleic-acid-sequence';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranscriberService } from '../services/transcriber.service';

@Component({
    selector: 'app-nucleic-acid-sequence',
    templateUrl: './transcriber.component.html',
    styleUrls: ['./transcriber.component.css']
})

export class TranscriberComponent implements OnInit {
    userSequence: NucleicAcidSequence;
    returnedSequence: NucleicAcidSequence;
    errorMessage: boolean = false;
    dataSubmitted: boolean = false;
    
    sequenceDataFormGroup = new FormGroup({
        inputSequenceData: new FormControl('', Validators.required)
    });

    constructor(private transcriberService: TranscriberService){
    
    }

    ngOnInit():void {

    }

    submitSequenceData() {
        this.userSequence = new NucleicAcidSequence(
                    this.sequenceDataFormGroup.get('inputSequenceData').value
                );
        //test code
        this.dataSubmitted = true;
        /*
        // TODO: create HTTP POST request and URI 
        this.transcriberService.submitSequenceData(this.userSequence).subscribe(
            result => {
                this.dataSubmitted = true;
            },
            error => {
                this.errorMessage = true;
            }
        );*/
    }
}