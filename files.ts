// reading any file
/* const decoder = new TextDecoder('utf-8');
const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data)); */

// reading a text file
const data = await Deno.readTextFile('readme.txt');
console.log(data);

// writing files
const encoder = new TextEncoder();
await Deno.writeFile('readme.txt', encoder.encode('hello again, sucker'));

// renaming and deleting files
await Deno.rename('readme.txt', 'delete.txt');
await Deno.remove('delete.txt');