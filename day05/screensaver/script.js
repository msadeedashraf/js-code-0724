function getRandomImage() {
  var randomImage = new Array();
  randomImage[0] =
    "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  randomImage[1] =
    "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg";
  randomImage[2] =
    "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  randomImage[3] =
    "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  randomImage[4] =
    "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg";
  randomImage[5] =
    "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

  var number = Math.floor(Math.random() * randomImage.length);

  //console.log(Math.floor(Math.random() * randomImage.length));
  //  console.log(randomImage.length);
  //console.log(randomImage[number]);

  //console.log('<img src="' + randomImage[number] + '" alt=""></img>');

  return (document.getElementById("result").innerHTML =
    '<img src="' + randomImage[number] + '" alt=""></img>');
}
