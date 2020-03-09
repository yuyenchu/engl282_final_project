import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';



export default function Map() {

  var map, datasource, routeLine, waypointQuery, defaultOrder;
  var restRoutingRequestUrl = 'https://atlas.microsoft.com/route/directions/json?api-version=1&subscription-key={subscription-key}&query={query}&routeRepresentation=polyline&travelMode=car&view=Auto';
  var waypoints = [
    [-122.31313, 47.66129],
    [-122.31299, 47.65918],
    [-122.29931, 47.66322],
    [-122.33099, 47.66158]

  ];

 useEffect(()=> {
   GetMap();
 },[])

 const GetMap = ()=> {
      //Initialize a map instance.
      map = new window.atlas.Map('myMap', {
          center: [-122.30272, 	47.65885],
          zoom: 14,
          view: 'Auto',
  //Add your Azure Maps subscription key to the map SDK. Get an Azure Maps key at https://azure.com/maps
          authOptions: {
              authType: 'subscriptionKey',
              subscriptionKey: 't4J3zbZbaphEpQuJh7YkRqq-PE86Z2ilh6bgYHAa8pI'
          }
      });
      //Wait until the map resources are ready.
      map.events.add('ready', function () {
          //Create a data source to store the data in.
          datasource = new window.atlas.source.DataSource();
          map.sources.add(datasource);
          //Add layers fro rendering data in the data source.
          map.layers.add([
              //Render linestring data using a line layer.
              new window.atlas.layer.LineLayer(datasource, null, {
                  strokeColor: 'blue',
                  strokeWidth: 5
              }),
              //Render point data using a symbol layer.
              new window.atlas.layer.SymbolLayer(datasource, null, {
                  textOptions: {
                      textField: ['get', 'title'],
                      offset: [0, -1.2],
                      color: 'white'
                  },
                  filter: ['any', ['==', ['geometry-type'], 'Point'], ['==', ['geometry-type'], 'MultiPoint']] //Only render Point or MultiPoints in this layer.
              })
          ]);
          //Add waypoints to the map and build the waypoint query string.
          var points = [];
          var query = [];
          defaultOrder = [];
          for (var i = 0; i < waypoints.length; i++) {
              points.push(new window.atlas.data.Feature(new window.atlas.data.Point(waypoints[i]), {
                  title: i + ''
              }));
              query.push(waypoints[i][1] + ',' + waypoints[i][0]);
              defaultOrder.push(i);
          }
          //Add the points to the data source.
          datasource.add(points);
          //Create the waypoint query string value to be used in the routing requests.
          waypointQuery = query.join(':');
      });
  }
  const calculateRoute = (optimized)=> {
      //Remove any previously calculated route information.
      if (routeLine) {
          datasource.remove(routeLine);
          routeLine = null;
          document.getElementById('output').innerHTML = '';
      }
      //Create request to calculate a route in the order in which the waypoints are provided.
      var requestUrl = restRoutingRequestUrl.replace('{subscription-key}', window.atlas.getSubscriptionKey()).replace('{query}', waypointQuery);
      if (optimized) {
          requestUrl += '&computeBestOrder=true';
      }
      //Proces the request.
      fetch(requestUrl)
          .then(function (response) {
              return response.json();
          }).then(function (r) {
            //   console.log(r.routes);
              addRouteToMap(r.routes[0]);
              var output = 'Distance: ' + Math.round(r.routes[0].summary.lengthInMeters / 10) / 100 + ' km<br/>';
              if (optimized) {
                  var pinOrder = ['0'];
                  for (var i = 0; i < r.optimizedWaypoints.length; i++) {
                      //Increase index by one to account for origin index.
                      pinOrder.push(r.optimizedWaypoints[i].optimizedIndex + 1);
                  }
                  //Add the desintation index to the end. 
                  pinOrder.push(waypoints.length - 1);
                  output += 'Waypoint Order: ' + pinOrder.join(', ');
              } else {
                  output += 'Waypoint Order: ' + defaultOrder.join(', ');
              }
              document.getElementById('output').innerHTML += output;
          });
  }

  const addRouteToMap = (route) => {
      var routeCoordinates = [];
      for (var legIndex = 0; legIndex < route.legs.length; legIndex++) {
          var leg = route.legs[legIndex];
          //Convert the route point data into a format that the map control understands.
          var legCoordinates = leg.points.map(function (point) {
              return [point.longitude, point.latitude];
          });
          //Combine the route point data for each route leg together to form a single path.
          routeCoordinates = routeCoordinates.concat(legCoordinates);
      }
      //Create a LineString from the route path points and add it to the data source.
      routeLine = new window.atlas.Shape(new window.atlas.data.LineString(routeCoordinates));
      datasource.add(routeLine);
  }

  const useStyles = makeStyles(theme=> ({
    map: {
      position: "relative",
      width : "100%",
    //   minwidth: "290px",
      height:"700px"
    },
    
    buttons: {
      backgroundcolor:"white",
      padding: "10px",
      borderradius: "10px"
    }
  }));

  const styles = useStyles();
  return (
    <div>
      <div id="myMap" className={styles.map}></div>

      <div className={styles.buttons}>
          <input type="button" value="Calculate Route" onClick={calculateRoute} />
          <input type="button" value="Calculate Waypoint Optimized Route" onClick={()=>calculateRoute(true)} />
          <br /><br />
          <div id="output"></div>
      </div>

      
    </div>
    
  );
}