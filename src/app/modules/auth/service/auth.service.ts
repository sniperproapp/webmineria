import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { URL_FROTEND, URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:any=null;
token:any=null;

  constructor(public http: HttpClient,
    public router:Router,
  ) { 
    this.initAuthToken(   )
  }

  login(email:string,password:string)
  {
    let URL =URL_SERVICIOS+"auth/login";
    return this.http.post(URL,{email:email,password:password}).pipe(
      map((auth:any)=>{
       console.log(auth)
       const result=this.savelocalStorage(auth);
       return result;
      }),
      catchError((err:any)=>{
        console.log(err);
        return of(err);
      })
    )
  }


  regisster(data:any)
  {
    let URL =URL_SERVICIOS+"auth/register";
    return this.http.post(URL,data).pipe(
      map((auth:any)=>{
       console.log(auth)
        
       return auth;
      }),
      catchError((err:any)=>{
        console.log(err);
        return of(err);
      })
    )
  }


  initAuthToken(){
    if(localStorage.getItem("token")){
      this.user=JSON.parse(localStorage.getItem("user")?? '');
      this.token=localStorage.getItem("token");
    }

  }

  savelocalStorage(auth:any){
    if(auth && auth.token){
      localStorage.setItem("token",auth.token);
      localStorage.setItem("user",JSON.stringify(auth.user) );
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("token" );
      localStorage.removeItem("user"  );
     setTimeout(() => {
      location.href= URL_FROTEND+"/auth/login";
      //this.router.navigateByUrl("/auth/login")
     }, 50);
  }
}
