// The guide I used : https://blogs.msmvps.com/bsonnino/2021/01/24/creating-a-fitbit-clock-face-with-vscode-and-typescript/
/*
Custom font : https://github.com/gregoiresage/fitfont

Run these in powershell (I escaped the characters   ();,  with the backtick   `   )
npx fitfont-generate .\xfiles_typewriter.ttf 12 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^*`(`)-_=+[]`;:`,./?\
npx fitfont-generate .\xfiles_typewriter.ttf 24 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^*`(`)-_=+[]`;:`,./?\
npx fitfont-generate .\xfiles_typewriter.ttf 40 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^*`(`)-_=+[]`;:`,./?\
npx fitfont-generate .\xfiles_typewriter.ttf 80 !@#$%^*`(`)-_=+[]`;:`,./?\
*/
// https://dev.fitbit.com/build/guides/command-line-interface/
/*
Targeting Versa 2

SDK npm package
https://www.reddit.com/r/fitbit/comments/dck2iq/how_to_build_for_versa_2/

.gui files
https://community.fitbit.com/t5/SDK-Development/Creating-a-Clockface/td-p/4495915
*/
console.log('Hello world!');


import Clock from "./Clock";
import document from "document";
import { FitFont } from 'fitfont'
// or if you are not using the CLI : import { FitFont } from './fitfont.js'

const myLabel = new FitFont({ 
    id:'myLabel',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
    font:'The_X_Files_12', // name of the generated font folder

    // Optional
    halign: 'start',            // horizontal alignment : start / middle / end
    valign: 'baseline',         // vertical alignment   : baseline / top / middle / bottom
    letterspacing: 0            // letterspacing...
})

myLabel.text = 'a'          // only the characters generated with the python script will be displayed

//const timeElement = document.getElementById("time") as TextElement;
//const clock = new Clock();
//clock.clockCallback = (t) => timeElement.text = t;