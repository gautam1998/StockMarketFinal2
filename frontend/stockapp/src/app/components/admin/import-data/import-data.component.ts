/*
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {
  fileToUpload
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postMethod(files: FileList) {
    console.log("here")
    this.fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    this.http.post("http://localhost:8022/excel/upload2", formData).subscribe((val) => {
    console.log(val);
    });
    return false; 
    }

}*/

import { Component, OnInit } from '@angular/core';
import { ImportService } from 'src/app/_services/import.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  filterResultDataSet = []
  fileInfos: Observable<any>;

  constructor(private ImportService: ImportService) { }

  ngOnInit() {
    this.fileInfos = this.ImportService.getFiles();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.ImportService.upload(this.currentFile).subscribe(
      event => {
        //console.log(event.body);
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {

          this.filterResultDataSet = event.body;
          this.fileInfos = this.ImportService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
}
