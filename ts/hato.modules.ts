import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HatoComponent } from './hato.component'

import { Circle } from './sketch/circle'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HatoComponent ],
    bootstrap: [ HatoComponent ],
    providers: [ Circle ]
})

export class HatoModule {

}