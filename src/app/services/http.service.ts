import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL: string = "http://localhost:3000/";

  httpheaders: HttpHeaders = new HttpHeaders()
    .set("Content-type", "application/JSON")

  constructor(private http: HttpClient) { }

  getDatafromserver(endPoint: string) {
    const url = this.baseURL + endPoint;
    return this.http.get(url, { headers: this.httpheaders })

  }
  sendDatatoserver(endPoint:string,body:any){
    const url=this.baseURL + endPoint;
    return this. http.post(url,body,{headers:this.httpheaders})

  }
  deleteDataFromserver(endPoint:string){
    
 const url = this.baseURL + endPoint;
    return this.http.delete(url, { headers: this.httpheaders })
  }
  updateDataToServer(endPoint:string,body:any){
    const url=this.baseURL + endPoint;
    return this. http.put(url,body,{headers:this.httpheaders})
  }
}
