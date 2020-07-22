import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridMenuComponent } from './components/grid-menu/grid-menu.component';
import { ArticleUploadComponent } from './components/pages/article-upload/article-upload.component';
import { PodcastUploadComponent } from './components/pages/podcast-upload/podcast-upload.component';
import { ArticleEditComponent } from './components/pages/article-edit/article-edit.component';
import { ArticleDeleteComponent } from './components/pages/article-delete/article-delete.component';
import { InfoPageUploadComponent } from './components/pages/info-page-upload/info-page-upload.component';
import { InfoPageEditComponent } from './components/pages/info-page-edit/info-page-edit.component';
import { InfoPageDeleteComponent } from './components/pages/info-page-delete/info-page-delete.component';
import { PodcastEditComponent } from './components/pages/podcast-edit/podcast-edit.component';
import { PodcastDeleteComponent } from './components/pages/podcast-delete/podcast-delete.component';
import { CategoryUploadComponent } from './components/pages/category-upload/category-upload.component';
import { CategoryDeleteComponent } from './components/pages/category-delete/category-delete.component';
import { ImagesCollectionComponent } from './components/pages/images-collection/images-collection.component';
import { ImagesUploadComponent } from './components/pages/images-upload/images-upload.component';
import { TrashComponent } from './components/pages/trash/trash.component';
import { ArticleEditItemComponent } from './components/pages/article-edit-item/article-edit-item.component';
import { InfoPageEditItemComponent } from './components/pages/info-page-edit-item/info-page-edit-item.component';
import { PodcastEditItemComponent } from './components/pages/podcast-edit-item/podcast-edit-item.component';
import { ArticleDeleteItemComponent } from './components/pages/article-delete-item/article-delete-item.component';
import { InfoPageDeleteItemComponent } from './components/pages/info-page-delete-item/info-page-delete-item.component';
import { PodcastDeleteItemComponent } from './components/pages/podcast-delete-item/podcast-delete-item.component';
import { CategoryEditComponent } from './components/pages/category-edit/category-edit.component';
import { CategoryEditItemComponent } from './components/pages/category-edit-item/category-edit-item.component';
import { CategoryDeleteItemComponent } from './components/pages/category-delete-item/category-delete-item.component';
import { ImageItemComponent } from './components/pages/image-item/image-item.component';
import { TrashItemComponent } from './components/pages/trash-item/trash-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    GridMenuComponent,
    ArticleUploadComponent,
    PodcastUploadComponent,
    ArticleEditComponent,
    ArticleDeleteComponent,
    InfoPageUploadComponent,
    InfoPageEditComponent,
    InfoPageDeleteComponent,
    PodcastEditComponent,
    PodcastDeleteComponent,
    CategoryUploadComponent,
    CategoryDeleteComponent,
    ImagesCollectionComponent,
    ImagesUploadComponent,
    TrashComponent,
    ArticleEditItemComponent,
    InfoPageEditItemComponent,
    PodcastEditItemComponent,
    ArticleDeleteItemComponent,
    InfoPageDeleteItemComponent,
    PodcastDeleteItemComponent,
    CategoryEditComponent,
    CategoryEditItemComponent,
    CategoryDeleteItemComponent,
    ImageItemComponent,
    TrashItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
