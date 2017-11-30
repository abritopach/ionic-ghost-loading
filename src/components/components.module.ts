import { NgModule } from '@angular/core';
import { GhostLoadingComponent } from './ghost-loading/ghost-loading';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [GhostLoadingComponent],
	imports: [CommonModule],
	exports: [GhostLoadingComponent]
})
export class ComponentsModule {}
