// uuid module
import { v4 } from "https://deno.land/std/uuid/mod.ts"

const uid = v4.generate();
console.log(uid);

// file system
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";
const jsonObject = await readJson('test.json');
console.log(jsonObject);

const books = [
    {title: 'Awesome', author: 'Me'}
];

await writeJson('books.json', books, { spaces: 2});
console.log('created book.json');