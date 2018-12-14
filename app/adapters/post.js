import DS from 'ember-data';
import { InvalidError } from 'ember-data/adapters/errors';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4567',
  namespace: 'api',

  headers: {
    accept: '*/*'
  },

  handleResponse(status, headers, payload) {
    if (payload.contentType && ['application/xml'].includes(payload.contentType)) {
      console.log(payload)
      return new InvalidError({
          title: ['Invalid Payload'],
          content: ['Error XML Plist Payload']
      });
    }
    return this._super(...arguments);
  },

  ajaxOptions(url, type, options) {
    const optionsObject = options || {};
    const hash = this._super(url, type, optionsObject);
    // since we sometimes get plists (XML) we cannot assume JSON
    delete hash.dataType;
    return hash;
  },
});
