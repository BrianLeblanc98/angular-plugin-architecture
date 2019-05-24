import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PluginBComponent } from './plugin-b.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PluginBComponent],
  entryComponents: [PluginBComponent],
  providers: [{
     provide: 'plugins',
     useValue: [{
       name: 'plugin-b-component',
       component: PluginBComponent
     }],
     multi: true
   }]
})
export class PluginBModule { }