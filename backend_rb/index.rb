require 'sinatra'

class MyApp < Sinatra::Base
  get '/api/posts' do
    body = "<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <plist version="1.0">
    <dict>
    <key>dialog</key>
    <dict>
    <key>message</key>
    <string>Item Not Available</string>
    <key>explanation</key>
    <string>The item you've requested is not currently available.</string>
    <key>defaultButton</key>
    <string>ok</string>
    <key>okButtonString</key>
    <string>OK</string>
    </dict>
    </dict>
    </plist>"

    headers = {};
    headers['Content-Type'] = 'text/xml; charset=UTF-8';
    headers['access-control-allow-origin'] = '*';

    return [200, headers, body]
  end
end
