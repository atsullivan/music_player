var audio = new Audio('audio/1.mp3');
var setting = "shuffle";
var next_song = 1;

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
  setting = "sad";
  console.log("Setting = Sad");
})

$('#happy-icon').click(function() {
  setting = "happy";
  console.log("Setting = Happy");
})

$('#shuffle-icon').click(function() {
  setting = "shuffle";
  console.log("Setting = Shuffle");
})

audio.addEventListener('ended',function() {
  find_new_song();
})

function find_new_song() {
  switch (setting) {
      case "shuffle":
        next_song = 1;
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
        next_song = 1;
        console.log("Shuffle");
    }
  audio.src = ('audio/' + next_song.toString() + '.mp3');
  audio.load();
  audio.play();
}