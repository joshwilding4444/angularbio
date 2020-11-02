import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NucleicAcidSequence } from 'src/app/models/nucleic-acid-sequence';

@Injectable({
    providedIn: 'root'
})

export class TranscriberService {
    submitSequenceData(inputSequence: NucleicAcidSequence) {
        
    }
}
