class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);
    var totalTime = player.getDuration();
    $('#time-control .total-time').text(totalTime);

  };

  

}

const helper = new Helper();
