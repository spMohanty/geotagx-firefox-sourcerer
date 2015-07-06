const {XMLHttpRequest} = require("sdk/net/xhr");

var TARGET_HOST = "http://geotagx.org";
var TARGET_URI  = "/geotagx/sourcerer-proxy"

var GEOTAGX_SOURCERER_TYPE="geotagx-firefox-sourcerer"
var DELIMITER = "%%%%"

/**
 * Sends a HTTP GET Request to the sourcerer-proxy
 * TODO : Handle errors here
 */
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var self = require("sdk/self");
var cm = require("sdk/context-menu");
cm.Item({
  label: "Upload Image URL to GeoTag-X",
  context: cm.SelectorContext("img"),
  contentScript: 'self.on("click", function (node, data) {' +
                 '  self.postMessage(node.src);' +
                 '});',
  onMessage: function (url) {
    ARGUMENTS = GEOTAGX_SOURCERER_TYPE + DELIMITER + url ;
    sourcerer_proxy_url = TARGET_HOST+TARGET_URI+"?sourcerer-data="+ARGUMENTS ;
    httpGet(sourcerer_proxy_url) ;
  },
  image: self.data.url("icon16.png")
});
