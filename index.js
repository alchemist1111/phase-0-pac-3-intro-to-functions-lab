function shout(string) {
    // todo
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
    let cantAnsr = "I can't hear you!"
    let yesAnsr = "YES INDEED!"
    let lovAnsr = "I would love to!"
    if (string.toLowerCase(string) == string) {
        return cantAnsr;
    } 
    else if (string.toUpperCase(string) == string) {
        return yesAnsr;
    }
    else if ("Let's have dinner together!" == string) {
        return lovAnsr;
    }
  }

 
  