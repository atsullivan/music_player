var sad_songs = [1,2,3];
var happy_songs = [4,5,6];
var audio = new Audio("audio/" + getRandom() + ".mp3");
var setting = "shuffle";

function getRandom(min, max) {
  return Math.floor(Math.random() * (sad_songs.length + happy_songs.length)) + 1;
}

$('#play-icon').click(function(){
  var x = document.getElementById("player_audio")
    if (x.className == "fa fa-3x fa-play") {
      audio.play();
      console.log('music playing');
    }
    else {
      audio.pause();
      console.log('music paused');
    }
  $(this).find('i').toggleClass('fa-play fa-pause');
  $(this).find('button').toggleClass('onclick="audio.play()" onclick="audio.pause()"');
});

$('#forward-icon').click(function() {
  find_new_song();
})

$('#sad-icon').click(function() {
  set_setting("sad");
})

$('#happy-icon').click(function() {
  set_setting("happy");
})

$('#shuffle-icon').click(function() {
  set_setting("shuffle");
})

function set_setting(choice) {
  var alert_mode = "success";
  setting = choice;
  switch (choice) {
    case "shuffle":
      alert_mode = "success";
      break;
    case "sad":
      alert_mode = "info";
      break;
    case "happy":
      alert_mode = "danger";
      break;
    default:
      alert_mode = "success";
  }
  document.getElementById("alert-area").className = "alert alert-" + alert_mode;
  document.getElementById("alert-area").textContent = choice.charAt(0).toUpperCase() + choice.slice(1) + " Mode";
  console.log("Setting = " + choice);
}

audio.addEventListener('ended',function() {
  find_new_song();
})

function find_new_song() {
  switch (setting) {
      case "shuffle":
        next_song = getRandom();
        console.log("Shuffle");
        break;
      case "sad":
        next_song = 2;
        console.log("Sad Playlist");
        break;
      case "happy":
        next_song = 3;
        console.log("Happy Playlist");
        break;
      default:
        next_song = getRandom();
        console.log("Shuffle");
    }
  audio.src = ('audio/' + next_song.toString() + '.mp3');
  audio.load();
  audio.play();
  console.log("Playing song: " + next_song);
}