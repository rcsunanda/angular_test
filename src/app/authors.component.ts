import {Component} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
   selector: 'authors',
   templateUrl: './authors.component.html',
   providers: [AuthorsService]
})
export class AuthorsComponent {
   title = "Autors List"
   authors;

   constructor(as: AuthorsService) {
      this.authors = as.getAuthors();
   }
}
