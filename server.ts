/* import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({port: 8080});
console.log('listen in 8080');

for await (const req of server) {
    const url = req.url;
    req.respond({ body: `Hello JuanJo, you visited and changed: ${url}`});
} */

import { camelCase, paramCase, pascalCase, snakeCase } from "https://deno.land/x/case/mod.ts";
const text = 'hello again ninjas';
console.log(camelCase(text));
console.log(paramCase(text));
console.log(snakeCase(text));