import { five } from 'devices-core';
const TEAM = 'team-lampz';
const fblight = new Firebase("https://beacon-wallboard.firebaseio.com/");
const board = new five.Board();

board.on("ready", function() {
      console.log("Ready");

      var relay = new five.Relay(3);
      fblight.child('switch').on('value', d => {
          var data = d.val();
          console.log(data);

          if (data) {
              relay.on();
          } else {
              relay.off();
          }
      });
});
