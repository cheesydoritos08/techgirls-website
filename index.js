// Changes the quote at the end of every animation

 const phrases = [
    "Be yourself; everyone else is already taken.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "We are all in the gutter, but some of us are looking at the stars.",
    "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
    "It is what you read when you don't have to that determines what you will be when you can't help it.",
    "Yes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.",
    "The truth is rarely pure and never simple.",
    "How pathetic it is to describe these things which can't truly be described.",
    "You can never be overdressed or overeducated.",
    "A good friend will always stab you in the front.",
    "Some things are more precious because they don't last long.",
    "I am not young enough to know everything.",
    "To define is to limit.",
    "To love oneself is the beginning of a lifelong romance.",
    "Nowadays people know the price of everything and the value of nothing.",
    "With freedom, flowers, books, and the moon, who could not be perfectly happy?",
    "I never travel without my diary. One should always have something sensational to read in the train.",
  ];
 
  let randomItem = Math.floor(Math.random() * phrases.length);
  const animated = document.querySelector("#random-quote");

  animated.textContent =  phrases[randomItem];


//Add animation event listener to change the quote when animation ends
animated.addEventListener('animationiteration', () => {
  console.log('Animation ended');
  randomItem = Math.floor(Math.random() * phrases.length);
  console.log(randomItem);
  animated.textContent =  phrases[randomItem];
});

// Code for generating random art on every reload or click

const art_dictionary = {
    "Bridge over a Pond of Water Lilies by Claude Monet (1899)": "https://files.catbox.moe/mpp3u7.jpeg",
    "Impression, Sunrise by Claude Monet (1872)": "https://files.catbox.moe/z5z3g4.webp",
    "A Bar at the Folies-Bergère by Éduoard Manet (1882)": "https://files.catbox.moe/5fnxjj.webp",
    "Berthe Morisot with a Bouquet of Violets by Éduoard Manet (1872)": "https://files.catbox.moe/elamhz.jpg",
    "Hyde Park, London by Camille Pissarro (1890) ": "https://files.catbox.moe/a38dtt.jpg",
    "Jeanne Samary in a Low Necked Dress by Pierre-Auguste Renoir (1877)": "https://files.catbox.moe/e4kzsp.jpg",
    "Study, The Water's Edge by Berthe Morisot (1864)": "https://files.catbox.moe/m2s84n.jpg",
    "Haystack by Claude Monet (1865)":"https://files.catbox.moe/9ihflb.jpg",
    "Music in the Tuileries Garden by Éduoard Manet (1862)": "https://files.catbox.moe/4ig76x.jpg",
    "Portrait of Madame Claude Monet by Pierre-Auguste Renoir (1872)":"https://files.catbox.moe/wyazg6.jpg",
    "Portrait of Auguste Renoir by Frederic Bazille (1867)": "https://files.catbox.moe/lwom2j.jpg",
    "En été (La Bohémienne) by Pierre-Auguste Renoir (1868)": "https://files.catbox.moe/om62f0.jpg",
}

function randomizeArt(){
    let art_dictionary_keys = Object.keys(art_dictionary)
    let randomIndex = Math.floor(Math.random() * (art_dictionary_keys.length))
    console.log(Math.random() * art_dictionary_keys.length)
    let img = document.querySelector("#random-art-section img")
    let caption = document.querySelector("#random-art-section p")
    
    img.setAttribute("src", art_dictionary[art_dictionary_keys[randomIndex]])
    caption.textContent =  art_dictionary_keys[randomIndex]

}

