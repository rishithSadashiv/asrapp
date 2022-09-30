import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  file: File | null = null;
  uploadSuccessfulShow = false;
  deleteSuccessfulShow = false;
  transcribedText = "";

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  uploadFile(files: FileList) {
    this.deleteSuccessfulShow = false;
    this.transcribedText = "";
    this.file = files.item(0);
    this.fileService.uploadFile(this.file).subscribe(result => {
      if (result) {
        this.uploadSuccessfulShow = true;
      }
    });
    
  }

  deleteFile() {
    this.transcribedText = "";
    this.uploadSuccessfulShow = false;
    this.fileService.deleteFiles().subscribe(result => {
      if (result) {
        this.deleteSuccessfulShow = true;
      }
    });

  }

  transcribeAudio() {
    this.uploadSuccessfulShow = false;
    this.deleteSuccessfulShow = false;
    this.fileService.transcribe().subscribe(result => {
      this.transcribedText = result.Value;
    });

  }

}
