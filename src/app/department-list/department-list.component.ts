import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit  {
  public departmentId!: number;
  departments = [
    {"id": 1, "name":"angular"},
    {"id": 2, "name":"node"},
    {"id": 3, "name":"mongoDB"},
    {"id": 4, "name":"Ruby"},
    {"id": 5, "name":"Bootstrap"},
  ]
  selectedId!: number;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(){

    // //drawback- updates route and not view
    //  id = this.route.snapshot.paramMap.get('id');
    // this.departmentId=id;
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if(id)
      {
        this.selectedId= parseInt(id);
   } });
  }
  onSelect(department: any){
    // this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id], {relativeTo: this.route});
  
  }
  isSelected(department :any){
    return this.departmentId== this.selectedId;
  }
  

   
}
