import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterEditorComponent } from './@scenes/character-editor/character-editor.component';
import { GameToolsComponent } from './@scenes/game-tools/game-tools.component';

export const routes: Routes = [
    {
        component: CharacterEditorComponent,
        path: 'character/editor',
        pathMatch: 'full',
    },
    {
        component: GameToolsComponent,
        path: 'game/tools',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
