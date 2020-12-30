import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, AfterViewInit {

  @Input() coords: string;
  @ViewChild('mapa') mapa;

  constructor() { }

  ngOnInit() {

  }
  
  ngAfterViewInit(){
    
    const latLng = this.coords.split(',');
    const lat = Number( latLng[0] );
    const lng = Number( latLng[1] );
  
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmV1Y2FybG9zIiwiYSI6ImNraHRzczN6NDBtazAyc29jNTNqaWNrMWsifQ.cMgNiHFcrIeOOmlByZjBQQ';
    var map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 15
    });
  
    const marker = new mapboxgl.Marker()
                        .setLngLat ( [lng, lat] )
                        .addTo( map );
   }

}
