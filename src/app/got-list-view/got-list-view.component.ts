import { Component, OnInit } from '@angular/core';
import { GotAPIService } from '../got-api.service';
import { ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-got-list-view',
  templateUrl: './got-list-view.component.html',
  styleUrls: ['./got-list-view.component.css']
})
export class GotListViewComponent implements OnInit {
  public allBooks:any;
  public allCharacters:any;
  public allHouses:any;
  public gotList:any;
  public cardStyle:any;
  public id:any;
  flag1:boolean=false
  flag2:boolean=false
  flag3:boolean=false
  public viewData:any;
  public takeData:any;
  public buttonText:any="select category";
  public button:any="btn-info"
  public flag4:boolean=false
 
  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('id')

    this.allBooks = this.gotAPIService.getAllBooks().subscribe(
      data =>{
        this.allBooks = data
        console.log(this.allBooks);
      
  }
)

  this.allCharacters = this.gotAPIService.getAllCharacters().subscribe(
    data =>{
      this.allCharacters = data
      console.log(this.allCharacters);
    
  
}
)

  this.allHouses = this.gotAPIService.getAllHouse().subscribe(
    data =>{
      this.allHouses = data
      console.log(this.allHouses[0].url);
  
}
)

}

  public showAllBooks(){
    event.preventDefault()
    this.gotList = this.allBooks;
    this.cardStyle = "bg-success";
    this.flag1=true
    this.flag4=true
    this.buttonText = "Books";
    this.flag2 = false;
    this.flag3 = false;
    this.button="btn-success"
    
  }


  public showAllCharacters(){
    event.preventDefault()
    this.gotList = this.allCharacters
    this.cardStyle = "bg-danger";
    this.flag2=true
    this.flag4=true
    this.buttonText = "Characters";
    this.flag1 = false;
    this.flag3 = false;
    this.button="btn-danger"
  }

  public showAllHouses(){
    event.preventDefault()
    this.gotList = this.allHouses
    this.cardStyle = "bg-primary";
    this.flag3=true
    this.flag4=true
    this.buttonText = "Houses";
    this.flag1 = false;
    this.flag2 = false;
    this.button="btn-primary"
    
  }

  public goToDefault(){
    event.preventDefault()
    this.buttonText="select category";
    this.flag4=false;
    this.button="btn-info"
    
  }

 

  public getDetailsView(i){
    
    if(this.flag1){
      
      this.id = this.gotAPIService.getSingleBook(i,'book').subscribe(
        
        data =>{
          console.log(data);
          this.viewData= data; 
          this.takeData = 'book' 

        }
      )
    }
    if(this.flag2){
      this.id = this.gotAPIService.getSingleCharacter(i,'character').subscribe(
        data =>{
          console.log(data);
          this.viewData= data; 
          this.takeData = 'character'  
        }
      )
    }

    if(this.flag3){
      
      this.id = this.gotAPIService.getSingleHouse(i,'house').subscribe(
        data =>{
          console.log(data);
          this.viewData= data; 
          this.takeData = 'house'    
        }
      )
    }
  }

  constructor(private gotAPIService: GotAPIService,private router : Router,private _route: ActivatedRoute) {
    
    this.gotAPIService.giveData(this.takeData)
   }


    
    
  }


