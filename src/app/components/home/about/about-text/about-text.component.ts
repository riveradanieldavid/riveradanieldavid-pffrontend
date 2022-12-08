import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from 'src/app/_services/about.service';
import { ActivatedRoute, Router } from '@angular/router';

// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /


// DRAG AND DROP > CDK FUNCTIONALITY FOR
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// UPLOAD FILE
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
// UPLOAD FILE /

// UPLOAD FILE
const URL = 'http://localhost:3030/api/upload';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.scss']
})

export class AboutTextComponent implements OnInit {

  // ATTRIBUTES
  about?: About[];
  ccccurrentAbout: About = {};
  currentIndex = -1;
  title = '';
  // ADDED
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  // ADDED /
  // HIDE AND SHOW ELEMENT
  element = true;

  // ATTRIBUTES 2
  @Input() viewMode = false;
  @Input() currentAbout: About = {
    title: '',
    description: ''
  };
  message = '';

  // UPLOAD FILE
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
  // UPLOAD FILE /

  // CONSTRUCTOR
  constructor(
    private aboutService: AboutService,
    // ADDED
    private tokenStorageService: TokenStorageService,
    // ADDED /
    private route: ActivatedRoute,
    private router: Router,
    // UPLOAD FILE /
    private toastr: ToastrService,
    // UPLOAD FILE /
    // MYRESUME
    private darkModeService: DarkModeService
    // MYRESUME /

  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveAbout();
    // ADDED
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
    // ADDED /

    // RETRIEVE DATA WITHOUT FOR
    if (!this.viewMode) {
      this.message = '';
      this.getAbout1(this.route.snapshot.params["id"]);
    }

    // UPLOAD FILE
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      this.toastr.success('File successfully uploaded!');
    };
    // UPLOAD FILE /

  }


  // GET DATA (this.about) FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveAbout(): void {
    this.aboutService.getAll()
      .subscribe({
        next: (data) => {
          this.about = data;
          console.log(this.about);
        },
        error: (e) => console.error(e),
      });

  }


  // RETRIEVE DATA WITHOUT FOR
  getAbout1(id: string): void {
    this.aboutService.get(1)
      .subscribe({
        next: (data) => {
          this.currentAbout = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // SHOW ARTICE TO EDIT AND INDEX
  refreshList(): void {
    this.retrieveAbout();
    this.ccccurrentAbout = {};
    this.currentIndex = -1;
  }
  setActiveAbout(about: About, index: number): void {
    this.ccccurrentAbout = about;
    this.currentIndex = index;
  }

  // HIDE AND SHOW ELEMENT
  showEditor() {
    return (this.element = false);
  }
  hideEditor() {
    return (this.element = true
    );
  }
  // HIDE AND SHOW ELEMENT/

  // DELETE DATA FROM DB
  deleteAbout(): void {
    this.aboutService.delete(this.currentAbout.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home'])
          // ADDED
          window.location.reload();
          // ADDED
        },
        error: (e) => console.error(e)
      });
  }
  // ADDED
  confirmDelete() {
    if (window.confirm('Borrar item seleccionado?')) {
      return this.deleteAbout()
    }
  }
  // ADDED /


  // ATRIBUTTES DRAG AND DROP
  // THIS MOVIES IT MAY DRAG AND DROP
  Movies = [
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice',
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction'
  ];

  // APPLY Cdk TO MOVIES
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.about || [], event.previousIndex, event.currentIndex);
  }
  // ATRIBUTTES DRAG AND DROP /

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /


}


