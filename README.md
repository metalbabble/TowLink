#About

This is a small, sample application which uses GM NGI vehicle data to provide usefull information when towing.

* HOME TAB: Several gauges showing stress on engine and transmission, along with some alerts.

* BACKUP TAB: Estimates the direction of a trailer backing up. The app will show an image of the direction of the trailer based on steering wheel angle.

* CHECKLIST: A handy list of reminders to check off before towing begins.

THIS APP IS FOR DEMO USE ONLY AND IS NOT INTENDED TO BE USED IN AN ACTUAL VEHICLE.

#Getting Started

To start, install GM NGI from: https://developer.gm.com/ngi and execute:

ngi serve

#Testing

To test, use the signal panel toolbar and adjust things like: wheel_angle, brakes_overheated, trailer_hitch, trailer_breaklight_fail, gear_state, wheel_angle

#Signal
wheel_angle
gear_state
engine_oil_temp
brakes_overheated
trailer_hitch
trailer_brakelght_fail
transmission_oil_temp
Display_units
trailer_brakes_gain

#TODO

Questions for GM
  tow haul mode - answer NO
  is there a way to bypass backup camera - answer NO

Nice to have
  replace table layout with bootstrap or better CSS
  when switch out of reverse, go where you were last - nick
  look into warnings
  better trailer backup estimate
  replace (X) with /!\
  detect towing capability

Must have
