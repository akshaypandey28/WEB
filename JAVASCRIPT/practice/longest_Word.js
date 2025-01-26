//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


const findLongestWord = (str) =>{
    if(str.trim().length===0) return false;

    words=str.split(" "); //words is an string array 

    words.sort( (a,b) => b.length - a.length)

    return words[0];
    

    

}


const find = (str) =>{
    if(str.trim().length===0) return false;

    words=str.split(" "); //words is an string array

    return words.reduce( (acc , currWord) =>
        currWord.length > acc.length ? currWord : acc , 
        ""
    )
}
console.log(
    findLongestWord(
      "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
    )
);

console.log(find("Watch Thapa Technical javascript awesomethapatechnical course on youtube"))