randomizeArt()
  
  
 // Music player code

                          // initiate variables
                          let track_name = document.querySelector(".songtitle p");
                 
                          let playpause_btn = document.querySelector(".playpause-track");
                          let next_btn = document.querySelector(".next-track");
                          let prev_btn = document.querySelector(".prev-track");
                   
                          let seek_slider = document.querySelector(".seek_slider");
                          let curr_time = document.querySelector(".current-time");
                          let total_duration = document.querySelector(".total-duration")
                  
                          let track_index = 0;
                          let isPlaying = false;
                          let updateTimer;
                          
                          // create new audio element
                          let curr_track = document.getElementById("music");
                          
                          //
                          // DEFINE YOUR SONGS HERE!!!!!
                          // MORE THAN FOUR SONGS CAN BE ADDED!!
                          // JUST ADD ANOTHER BRACKET WITH NAME AND PATH
                          // CATBOX.MOE IS RECOMMENDED FOR UPLOADING MP3 FILES
                          let track_list = [
                              {
                                  name: "fragile - laufey",
                                  path: "https://files.catbox.moe/nurp83.mp3"
                              },
                              {
                                  name: "beautiful stranger - laufey",
                                  path: "https://files.catbox.moe/n0eazw.mp3"
                              },
                              {
                                  name: "valentine - fragile",
                                  path: "https://files.catbox.moe/rstgxn.mp3"
                              },
                              {
                                  name: "above the chinese restaurant - laufey",
                                  path: "https://files.catbox.moe/sdwgvd.mp3",
                              },
                              {
                                  name: "dear soulmate - laufey",
                                  path: "https://files.catbox.moe/jg4kxc.mp3",
                              },
                              {
                                  name: "what love will do to you - laufey",
                                  path: "https://files.catbox.moe/iws6sr.mp3",
                              },
                              {
                                  name: "i've never been in love before - laufey",
                                  path: "https://files.catbox.moe/p2ymwi.mp3",
                              },
                              {
                                  name: "just like chet - laufey",
                                  path: "https://files.catbox.moe/r2v4a2.mp3",
                              },
                              {
                                  name: "everything i know about love - laufey",
                                  path: "https://files.catbox.moe/smisf8.mp3",
                              },
                              {
                                  name: "falling behind - laufey",
                                  path: "https://files.catbox.moe/9cg3lr.mp3",
                              },
                              {
                                  name: "hi - laufey",
                                  path: "https://files.catbox.moe/7hfmjf.mp3",
                              },
                              {
                                  name: "dance with you tonight - laufey",
                                  path: "https://files.catbox.moe/dhqwma.mp3",
                              },
                              {
                                  name: "night light - laufey",
                                  path: "https://files.catbox.moe/iwi3no.mp3",
                              },
                            ];
                          //
                          //
                          //
                          //
                          //
                   
                          // Changes the title on every iteration
                          function loadTrack(track_index) {
                              clearInterval(updateTimer);
                              resetValues();
                   
                              // load a new track
                              curr_track.src = track_list[track_index].path;
                              curr_track.volume = 1;
                              curr_track.load();
                              
                              // update details of the track
                              track_name.textContent = "playing " + (track_index + 1) + " of " + track_list.length + ": " + track_list[track_index].name;
                   
                              // set an interval of 1000 milliseconds for updating the seek slider
                              updateTimer = setInterval(seekUpdate, 1000);
                              
                              // move to the next track if the current one finishes playing 
                              curr_track.addEventListener("ended", nextTrack);
                          }
                   
                          // reset values
                          function resetValues() {
                              curr_time.textContent = "0:00";
                              total_duration.textContent = "0:00";
                              seek_slider.value = 0;
                          }
                   
                          // checks if song is playing
                          function playpauseTrack() {
                              if (!isPlaying) playTrack();
                              else pauseTrack();
                          }
                   
                          // plays track when play button is pressed
                          function playTrack() {
                              curr_track.play();
                              isPlaying = true;
                              
                              // replace icon with the pause icon
                              playpause_btn.innerHTML = '<i class="material-icons">pause_circle</i>';
                          }
                   
                          // pauses track when pause button is pressed
                          function pauseTrack() {
                              curr_track.pause();
                              isPlaying = false;
                              
                              // replace icon with the play icon
                              playpause_btn.innerHTML = '<i class="material-icons">play_circle</i>';
                          }
                   
                          // moves to the next track (slightly modded by the owner of the site to include prev and next song names)
                          function nextTrack() {
                            track_index += 1
                            if (track_index > track_list.length - 1) {
                                track_index = 0
                            };                           
                            console.log(track_index)

                            loadTrack(track_index);
                            playTrack();
                              
                          }
                   
                          // moves to the previous track
                          function prevTrack() {
                            track_index -= 1
                            if (track_index < 0) {
                                track_index = track_list.length - 1
                            }
                            console.log(track_index)

                            loadTrack(track_index);
                            playTrack();
                          }
                   
                          // seeker slider
                          function seekTo() {
                              seekto = curr_track.duration * (seek_slider.value / 100);
                              curr_track.currentTime = seekto;
                          }
                   
                          function seekUpdate() {
                              let seekPosition = 0;
                              
                              // check if the current track duration is a legible number
                              if (!isNaN(curr_track.duration)) {
                                  seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                                  seek_slider.value = seekPosition;
                                  
                              // calculate the time left and the total duration
                              let currentMinutes = Math.floor(curr_track.currentTime / 60);
                              let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                              let durationMinutes = Math.floor(curr_track.duration / 60);
                              let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
                                  
                              // adding a zero to the single digit time values
                              if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                              if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                              if (currentMinutes < 10) { currentMinutes = currentMinutes; }
                              if (durationMinutes < 10) { durationMinutes = durationMinutes; }
                   
                              curr_time.textContent = currentMinutes + ":" + currentSeconds;
                              total_duration.textContent = durationMinutes + ":" + durationSeconds;
                            }
                          }
                          
                          // load the first track in the tracklist
                          loadTrack(track_index);