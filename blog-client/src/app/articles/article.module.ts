import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleService} from './article.service';
import {ArticlesComponent} from './articles.component';
import {RouterModule, Routes} from '@angular/router';
import {ArticleExcerptComponent} from './article-excerpt/article-excerpt.component';
import {MarkdownService} from './markdown.service';
import {SharedModule} from '../shared/shared.module';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {MarkdownModule} from 'angular2-markdown';
import {ClarityModule} from 'clarity-angular';
import {AuthenticatedGuard} from '../authentication/guards/authenticated-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewArticleComponent} from './new-article/new-article.component';
import {ArticleValidators} from './article-form/article-validators';
import { ArticleFormComponent } from './article-form/article-form.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import {ProfileModule} from '../profiles/profile.module';
import {AuthenticationModule} from '../authentication/authentication.module';

const routes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles/new', component: NewArticleComponent, canActivate: [AuthenticatedGuard]},
  {path: 'articles/:slug/edit', component: EditArticleComponent, canActivate: [AuthenticatedGuard]},
  {path: 'articles/:slug', component: ArticleDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ProfileModule,
    AuthenticationModule,
    MarkdownModule.forRoot(),
    ClarityModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ArticlesComponent, ArticleExcerptComponent, ArticleDetailComponent, NewArticleComponent, ArticleFormComponent, EditArticleComponent],
  providers: [ArticleService, MarkdownService, ArticleValidators]
})
export class ArticleModule {
}
