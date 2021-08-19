(function() {
    "use strict";
 
    window.addEventListener("load", initialize);
 
   /**
    * Initializes the webpage by adding event listeners to each button.
    */
    function initialize() {
        document.querySelector("#work-bttn").addEventListener("click", toggleWork);
        document.querySelector("#about-bttn").addEventListener("click", toggleAbout);
        document.querySelector("#contact-bttn").addEventListener("click", toggleContact);
    }

   /**
    * Toggles visbility of the 'Work' page.
    */
    function toggleWork() {
        showWork();
        hideAbout();
        hideContact();
    }

   /**
    * Toggles visbility of the 'About' page.
    */
    function toggleAbout() {
        hideWork();
        showAbout();
        hideContact();
    }

   /**
    * Toggles visbility of the 'Contact' page.
    */
    function toggleContact() {
        hideWork();
        hideAbout();
        showContact();
    }

   /**
    * Shows panels of the 'Work' page.
    */
    function showWork() {
        document.querySelector("#work-bttn").classList.add("clicked");
        document.querySelector("#overview").classList.remove("hidden");
        document.querySelector("#daa").classList.remove("hidden");
        document.querySelector("#activity-manager").classList.remove("hidden");
        document.querySelector("#misc").classList.remove("hidden");
    }

   /**
    * Hides panels of the 'Work' page.
    */
    function hideWork() {
        document.querySelector("#work-bttn").classList.remove("clicked");
        document.querySelector("#overview").classList.add("hidden");
        document.querySelector("#daa").classList.add("hidden");
        document.querySelector("#activity-manager").classList.add("hidden");
        document.querySelector("#misc").classList.add("hidden");
    }

   /**
    * Shows panels of the 'About' page.
    */
    function showAbout() {
        document.querySelector("#about-bttn").classList.add("clicked");
        document.querySelector("#about").classList.remove("hidden");
    }

   /**
    * Hides panels of the 'About' page.
    */
    function hideAbout() {
        document.querySelector("#about-bttn").classList.remove("clicked");
        document.querySelector("#about").classList.add("hidden");
    }

    /**
    * Shows panels of the 'Contact' page.
    */
    function showContact() {
        document.querySelector("#contact-bttn").classList.add("clicked");
        document.querySelector("#contact").classList.remove("hidden");
    }

    /**
    * Hides panels of the 'Contact' page.
    */
     function hideContact() {
        document.querySelector("#contact-bttn").classList.remove("clicked");
        document.querySelector("#contact").classList.add("hidden");
    }
 
 })();
 