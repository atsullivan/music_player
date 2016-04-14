var default_color = "white";
var sad_color = "#96aacf";
var happy_color = "#83E4B5";
var shuffle_color = "#d9d9d9";
var sad_songs = [1,2,3];
var happy_songs = [4,5,6];
var audio = new Audio("audio/" + getRandom(1, (sad_songs.length + happy_songs.length)) + ".mp3");
var setting = "shuffle";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

$('#backward-icon').click(function() {
  var x = document.getElementById("player_audio")
  if (x.className == "fa fa-3x fa-play") {
    x.className = 'fa fa-3x fa-pause';
  }
  audio.src = ('audio/' + previous_song.toString() + '.mp3');
  audio.load();
  audio.play();
  console.log("Playing previous song: " + next_song);
})

$('#forward-icon').click(function() {
  var x = document.getElementById("player_audio")
  if (x.className == "fa fa-3x fa-play") {
    x.className = 'fa fa-3x fa-pause';
  }
  find_new_song();
})

$('#sad-icon').click(function() {
  set_setting("sad", sad_color);
})

$('#happy-icon').click(function() {
  set_setting("happy");
})

$('#shuffle-icon').click(function() {
  set_setting("shuffle");
})

function set_setting(choice, color) {
  setting = choice;
  switch (choice) {
    case "shuffle":      
      document.getElementById("shuffle-icon").style.backgroundColor=shuffle_color;
      document.getElementById("sad-icon").style.backgroundColor=default_color;
      document.getElementById("happy-icon").style.backgroundColor=default_color;
      break;
    case "sad":
      document.getElementById("sad-icon").style.backgroundColor=sad_color;
      document.getElementById("happy-icon").style.backgroundColor=default_color;
      document.getElementById("shuffle-icon").style.backgroundColor=default_color;
      break;
    case "happy":
      document.getElementById("happy-icon").style.backgroundColor=happy_color;
      document.getElementById("sad-icon").style.backgroundColor=default_color;
      document.getElementById("shuffle-icon").style.backgroundColor=default_color;
      break;
    default:
      
  }
  console.log("Setting = " + choice);
}

audio.addEventListener('ended',function() {
  find_new_song();
})

function find_new_song() {
  switch (setting) {
      case "shuffle":
        next_song = getRandom(1, (sad_songs.length + happy_songs.length));
        console.log("Shuffle");
        break;
      case "sad":
        next_song = getRandom(sad_songs[0], sad_songs.length);
        console.log("Sad Playlist");
        break;
      case "happy":
        next_song = getRandom(happy_songs[0], (sad_songs.length + happy_songs.length));
        console.log("Happy Playlist");
        break;
      default:
        next_song = getRandom(1, (sad_songs.length + happy_songs.length));
        console.log("Shuffle");
    }
  audio.src = ('audio/' + next_song.toString() + '.mp3');
  audio.load();
  audio.play();
  console.log("Playing song: " + next_song);
}