// HOW MUST BE  REGISTER COMPONENTS IN HIS MODULE SO THAT RUN ALSO, THESE DUE BE UNREGISTERED IF THE PREVIOUSLY REGISTERED COMPONENT IS ELIMINATED...
// DRAG AND DROP > CUSTOM_ELEMENTS_SCHEMA
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// DRAG AND DROP > CUSTOM_ELEMENTS_SCHEMA /
import { CommonModule } from '@angular/common';
// THIS COUPLE OF BELOW WAS NOT REGISTERED!. WAS REQUIRED SO TO home COMPONENT TO CONTAIN OTHERS COMPONENTS
import { HomeComponent } from './home.component';

import { FooterComponent } from './../general/footer/footer.component';

// THIS TO RUN banner add edit
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

// DRAG AND DROP
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
// DRAG AND DROP /

// DRAG AND DROP 2
// import { ReactiveFormsModule } from '@angular/forms';
// DRAG AND DROP 2 /

// UPLOAD FILE
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';
// UPLOAD FILE /


// THIS WAS THE LAST BUG LEFTOVER TO SOLVE
import { RouterModule, Routes } from '@angular/router';
// THIS TO RUN banner add edit /

import { NavbarComponent } from './navbar/navbar.component';

// THIS TO RUN banner add edit
import { BannerComponent } from './banner/banner.component';
import { BannerDetailsComponent } from './banner/banner-details/banner-details.component';
import { AddBannerComponent } from './banner/add-banner/add-banner.component';
import { BannerTextComponent } from './banner/banner-text/banner-text.component';
import { BannerImageComponent } from './banner/banner-image/banner-image.component';
// THIS TO RUN banner add edit /

import { AboutComponent } from './about/about.component';
import { AboutDetailsComponent } from './about/about-details/about-details.component';
import { AddAboutComponent } from './about/add-about/add-about.component';
import { AboutAboutComponent } from './about/about-image/about-image.component';
import { AboutTextComponent } from './about/about-text/about-text.component';

import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDetailsComponent } from './experience/experience-details/experience-details.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { ExperienceImageComponent } from './experience/experience-image/experience-image.component';
import { ExperienceTextComponent } from './experience/experience-text/experience-text.component';

import { EducationComponent } from './education/education.component';
import { EducationDetailsComponent } from './education/education-details/education-details.component';
import { AddEducationComponent } from './education/add-education/add-education.component';
import { EducationImageComponent } from './education/education-image/education-image.component';
import { EducationTextComponent } from './education/education-text/education-text.component';

import { SkillComponent } from './skill/skill.component';
import { SkillDetailsComponent } from './skill/skill-details/skill-details.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { SkillImageComponent } from './skill/skill-image/skill-image.component';
import { SkillTextComponent } from './skill/skill-text/skill-text.component';

import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ProjectImageComponent } from './project/project-image/project-image.component';
import { ProjectTextComponent } from './project/project-text/project-text.component';

import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { AboutDetailsImageComponent } from './about/about-details-image/about-details-image.component';
import { AddAboutImageComponent } from './about/add-about-image/add-about-image.component';






// import { RoutingComponent } from './routing/routing.component';



@NgModule({
  declarations: [

    // THIS TO RUN banner add edit
    HomeComponent,

    BannerComponent,
    BannerDetailsComponent,
    AddBannerComponent,
    BannerImageComponent,
    BannerTextComponent,
    // THIS TO RUN banner add edit /

    AboutComponent,
    AboutDetailsComponent,
    AddAboutComponent,
    AboutAboutComponent,
    AboutTextComponent,

    ExperienceComponent,
    ExperienceDetailsComponent,
    AddExperienceComponent,
    ExperienceImageComponent,
    ExperienceTextComponent,

    EducationComponent,
    EducationDetailsComponent,
    AddEducationComponent,
    EducationImageComponent,
    EducationTextComponent,

    SkillComponent,
    SkillDetailsComponent,
    AddSkillComponent,
    SkillImageComponent,
    SkillTextComponent,

    ProjectComponent,
    ProjectDetailsComponent,
    AddProjectComponent,
    ProjectImageComponent,
    ProjectTextComponent,

    ContactComponent,
    ContactDetailsComponent,
    AddContactComponent,

    // RoutingComponent,

    NavbarComponent,
    AboutDetailsImageComponent,
    AboutAboutComponent,

FooterComponent

  ],

  imports: [
  CommonModule,

    // THIS TO RUN banner add edit
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    // THIS TO RUN banner add edit /
    // DRAG AND DROP
    BrowserAnimationsModule,
    DragDropModule,
    MatTabsModule,
    // DRAG AND DROP /

    // DRAG AND DROP 2
    // ReactiveFormsModule,
    // DRAG AND DROP 2 /
    // UPLOAD FILE
    ToastrModule.forRoot(), // ToastrModule added
    FileUploadModule,
    // UPLOAD FILE /

  ],
  exports: [
    // THIS TO RUN HomeModule
    HomeComponent,
    // THIS TO RUN HomeModule /

    // BannerComponent,
    // BannerDetailsComponent,

  ]

})
export class HomeModule { }









