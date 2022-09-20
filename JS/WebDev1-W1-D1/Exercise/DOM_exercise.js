/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const el = document.querySelector("p")
el.querySelector('p').style.color="yellow"

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/




/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const txt = document.getElementById('p').value;
const txts = txt.split(/.+/gs);

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/



/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
const moji = document.querySelector("p");
moji.replace("?" , "&#129300");
moji.replace("!" , "&#128559");