(function() {
    "use strict";
 
    window.addEventListener("load", initialize);
 
   /**
    * Initializes the webpage by adding event listeners to each button.
    */
    function initialize() {
        document.querySelector("#work-bttn").addEventListener("click", toggleWork);
        document.querySelector("#logo-container img").addEventListener("click", toggleWork);
        document.querySelector("#about-bttn").addEventListener("click", toggleAbout);
        document.querySelector("#contact-bttn").addEventListener("click", toggleContact);
        document.querySelector("#daa-bttn").addEventListener("click", toggleDAA);
        document.querySelector("#am-bttn").addEventListener("click", toggleAM);
        document.querySelector("#misc-bttn").addEventListener("click", toggleMisc);
    }

   /**
    * Toggles visbility of the 'Work' page.
    */
    function toggleWork() {
        showWork();
        hideAbout();
        hideContact();
        hideDAA();
        hideAM();
        hideMisc();
    }

   /**
    * Toggles visbility of the 'About' page.
    */
    function toggleAbout() {
        hideWork();
        showAbout();
        hideContact();
        hideDAA();
        hideAM();
        hideMisc();
    }

   /**
    * Toggles visbility of the 'Contact' page.
    */
    function toggleContact() {
        hideWork();
        hideAbout();
        showContact();
        hideDAA();
        hideAM();
        hideMisc();
    }

   /**
    * Toggles visbility of the 'Design Against Anxiety' page.
    */
    function toggleDAA() {
        hideWork();
        hideAbout();
        hideContact();
        showDAA();
        hideAM();
        hideMisc();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    /**
    * Toggles visbility of the 'Activity Manager' page.
    */
    function toggleAM() {
        hideWork();
        hideAbout();
        hideContact();
        hideDAA();
        showAM();
        hideMisc();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    /**
    * Toggles visbility of the 'Miscellaneous' page.
    */
     function toggleMisc() {
        hideWork();
        hideAbout();
        hideContact();
        hideDAA();
        hideAM();
        showMisc();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
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
        document.querySelector("#ahs").classList.remove("hidden");
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
        document.querySelector("#ahs").classList.add("hidden");
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

    /**
    * Shows panels of the 'Design Against Anxiety' page.
    */
    function showDAA() {
        document.querySelector("#daa-page").classList.remove("hidden");
    }

    /**
    * Hides panels of the 'Design Against Anxiety' page.
    */
    function hideDAA() {
        document.querySelector("#daa-page").classList.add("hidden");
    }

    /**
    * Shows panels of the 'Activity Manager' page.
    */
    function showAM() {
        document.querySelector("#am-page").classList.remove("hidden");
    }

    /**
    * Hides panels of the 'Activity Manager' page.
    */
    function hideAM() {
        document.querySelector("#am-page").classList.add("hidden");
    }

    /**
    * Shows panels of the 'Miscellaneous' page.
    */
    function showMisc() {
        document.querySelector("#misc-page").classList.remove("hidden");
    }

    /**
    * Hides panels of the 'Miscellaneous' page.
    */
    function hideMisc() {
        document.querySelector("#misc-page").classList.add("hidden");
    }
 
 })();
 