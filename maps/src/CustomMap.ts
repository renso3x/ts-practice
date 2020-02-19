//  Instructions to every other class
// on how they can be an argument to 'addMarker'
// Classes must satisfies the interface values
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  //instance of a google maps class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappabale: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappabale.location.lat,
        lng: mappabale.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappabale.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
