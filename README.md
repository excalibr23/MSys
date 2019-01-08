# MSys
Starwraith System for Nexus

# Setup
Use hsetup to setup the auto hunting.  It will build the lists and variables necessary to make the system work.
Relog.

# Aliases
Use hshow to see what's on the list. It comes with a bunch of stuff just from me hunting up to level 45ish.
Use hlist to switch between priority list and room list.
Use hbreak to stop after one kill or attack everything in the room till clear.
Use hheal to decide if you want to heal on cooldown if < 80% health. (This works for all classes BUT Nanoseer, sorry nanoseers)
Use h<class> (nanoseer, beast, scoundrel, engineer, fury) to see what variables you have active that are class specific.
Use hadd to add something to the list and hremove to remove something.
hup and hdown to move something up or down the list.
Use hsave to save a backup of your list and hload to load it.
Ctrl + = will enable or disable auto killing and targeting
numpad 0 will do the appropriate hunting attack.
  
# Classes
Nanoseer stuff:
hmulti, hfreeze, hfrenzy, and hdelay will trigger auto attacks to use those attacks. You will need to enable these for the System to use them.

Fury stuff:
hberserk will use berserk when it can.
hfever will start combat with fever.
Period key (.) on numpad will start combat with inferno (be careful with this is hits everyone, including players, in room)

Beast stuff:
Just aliases: con: Contingency, oc Overclock.

Engineer stuff:
Nothing, engineer hunting is pretty simple

Scoundrel stuff:
hambush - enable use of ambush
hrapidfire - enable use of rapidfire
Alias rip - make ripper

# Extras
This is not just a hunting system (although it mostly is at the moment), it also has some other nice things:
MSys.log will do a display_notice except will convert objects and arrays and display all items in it, similar to Mudlet thing.  (It's not quite as robust but it's okay)
MSys.alert(text, color, color) will do cool alert boxes similar to svo from mudlet.
js <code> will run javascript and send back the return value, similar to lua from mudlet.
c<direction> will crash whatever direction and turn auto off
There are some aliases for Spaceships in Spaceship folder
This also redirects some chat and stuff in the Generic - Chat folder, you might want to modify.
It'll add up the damage you do in a fight and tell you - more useful for group hunting to compare with others.
Check all the folders for other aliases.
