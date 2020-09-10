import React, { Component } from "react";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class GoogleMaps extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 12.902701,
          lng: 77.625338,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"RST booking "}></Marker>
        <InfoWindow
          // onClick={this.onInfoWindowclose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h6>{this.state.selectedPlace.name}</h6>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_YKs5oHRHr3HwbDcoeTnegoF_hlp-IkM",

  // "AIzaSyCUMsjjkWOxYb4RtRgyMlKoxetfmi2aCEo",
})(GoogleMaps);

// export default GoogleMaps;
