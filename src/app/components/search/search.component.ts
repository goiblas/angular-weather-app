import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Coords } from '../../models/coords';
import { NgZone } from '@angular/core';

declare var google;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  // No añade prefijo unicos a los estilos del componente,
  // permitiendome modificar los estilos del imput de google maps
  // desde los estilos del componente
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Output() coords = new EventEmitter<Coords>();
  @ViewChild('search') public searchElement: ElementRef;

  today = new Date().toLocaleDateString('es-ES', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  placeSelected = false;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElement.nativeElement,
        // https://developers.google.com/places/supported_types?hl=es-419
        { types: ['geocode']}
      );
      autocomplete.addListener('place_changed', () => {
        // ejecuta la función dentro de ngZone para que angular se entere del cambio
        this.ngZone.run( () => {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                  this.placeSelected = true;

                  const coords = place.geometry.location;
                  const lat = coords.lat();
                  const lon = coords.lng();
                  this.coords.emit({ lat, lon });
            }
          });
      });
    });
  }
}
