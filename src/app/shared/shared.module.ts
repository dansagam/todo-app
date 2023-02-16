import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListComponent } from './list/list.component';

const declared = [
  PageComponent,
  InputComponentComponent,
  ListContainerComponent,
  ListComponent,
];

@NgModule({
  declarations: [...declared],
  providers: [],
  exports: [...declared],
})
export class SharedModule {}
