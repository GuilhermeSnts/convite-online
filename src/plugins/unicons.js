import Unicon from "vue-unicons";
import Vue from "vue";

// import icons to use
import { uniMapMarker, uniArrowLeft, uniCalender } from "vue-unicons/src/icons";

// add them into unicon
Unicon.add([uniMapMarker, uniArrowLeft, uniCalender]);

Vue.use(Unicon);
