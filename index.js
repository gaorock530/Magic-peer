/**
 * @description WebRTC based module
 * 
 * Used for simplify Webrtc connection and make compatible with all browsers.
 * Multi-Party communication.
 * 
 * @version 1.0.0
 * @author Magic Gao
 * @license ShadowStrike 2019
 */

const adapter = require('webrtc-adapter');

function Peer () {
  this.adapter = adapter;
}


exports.module = Peer;
