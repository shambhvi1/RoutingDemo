import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanloadGuard implements CanLoad {
  constructor(private router: Router) {
  }
 
 
  canLoad(route: Route): boolean {

    
    let url = route.path;
    console.log('Url:'+ url);
    if (url=='admin') {
      alert('You are not authorised to visit this page');
      return false;
    }
 
    
    
    return true; 
  }
}
