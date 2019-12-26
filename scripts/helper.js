class Helper {

  playPauseAndUpdate(song) {
    var totalTime = player.getDuration();
    $('#time-control.total-time').text(totalTime);

    player.playPause(song);
  };



}

const helper = new Helper();
