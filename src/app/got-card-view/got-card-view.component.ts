import { Component, OnInit } from '@angular/core';
import { GotAPIService } from '../got-api.service';
import { ActivatedRoute , Router} from '@angular/router';
import { loadavg } from 'os';
import { Location } from '@angular/common';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-got-card-view',
  templateUrl: './got-card-view.component.html',
  styleUrls: ['./got-card-view.component.css']
})
export class GotCardViewComponent implements OnInit {
  public GotDetails: any;
  born: any;
  died: any;
  titles: any[];
  aliaseString: string;
  words: any;

  constructor(private gotAPIService: GotAPIService,private _route: ActivatedRoute, private router: Router,private location: Location) { }

  public GotData:any;
  public id:any;
  public blogId:any;
  public name:any
  public author:any[]
  public authorString:string="";
  public gender:any;
  public flag1:boolean=true;
  public flag2:boolean=true;
  public flag3:boolean=true;
  public publisher:any;
  public mediatype:any;
  public chrId:any;
  public culture:any;
  public titleString:string=""
  public aliases:any[]
  public region:any;
  public coatOfArms:any
  public currentLord:any;
  public currentLordId:any;
 



  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('id')
    this.blogId = Number(myBlogId) + 1;
    this.chrId=this.blogId + 580;
    console.log(this.blogId );
    this.GotDetails = this.gotAPIService.commResponse
      
  
  
    console.log(this.GotDetails);
    
    
    
    
    if(this.GotDetails == 'book'){
      
      this.id = this.gotAPIService.getSingleBook(this.blogId).subscribe(
        data =>{
          console.log(data);
          this.GotData = data;
          this.name = this.GotData.name;

          this.author = this.GotData.authors;
          this.flag2 = false;
          this.flag3 = false;
          this.publisher = this.GotData.publisher;
          this.mediatype=this.GotData.mediaType
          
          
          for (let i of this.author) {
            if(i!=undefined){
              this.authorString += i + ","
            }
            
          }
          
        }
        
      )  
      
      
    }
    
    

    if(this.GotDetails == 'character'){
      this.id = this.gotAPIService.getSingleCharacter(this.chrId).subscribe(
        data =>{
          console.log(data);
          this.GotData = data;
          this.name = this.GotData.name;
          this.born = (this.GotData.born)?this.GotData.born:"Not Known";
          this.died = (this.GotData.died)?this.GotData.died:"Not Known";
          this.culture = (this.GotData.culture)?this.GotData.culture:"Not known";
          this.titles = (this.GotData.titles[0]!="")?this.GotData.titles:["Not known"];
          this.aliases = (this.GotData.aliases[0]!="")?this.GotData.aliases:["Not known"];
          this.flag1 = false;
          this.flag3 = false;

          for (let i of this.aliases) {
            if(i!=undefined){
              this.aliaseString += i + ","
            }
          }

          for (let i of this.titles) {
            if(i!=undefined){
              this.titleString += i + ","
            }
          }
        }
      )
    }

    if(this.GotDetails == 'house'){
      this.id = this.gotAPIService.getSingleHouse(this.blogId).subscribe(
        data =>{
          console.log(data);
          this.GotData = data;
          this.name = this.GotData.name;
          this.flag1 = false;
          this.flag2 = false;
          this.titles = (this.GotData.titles[0]!="")?this.GotData.titles:["Not known"];
          this.region = (this.GotData.region)?this.GotData.region:"Not known";
          this.coatOfArms = (this.GotData.coatOfArms )?this.GotData.coatOfArms :"Not known";
          this.currentLord = this.GotData.currentLord;
          this.words = (this.GotData.words )?this.GotData.words :"Not known"
         
         
        }
      )
    }
    console.log(this.currentLord);
    
    
    
  }

  cancel() {
    this.router.navigate(['/'])
  }

  

}
