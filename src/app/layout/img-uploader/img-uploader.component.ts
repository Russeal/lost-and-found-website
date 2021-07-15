import { Component, OnInit } from '@angular/core';
import { ImgUploadService } from 'src/app/services/img-upload.service';

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  constructor(private uploadService: ImgUploadService) { }

  ngOnInit(): void {
  }

  checkImg() {
    var type = (<HTMLInputElement>(document.getElementById('imgFile'))).value;

    if (type.endsWith('.jpg') || type.endsWith('.jpeg') || type.endsWith('.png')) {

      // this.uploadService.upload()

    } else {

      alert("Sorry only jpeg, jpg or png images are accepted");
      (<HTMLInputElement>(document.getElementById("imgFile"))).value = "";

    }
  }

  chooseFile() {
    document.getElementById('imgFile')?.click()
  }

}
