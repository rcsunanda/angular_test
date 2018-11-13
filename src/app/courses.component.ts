import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
   selector: 'courses',  // CSS selector of the HTML element for which an instance of this component class will be created (multiple instances if selector selects multiple elements)
   templateUrl: './courses.component.html',
   providers: [CoursesService]
})
export class CoursesComponent {
   title = "Courses System"
   courses;

   constructor(cs: CoursesService) {
      this.courses = cs.getCourses();
   }
}
