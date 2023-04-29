function showOpMap() {
  document.getElementById("map").style.display="block";
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGluaGxlZHVuZyIsImEiOiJjbGZ5NndrejUwZ3djM2hwYTZqYW1qd2plIn0.hbhw9Otz9M2p5zGMUSag1g';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [106.66528399361323,10.766531047842818], // starting position
  zoom: 14
});


async function print_Route(start, end, i) {
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  let geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // alert(data.distance);

  arr[i] = data.geometry.coordinates;

  geojson.geometry.coordinates = arr[i];
  map.on('load', () => {
    if (map.getSource('route'+i)) {
      map.getSource('route'+i).setData(geojson);
    } else {

      map.addLayer({
        id: 'route'+i,
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'

        },
        paint: {
          'line-width': 5,
          'line-opacity': 0.75,
          'line-color': '#3887be',
          'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 22, 12]
        }
      });
    };

    map.addLayer(
    {
      id: 'routearrows' + i,
      type: 'symbol',
      source: 'route' + i,
      layout: {
        'symbol-placement': 'line',
        'text-field': '▶',
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          24,
          22,
          80
        ],
        'symbol-spacing': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          20,
          22,
          200
        ],
        'text-keep-upright': false,
      },
      paint: {
        'text-color': '#3887be',
        'text-halo-color': 'hsl(55, 11%, 96%)',
        'text-halo-width': 3
      }
    },
    'waterway-label'
  );
  });

}

function showPathOnMap(route) {
  for (let i=0; i<route.length-1; i++) {
    print_Route(locationMCP[HamiltonPoint[route[i]]], locationMCP[HamiltonPoint[route[i+1]]], i);
  }
}       
      
let places = {
  'type': 'FeatureCollection',
  'features': []
};

map.on('load', () => {
  map.addSource('places', {
    'type': 'geojson',
    'data': places
  });
  
  map.addLayer({
    'id': 'poi-labels',
    'type': 'symbol',
    'source': 'places',
    'layout': {
      'text-field': ['get', 'description'],
      // 'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'center',
      'text-size': 24,
      'text-anchor': 'top',
      // 'icon-allow-overlap': true
    }
  });
});

function print_Location(route) {
  for (let i=0; i<route.length-1; i++) {
    let s;
    if (route[i]==0) {
      s = "Trụ sở";
    } else s = 'MCP' + HamiltonPoint[route[i]];

    let newFeature = {
      'type': 'Feature',
      'properties': {
        'description': s,
      },
      'geometry': {
        'type': 'Point',
        'coordinates': locationMCP[HamiltonPoint[route[i]]]
      }
    };

    places.features.push(newFeature);  
    let el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el).setLngLat(newFeature.geometry.coordinates).addTo(map);
  }
}

// --------------- Optimization path here!--------------------


let dist = [];

let HamiltonPoint = [];

for (let i=0; i<maxPoint; i++) {
  if (finPoint[i] == 1) HamiltonPoint.push(i);
}

console.log(HamiltonPoint)


for (let i = 0; i < noPoint; i++) {
  dist[i] = [];
  for (let j = 0; j < noPoint; j++) {
    if (i == j) dist[i][j] = 0;
    if (i < j) {
      dist[i][j] = bigDist[HamiltonPoint[i]][HamiltonPoint[j]];
    };
    if (i > j) dist[i][j] = dist[j][i];
  }
}









