import { NgModule } from '@angular/core'
import { ToolbarComponent } from './components/toolbar.component'
import { MaterialModule } from '../../../material.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [MaterialModule, RouterModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
})
export class ToolbarModule {}
