
'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = 'EAA5FTj0T4eMBAGpuoMsiBnJlibZA6SrF26O01ZBk6X7xCxZAyDaZCU8ThfYkMd7tZAkGZADdLjuxoKVH7c3ascDitViwmZB8YkJQpYqACpFiZBgM21RQsefHeDdRzY1MfWwW7oZAZCkJbqU9zZAKZAPLUcdc1WqPGHwNncrquqzjUPT1BheKIaQkmzZAXpIhZCtGrvb9cZD';
const pixel_id = '322308451837265';
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData = (new UserData())
  .setEmails(['joe@eg.com'])
  .setPhones(['12345678901', '14251234567'])
  // It is recommended to send Client IP and User Agent for Conversions API Events.
  .setClientIpAddress(request.connection.remoteAddress)
  .setClientUserAgent(request.headers['user-agent'])
  .setFbp('fb.1.1558571054389.1098115397')
  .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');

const content = (new Content())
  .setId('product123')
  .setQuantity(1)
  .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

const customData = (new CustomData())
  .setContents([content])
  .setCurrency('QAR')
  .setValue(123.45);

const serverEvent = (new ServerEvent())
  .setEventName('Purchase')
  .setEventTime(current_timestamp)
  .setUserData(userData)
  .setCustomData(customData)
  .setEventSourceUrl('http://jaspers-market.com/product/123')
  .setActionSource('website');

const eventsData = [serverEvent];
const eventRequest = (new EventRequest(access_token, pixel_id))
  .setEvents(eventsData);


eventRequest.execute().then(
  response => {
    console.log('Response: ', response);
  },
  err => {
    console.error('Error: ', err);
  }
);
