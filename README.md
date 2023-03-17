
# R-Board
Basketball scoring system, either on the same system with local JS or an expandable system with NodeJS that allows multiple connections and individual IDs
![client](https://cdn.glitch.global/a592784b-3ddd-43ed-a2ed-5db7ac3ffeda/client.png?v=1679023615461)
**How does it work (local)?**
RBoard works by saving cookies to the system with one page, and reads it from any number of other pages on the same browser. This system is more immidiate than the NodeJS version, but is unable to be spread onto different systems.

**#How does the NodeJS version work?**
This version gives each individual user an url, which can be shared between devices. The local board sends the updated variable list whenever something is changed, or every one second otherwise. The server will recieve this message and transmits it to all listening clients, which evaluate the ID, and if it is identical it will display that list

Node will require:
Express
Socket.io

Example url: [rboard.glitch.me](rboard.glitch.me)
**How to use:**
![server](https://cdn.glitch.global/a592784b-3ddd-43ed-a2ed-5db7ac3ffeda/server.png?v=1679023616975)Choose one of the top three rows for what you want to change.

 - HOME SCR - home score
 - VISIT SCR - Visitor score
 - HOME FLS - home fouls
 - VISIT FLS - visitor fouls
 - HOME TOL - home timeouts left
 - VISIT TOL - visitor tomeouts left
 - HOME BNS - home bonus, | or | |
 - VISIT BNS - visitor bonus
 - CURR PLR - current player, or other message
 - CURR FLS - current player fould, or other message
 - POSS - possesion arrow, < or >
 - PERIOD - current period
 - TIME - current time **MUST BE IN FORM MM:SS  EX:(10:00)**
 - RESET ALL: reset all to defaults
 - BUZ OFF: no buzzer at game end
 - BUZ ON: buzzer enabled at game end
 ***VALUES***
 Choose one of the options above, then one of these operators:
 -  (+) add number
 -  (-) remove number
 -  (>) replace with number
 
 ***NUMBERS***
 Choose a value to add, subtract, or replace
 
 - 0-9
 - < or > (Possesion arrow)
 - | or | | (Bonus)
 - (:) (used W/ time)
 - CLR - clear current input
 - [custom] [<-] (choose a custom value **TYPE THEN CLICK <-**)
 
**OTHER STUFF**
- BUZZ - buzz the buzzer for 1 second
- STOP TIME - start the timer **NOTE: MUST PRESS THIS BEFORE TIME CHANGE**
- START TIME - stop the timer
- GO - Choose your values then press GO to change

The timer will buzz for 3 seconds when time runs out unless you manually turn it off


*LICENSE*
You can host this on your own server, but you are required to give permission on all pages. You may not use this for commercial purposes, or redistribute an edited version's source code. 
