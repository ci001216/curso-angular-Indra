import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { FormularioComponent } from './formulario/formulario.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IdeasComponent,
    NoticiaComponent,
    SeleccionComponent,
    PadreComponent,
    HijoComponent,
    ListaCompraComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
