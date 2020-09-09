import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
  /*private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];*/
  data
  response
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createSvg();
    this.http.get("http://laptop-5uvd4pa0:8088/service-upload/api/excel/getAll").subscribe(response => {this.response = response,this.display(this.response);});
    
  }
  display(res){
    console.log(res);
    this.data = res;
    this.drawPlot(res);  
  }

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawPlot(res): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([2020])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');

    dots.selectAll("dot")
    .data(res)
    .enter()
    .append("circle")
    .attr("cx", d => x(res.time))
    .attr("cy", d => y(res.price))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "#69b3a2");

    dots.selectAll("text")
    .data(res)
    .enter()
    .append("text")
    .text(d => d.companyid)
    .attr("x", d => x(d.time))
    .attr("y", d => y(d.price))
  }

}
