import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ 
  path: '', 
  redirectTo:'home',
  pathMatch:'full',
},
{
  path:'home',
  loadChildren: () => 
  import('./components/pages/home/home.module'
  ).then(m => m.HomeModule) }, 

  { path: 'character-list', 
    loadChildren: () => 
    import('./components/pages/characters/characters-list/characters-list.module'
  ).then(m => m.CharactersListModule) }, 

  { path: 'character-details/:id', 
    loadChildren: () => 
    import('./components/pages/characters/characters-details/characters-details.module'
    ).then(m => m.CharactersDetailsModule)
   },

  { path: 'encuesta', 
    loadChildren: () => import('./components/pages/encuesta/encuesta.module'
    ).then(m => m.EncuestaModule) },

  { path: 'nosotros', 
  loadChildren: () => import('./components/pages/nosotros/nosotros.module'
  ).then(m => m.NosotrosModule) },
  
  { path: 'contactanos', loadChildren: () => import('./components/pages/contactanos/contactanos.module').then(m => m.ContactanosModule) },
  { path: 'product', loadChildren: () => import('./components/pages/product/product.module').then(m => m.ProductModule) },
  
   ];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
