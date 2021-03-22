import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { ScrollingModule } from '@angular/cdk/scrolling'

import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTableModule } from '@angular/material/table'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

const modules = [
  MatToolbarModule,
  ScrollingModule,
  MatListModule,
  MatProgressBarModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule,
]

@NgModule({
  imports: [modules],
  exports: [modules],
  declarations: [],
})
export class MaterialModule {}
