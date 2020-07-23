import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridMenuComponent } from './components/grid-menu/grid-menu.component';
import { ArticleUploadComponent } from './components/pages/article-upload/article-upload.component';
import { ArticleEditComponent } from './components/pages/article-edit/article-edit.component';
import { ArticleDeleteComponent } from './components/pages/article-delete/article-delete.component';
import { InfoPageUploadComponent } from './components/pages/info-page-upload/info-page-upload.component';
import { InfoPageEditComponent } from './components/pages/info-page-edit/info-page-edit.component';
import { InfoPageDeleteComponent } from './components/pages/info-page-delete/info-page-delete.component';
import { PodcastUploadComponent } from './components/pages/podcast-upload/podcast-upload.component';
import { PodcastEditComponent } from './components/pages/podcast-edit/podcast-edit.component';
import { PodcastDeleteComponent } from './components/pages/podcast-delete/podcast-delete.component';
import { CategoryUploadComponent } from './components/pages/category-upload/category-upload.component';
import { CategoryDeleteComponent } from './components/pages/category-delete/category-delete.component';
import { ImagesCollectionComponent } from './components/pages/images-collection/images-collection.component';
import { TrashComponent } from './components/pages/trash/trash.component';
import { CategoryEditComponent } from './components/pages/category-edit/category-edit.component';


const routes: Routes = [

  { path: '', component: GridMenuComponent },
  { path: 'articleUpload', component: ArticleUploadComponent },
  { path: 'articleEdit', component: ArticleEditComponent },
  { path: 'articleDelete', component: ArticleDeleteComponent },
  { path: 'infoPageUpload', component: InfoPageUploadComponent },
  { path: 'infoPageEdit', component: InfoPageEditComponent },
  { path: 'infoPageDelete', component: InfoPageDeleteComponent },
  { path: 'podcastUpload', component: PodcastUploadComponent },
  { path: 'podcastEdit', component: PodcastEditComponent },
  { path: 'podcastDelete', component: PodcastDeleteComponent },
  { path: 'categoryUpload', component: CategoryUploadComponent },
  { path: 'categoryEdit', component: CategoryEditComponent },
  { path: 'categoryDelete', component: CategoryDeleteComponent },
  { path: 'imagesCollection', component: ImagesCollectionComponent },
  { path: 'trash', component: TrashComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
