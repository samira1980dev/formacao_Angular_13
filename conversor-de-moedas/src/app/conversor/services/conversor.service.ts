import { Injectable } from '@angular/core';

import { Conversao, ConversaoResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http://api.fixer.io/latest";

  constructor() { }
}
