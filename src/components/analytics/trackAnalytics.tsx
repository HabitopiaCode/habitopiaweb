import React from "react";
import ReactGA from "react-ga";


// NOTES: 
// Event fields on Google analytics: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
//
// The following table summarizes the event fields:
//
// Field - Name	- Value - Type	- Required -	Description
// ----------------------------------------------
// eventCategory	- text	- yes -	Typically the object that was interacted with (e.g. 'Video')
// eventAction	- text	- yes	- The type of interaction (e.g. 'play')
// eventLabel	- text	- no	- Useful for categorizing events (e.g. 'Fall Campaign')


const setAnalyticsEventTracker = (category="button", action = "cta", label = "landing_page") => {
  const eventTracker = () => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}


export default setAnalyticsEventTracker;