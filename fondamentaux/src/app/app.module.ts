import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { FormsModule } from '@angular/forms';
import { ZippyComponent } from './zippy/zippy.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SummaryPipe } from './summary.pipe';
import { KebabPipe } from './kebab.pipe';
import { HighlightDirective } from './highlight.directive';
import { ReusableExampleComponent } from './reusable-example/reusable-example.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { LikeCounterComponent } from './components/like-counter/like-counter.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { TemplateExcercieComponent } from './forms/template-excercie/template-excercie.component';
import { ReaktivFormComponent } from './forms/reaktiv-form/reaktiv-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactivLoginExerciceComponent } from './reactiv-login-exercice/reactiv-login-exercice.component';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { MoviesWithServiceComponent } from './movies-with-service/movies-with-service.component';
import { ServiceExerciceComponent } from './service-exercice/service-exercice.component';
import { MovieListComponent } from './service-exercice/movie-list/movie-list.component';
import { MovieFormComponent } from './service-exercice/movie-form/movie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DirectivesExampleComponent,
    ZippyComponent,
    PipeExampleComponent,
    SummaryPipe,
    KebabPipe,
    HighlightDirective,
    ReusableExampleComponent,
    PostCardComponent,
    LikeCounterComponent,
    TemplateFormComponent,
    TemplateExcercieComponent,
    ReaktivFormComponent,
    ReactivLoginExerciceComponent,
    SignInFormComponent,
    MoviesWithServiceComponent,
    ServiceExerciceComponent,
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
