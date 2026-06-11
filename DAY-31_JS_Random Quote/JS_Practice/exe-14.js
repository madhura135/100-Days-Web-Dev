/*You have a playlist that plays songs in order:
let playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];
Simulate playing 3 songs one by one — each time a song plays, 
remove it from the front and print "Now playing: <song>". After all 3, print the remaining playlist. */
let playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];

for (let i = 0; i < 3; i++) {
  let currentSong = playlist.shift();
  console.log(`Now playing: ${currentSong}`);
}
console.log("Remaining playlist:", playlist);
