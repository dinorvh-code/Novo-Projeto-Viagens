import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Menu} from './menu/menu';
import { Banner } from './banner/banner';
import { Motivos } from './motivos/motivos';
import { Destinos } from './destinos/destinos';
import { DestinosPopulares } from './destinos-populares/destinos-populares';
import { Caixote } from './caixote/caixote';
import { HabitosPopulares } from './habitos-populares/habitos-populares';
import { TendenciasPopulares } from './tendencias-populares/tendencias-populares';
import { Avaliacoes } from './avaliacoes/avaliacoes';
import { Desconto } from './desconto/desconto';
import { ArtigosPopulares } from './artigos-populares/artigos-populares';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Banner, Motivos, Destinos, DestinosPopulares, Caixote, HabitosPopulares, TendenciasPopulares, Avaliacoes, Desconto, ArtigosPopulares, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetoo');
}


