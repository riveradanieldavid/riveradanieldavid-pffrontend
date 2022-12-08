import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// AQUI SE DECIDE QUE COMPONENTE/S SERVIRAN DE CONETENEDORES DE OTROS COMPONENTES...
// AL ESTABLECER NUEVO COMPONENTE CONTENEDOR... SE DEBE REGISTRAR AL RESTO DE COMPONENTES A SOLICITAR...
// THIS  "import" IMPLEMENTS THE CHILDS COMPONENTS OF "app.comoponent.html"
import { HomeComponent } from './components/home/home.component';
// THE COMPONENT ON TOP ALREADY CONTAINS ALL CHILDS OF "app.comoponent.html"

// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';

// import { BannerComponent } from './components/home/banner/banner.component';
// import { BannerDetailsComponent } from './components/home/banner/banner-details/banner-details.component';
// THIS TO RUN HomeModule
import { AddBannerComponent } from './components/home/banner/add-banner/add-banner.component';  // NO ADDING BANNERS
// THIS TO RUN HomeModule /

import { AddAboutComponent } from './components/home/about/add-about/add-about.component';

import { AddExperienceComponent } from './components/home/experience/add-experience/add-experience.component';

import { AddProjectComponent } from './components/home/project/add-project/add-project.component';

import { AddEducationComponent } from './components/home/education/add-education/add-education.component';

import { AddSkillComponent } from './components/home/skill/add-skill/add-skill.component';

import { AddContactComponent } from './components/home/contact/add-contact/add-contact.component';

// "routes" CONST USES "Routes" FROM "@angular/router"
// MAKES VISIBLE "routing.component.html" FILE  WHICH CONTAINS  COMPONENTS OF VIEWS
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // { path: 'banners', component: BannerComponent },
  // { path: 'banner/:id', component: BannerDetailsComponent },
  // THIS TO RUN HomeModule /
  // { path: 'home/banners/add', component: AddBannerComponent }, // NO ADDING BANNERS
  // THIS TO RUN HomeModule /

  { path: 'home/abouts/add', component: AddAboutComponent },

  { path: 'home/experiences/add', component: AddExperienceComponent },

  { path: 'home/projects/add', component: AddProjectComponent },

  { path: 'home/educations/add', component: AddEducationComponent },

  { path: 'home/skills/add', component: AddSkillComponent },

  { path: 'home/contacts/add', component: AddContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

