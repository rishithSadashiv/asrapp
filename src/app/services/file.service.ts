import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ObjectResult } from '../models/ObjectResult';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseUrl: string = "https://localhost:44364/api/";
  httpOptions: Object = {
    headers: new Headers({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any>{
    const endpoint = this.baseUrl + "file/upload";
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(endpoint, formData, this.httpOptions);
  }   

  deleteFiles():Observable<boolean>{
    const endpoint = this.baseUrl + "file/delete";
    return this.http.get<boolean>(endpoint);
  }

  transcribe(): Observable<ObjectResult>{
    const endpoint = this.baseUrl + "file/transcribe";
    return this.http.get<ObjectResult>(endpoint);
  }
}


