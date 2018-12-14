export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.get('/api/posts', function() {
    const headers = {
      'Content-Type': 'text/xml; charset=UTF-8',
      'access-control-allow-origin': '*'
    };
    const body = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <plist version="1.0">
    <dict>
    <key>foo</key>
    <string>some string</string>
    </dict>
    </plist>`;
    const response = new Response(200, headers, body);
    return response;
  })
}
