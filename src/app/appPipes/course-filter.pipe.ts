import { Pipe, PipeTransform } from '@angular/core';
import {DefaultComponent}  from '../default/default.component';


@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search:any){
      return search.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
    });
  }

}
