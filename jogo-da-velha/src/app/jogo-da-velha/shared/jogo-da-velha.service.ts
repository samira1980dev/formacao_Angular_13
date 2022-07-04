import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;
  
  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }

  inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];

    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  get showInicio(): boolean {
    return this._showInicio;
  }

  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  get showFinal(): boolean {
    return this._showFinal;
  }

  get jogador(): number {
    return this._jogador;
  }

  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  jogar(posX: number, posY: number): void {
    if (this.tabuleiro[posX][posY] !== this.VAZIO || this.vitoria) {
      return;
    }

    this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this.jogador);
    this._jogador = (this._jogador === this.X) ? this.O : this.X;

    if (!this.vitoria && this.numMovimentos < 9) {
      this.cpuJogar();
    }

    if (this.vitoria !== false) {
      this._showFinal = true;
    }

    if(!this.vitoria && this.numMovimentos === 0) {
      this._jogador = 0;
      this._showFinal = true;
    }
  }

  fimJogo(linha: number, coluna: number, tabuleiro: any, jogador: number) {
    let fim: any = false;

    if (tabuleiro[linha][0] === jogador &&
      tabuleiro[linha][1] === jogador &&
      tabuleiro[linha][2] === jogador) {
        fim = [[linha, 0], [linha, 1], [linha, 2]];
      }

      if (tabuleiro)

  }



  

}
