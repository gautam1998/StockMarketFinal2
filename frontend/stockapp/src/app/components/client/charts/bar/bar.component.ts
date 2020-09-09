import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  /*
  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  */

  private data ;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  response;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createSvg();
    console.log("hello");
    this.http.get("http://laptop-5uvd4pa0:8088/service-upload/api/excel/getAll").subscribe(response => {this.response = response,this.display(this.response);});
    //console.log(this.data);
    //this.drawBars(this.data);
    
    
  }
  display(res){
    console.log(res);
    this.data = res;
    this.drawBars(res);
  }
  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  //console.log("helo2");
  //console.log(this.data);
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.time))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 1000])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.time))
  .attr("y", d => y(d.price))
  .attr("width", x.bandwidth())
  .attr("height", (d) => this.height - y(d.price))
  .attr("fill", "#d04a35");
}



}
