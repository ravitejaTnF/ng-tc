import { Component, OnInit } from '@angular/core';
import { Workbook, Worksheet } from 'exceljs';
import { HttpClient } from '@angular/common/http';
import * as f from 'file-saver';
import { XlService } from './../services/xl.service';
@Component({
  selector: 'app-xl',
  templateUrl: './xl.component.html',
  styleUrls: ['./xl.component.css']
})
export class XlComponent implements OnInit {

  constructor(private xls: XlService) { }
  data: any = [];
  workbook!: Workbook;
  worksheet!:any;
  ngOnInit(): void {

  }

  excelData() {
    this.xls.getData().subscribe((res: any) => {
      this.data = res;
      this.workbook = new Workbook();
      this.worksheet = this.workbook.addWorksheet('data sheet');
      this.worksheet.addRow(['user id', 'id', 'title', 'body']);
      this.data.forEach((item: any) => {
        this.worksheet.addRow(Object.values(item));
      })
      this.workbook.xlsx.writeBuffer().then((data: any) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        let filename = 'data.xlsx';
        f.saveAs(blob, filename);
      })
    });
  }

}
