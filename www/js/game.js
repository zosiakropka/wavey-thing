define(['quintus-all'], function(){
  var Q = Quintus()                          // Create a new engine instance
    .include("Sprites, Scenes, Input, 2D, Touch, UI") // Load any needed modules
    .setup()                           // Add a canvas element onto the page
    .controls()                        // Add in default controls (keyboard, buttons)
    .touch();                          // Add in touch support (for the UI)

    Q.load("peace.jpg",
    function() {
      console.log('loaded some assets!');
      Q.sheet("peace","peace.jpg", { tilew: 32, tileh: 32 });
      // Q.compileSheets("sprites.png","sprites.json");
      Q.stageScene("main");
    });

  return Q;
})
