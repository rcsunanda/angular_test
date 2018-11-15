import {Component} from '@angular/core';
import {AuthorsService} from './authors.service';
import {BearsService} from './authors.service';

@Component({
   selector: 'authors',
   templateUrl: './authors.component.html',
   providers: [AuthorsService, BearsService]
})
export class AuthorsComponent {
   title = "Autors List"
   authors: string[];
   bears: string[];

   bearsService: BearsService;

   constructor(as: AuthorsService, bs: BearsService) {
      this.authors = as.getAuthors();
      this.bears = [];
      this.bearsService = bs;
   }

   onAuthorAddClick(authorName) {
      console.log('onAuthorAddClick: authorName=' + authorName);
      this.authors.push(authorName);
   }

   onGetBears() {
      console.log('onGetBears');
      this.bearsService.getBears().subscribe((bears) => {
         console.log(bears)

         for (var key in bears) {
            let str = JSON.stringify(bears[key]);
            this.bears.push(str);
            // console.log("key=" + key + ", val=" + str);
          }
      });
   }
}
