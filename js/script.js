let Transitiontime = 200;// Set transition time to 200

// When the profile photo is clicked in the desktop version, this function executes.
$(".profile_sec").click(function () {
  if (window.innerWidth > 768) {
    $(".profile_option").fadeToggle(Transitiontime);
  }
});
// When the sort_by button is clicked in the desktop version, this function executes.

$("#sort_by").click(function(){

  $(".sort_options").fadeToggle(Transitiontime);
    
$("#sort_by").toggleClass("bgwhite");      

  $("#sort_up").toggleClass("arrowupdeg");


});
// In the desktop version, when the bars menu button on the left is clicked, it appears with a check and close icon, as well as an edit option.
$(".setting_bar").click(function () {
        $(".setting_bar").fadeToggle(Transitiontime);
  if ($(".check_close")) {
       $(".check_close").css("display", "flex").hide().fadeIn(Transitiontime); // Set display to flex and fade in

}

  $(".sub_setting.hide").css("display", "flex"); // Set display to flex and fade in

         $(".menu_up").fadeToggle(Transitiontime);
    $(".operation_menusub").css("display", "flex").fadeIn(Transitiontime); // Set display to flex and fade in
   $(".con-park-outline").fadeToggle(Transitiontime);

  // if ($(".check_close").css("display") === "none") { 
  //     $(".setting_bar").fadeToggle(Transitiontime);
  //   $(".check_close").css("display", "flex").hide().fadeIn(Transitiontime); // Set display to flex and fade in


  // }
  // else {
  //       $(".check_close").css("display", "none").hide().fadeOut(Transitiontime); // Set display to flex and fade in

  // $(".setting_bar").fadeToggle();
  // }
        // $(".menu_up").fadeToggle(Transitiontime);


  // if ($(".operation_menusub").css("display") === "none") { 
  //   $(".con-park-outline").fadeToggle(Transitiontime);
    
  //   $(".operation_menusub").css("display", "flex").hide().fadeIn(Transitiontime); // Set display to flex and fade in


  // }
  // else {
  //      $(".con-park-outline").fadeToggle(Transitiontime);
  //       $(".operation_menusub").css("display", "none").hide().fadeOut(Transitiontime); // Set display to flex and fade in


  // }
});
// As shown in the Figma demo, when the correct or close icon is clicked, it hides all details. This function is executed here.
$("#close_menu").click(function () {
    $(".sub_setting.hide").fadeToggle(Transitiontime);

        $(".menu_up").fadeToggle(Transitiontime);


      $(".check_close").css("display", "none").fadeOut(Transitiontime); // Set display to flex and fade in

  $(".setting_bar").fadeToggle(Transitiontime);


   $(".con-park-outline").fadeToggle(Transitiontime);
    $(".operation_menusub").css("display", "flex").fadeOut(Transitiontime); // Set display to flex and fade in


  


});
$("#check_menu").click(function () {
    $(".sub_setting.hide").fadeToggle(Transitiontime);

          $(".menu_up").fadeToggle(Transitiontime);

      $(".check_close").css("display", "none").hide().fadeOut(Transitiontime); // Set display to flex and fade in

  $(".setting_bar").fadeToggle(Transitiontime);

   $(".con-park-outline").fadeToggle(Transitiontime);
    $(".operation_menusub").css("display", "flex").fadeOut(Transitiontime); // Set display to flex and fade in


  


});
// This code toggles the visibility of content when the eye icon is clicked.

$(".eye_container").click(function () {
            var eyeIcon = $(this).find('.eyeIcon');

    if (eyeIcon.attr("src") === "./images/Eye icon (2).svg") {
        
        eyeIcon.attr("src", "./images/Eye icon (1).svg"); // Change to 'visible' icon
    } else {
    
        eyeIcon.attr("src", "./images/Eye icon (2).svg"); // Change to 'not visible' icon
    }
        });
/////////////////////

//Use JavaScript to create a mobile profile navigation menu that slides from right to left with a transition. 
// When this button is clicked on desktop, another menu appears, so I need to check whether the media is in mobile or desktop mode.


const profileMenuButton = document.getElementById('profile_sec');
const profileMenu = document.getElementById('menumobile_profile');
const overlayElement = document.getElementById('overlay');


    // Toggle the menu when the button is clicked
    profileMenuButton.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            profileMenu.classList.toggle('open');
            overlayElement.classList.toggle('visible');
        }
    });

    // Hide the menu if clicked outside the menu 
    overlayElement.addEventListener('click', () => {
        profileMenu.classList.remove('open');
    overlayElement.classList.remove('visible');
    });

    // Hide the menu when clicking on a rrowback
    profileMenu.addEventListener('click', (event) => {
        if (event.target.matches('.right_arrow')) { // Check if the clicked element is a link
          profileMenu.classList.remove('open');
    overlayElement.classList.remove('visible');
        }
    });




///////////////////////////////////////
//Use JavaScript to create a mobile menu navigation  that slides from right to left with a transition. 
//When this button is clicked on desktop, another menu appears, so I need to check whether the media is in mobile or desktop mode.

            const MenuButton = document.getElementById('btnmenu_left');
        const Menu2 = document.getElementById('aside_container');
  const BackMenu = document.getElementById('back_arrow');
        // Toggle the menu when the button is clicked
MenuButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    Menu2.classList.toggle('open');
  }
});
                BackMenu.addEventListener('click', () => {
            Menu2.classList.remove('open');
        });

        


