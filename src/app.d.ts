/// <reference types="@sveltejs/kit" />
/// <reference types="@sveltejs/adapter-cloudflare" />


declare namespace App {
    interface Locals {}

   interface Platform {

       env: {
           TODO: '85eb17cacb2c49e78f7a46b981d1f781';
           COUNTER: DurableObjectNamespace;
       };
       context: {
           waitUntil(promise: Promise<any>): void;
       };
       caches: CacheStorage & { default: Cache }
   }
    interface Session {}

    interface Stuff {}
}