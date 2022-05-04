require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/Legend",
      "dojo/domReady!"
 ], function(WebScene, SceneView, Camera, Home, Legend) 
      {
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"9df0c141c0c243329a9a994a444229d2" 
        }
      });
      
  // USA
      var camera = new Camera({
       position: [
           -95.7129, // lon
          37.0902, // lat
          20000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
// Puerto Rico
     var camera2 = new Camera({
        position: [
          -66.5901,
          18.2208,
          3000000
        ],
        tilt: 0,
        heading: 0
      })
      
      // Gibralter and Ceuta
      var camera3 = new Camera({
        position: [
          -5.3536,
          36.0108,
          700000
        ],
        tilt:0,
        heading: 0
      })
      
      // French Guiana
      var camera4 = new Camera({
        position: [
           -53.1258,
           3.9339,
           2800000
        ],
        tilt:0,
        heading: 0
      })

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              directShadowsEnabled: false,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: true
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");

view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer1 = scene.layers.getItemAt(0);
        var featureLayer2 = scene.layers.getItemAt(1);

        var legend1 = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer1,
            title: "Countries"
          }]
        });

  view.ui.add(legend1, "bottom-right");
    
    [PR, GB, FG].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'bottom-left');
    });

    PR.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    GB.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });
    
   
   FG.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera4
      });
   });
});
});