function tsp(n, dist) {
  // Generate all possible city permutations
  const cities = [];
  for (let i = 1; i < n; i++) {
    cities.push(i);
  }

  const permutations = permute(cities);

  // Calculate the total distance of each permutation
  const distances = [];
  for (let i = 0; i < permutations.length; i++) {
    const permutation = permutations[i];
    let totalDistance = dist[0][permutation[0]];
    for (let j = 0; j < permutation.length - 1; j++) {
      const city1 = permutation[j];
      const city2 = permutation[j + 1];
      totalDistance += dist[city1][city2];
    }
    totalDistance += dist[permutation[permutation.length - 1]][0];
    distances.push(totalDistance);
  }

  // Find the permutation with the minimum distance
  let minDistanceIndex = 0;
  for (let i = 1; i < distances.length; i++) {
    if (distances[i] < distances[minDistanceIndex]) {
      minDistanceIndex = i;
    }
  }
  const minDistancePermutation = permutations[minDistanceIndex];

  // Add initial city back to beginning and end of route
  const route = [0, ...minDistancePermutation, 0];
  const totalDistance = distances[minDistanceIndex];

  return { route, totalDistance };
}

// Helper function to generate all possible permutations of an array
function permute(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutations = permute(rest);
    permutations.forEach(permutation => {
      result.push([element, ...permutation]);
    });
  }

  return result;
}


let { route, totalDistance } = tsp(noPoint, dist);
// console.log(route); 

showPathOnMap(route);
print_Location(route);

}















function OpString() {  
  document.getElementById("show-OpMAP").style.display="block";
let dist = [];

let HamiltonPoint = [];

for (let i=0; i<maxPoint; i++) {
  if (finPoint[i] == 1) HamiltonPoint.push(i);
}



for (let i = 0; i < noPoint; i++) {
  dist[i] = [];
  for (let j = 0; j < noPoint; j++) {
    if (i == j) dist[i][j] = 0;
    if (i < j) {
      dist[i][j] = bigDist[HamiltonPoint[i]][HamiltonPoint[j]];
    };
    if (i > j) dist[i][j] = dist[j][i];
  }
}



function tsp(n, dist) {
  // Generate all possible city permutations
  const cities = [];
  for (let i = 1; i < n; i++) {
    cities.push(i);
  }

  const permutations = permute(cities);

  // Calculate the total distance of each permutation
  const distances = [];
  for (let i = 0; i < permutations.length; i++) {
    const permutation = permutations[i];
    let totalDistance = dist[0][permutation[0]];
    for (let j = 0; j < permutation.length - 1; j++) {
      const city1 = permutation[j];
      const city2 = permutation[j + 1];
      totalDistance += dist[city1][city2];
    }
    totalDistance += dist[permutation[permutation.length - 1]][0];
    distances.push(totalDistance);
  }

  // Find the permutation with the minimum distance
  let minDistanceIndex = 0;
  for (let i = 1; i < distances.length; i++) {
    if (distances[i] < distances[minDistanceIndex]) {
      minDistanceIndex = i;
    }
  }
  const minDistancePermutation = permutations[minDistanceIndex];

  // Add initial city back to beginning and end of route
  const route = [0, ...minDistancePermutation, 0];
  const totalDistance = distances[minDistanceIndex];

  return { route, totalDistance };
}

// Helper function to generate all possible permutations of an array
function permute(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutations = permute(rest);
    permutations.forEach(permutation => {
      result.push([element, ...permutation]);
    });
  }

  return result;
}


let { route, totalDistance } = tsp(noPoint, dist);
console.log(route); 

let s = "Tuyến đường <b><i>tối ưu</i></b> (" + Math. round((totalDistance/1000)*100)/100 + " km): Trụ sở ⇨ ";

for (let i=1; i<route.length-1; i++) {
  s += ("MCP" + HamiltonPoint[route[i]]);
  s += " ⇨ ";
}

document.getElementById("path").innerHTML = s + " Trụ sở.";


s = s.replace("<b><i>tối ưu</i></b>", "");


let dated = document.getElementById("dt-sl").value;

let findate = dated.split("-").reverse().join("/");

document.getElementsByClassName("bl-txt2")[1].innerHTML = 
"Ngày: " + findate + "  »  " + document.getElementById("sh-sl").value + "  »  "  + document.getElementById("ve-sl").value + "  »  " + s + "Trụ sở.";


document.getElementById("gen-shortest-path").style.display="none";
}