import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { observable } from '../../node_modules/rxjs';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'



@Injectable({
  providedIn: 'root'
})
export class GotAPIService {

  public baseUrl = 'https://anapioficeandfire.com/api/'
  public specificData:any;
  public commResponse:any;


  constructor(private _http:HttpClient) { }

  public getAllBooks(){
    let response = this._http.get(this.baseUrl + '/books/' )
    return response
  }

  public getAllCharacters(){
    let Myresponse = this._http.get(this.baseUrl + '/characters?page=59' )
    return Myresponse
  }

  public getAllHouse(){
    let Houseresponse = this._http.get(this.baseUrl + '/houses/' )
    return Houseresponse
  }

  public getSingleBook(id,pass?:string){
    
    let Houseresponse = this._http.get(this.baseUrl + '/books/' + id )
    this.commResponse=pass;
    return Houseresponse
  }

  public getSingleCharacter(id,pass?:string){
    
    let Myresponse = this._http.get(this.baseUrl + '/characters/' + id )
    this.commResponse=pass;
    return Myresponse
  }
  
  public getSingleHouse(id,pass?:string){
    
    let Myresponse = this._http.get(this.baseUrl + '/houses/' + id )
    this.commResponse=pass;
    return Myresponse
  }

  
  public giveData(myData){
    
   
  }

  public getData(){
    this.specificData = this.commResponse
    
    return this.specificData;
  }
}
