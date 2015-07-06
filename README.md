#GeoTag-X Firefox Sourcerer
--------------------------

The GeoTag-X soucerers are multiple ways in which GeoTag-X can ingest media. This is the repository for the GeoTag-X Firefox Sourcerer, which is basically a Firefox Add On.   

#Installation Instructions
--------------------------

* Download the Add-On xpi file from https://github.com/spMohanty/geotagx-firefox-sourcerer/raw/master/geotagx-firefox-sourcerer.xpi
* Refer to instructions at http://www.accessfirefox.org/Install_Addon_Manually.php to install the extension from the `xpi` file.

#How to read the images that are uploaded
------------------------------------------
You will have to log into the server and execute :
```bash
redis-cli LRANGE "GEOTAGX-SOURCERER-QUEUE" 0 -1
```

This will list down all the images that have been pushed via the `geotagx-proxy`.   
**NOTE** : The images are pushed into a Queue on a redis cluster running in Sentinel mode. The name of the key of the queue is `GEOTAGX-SOURCERER-QUEUE` and this queue can be manipulated by any means that is available to the developers. We will soon be releasing something called as the `geotagx-sink` which consumes all images collected via the geotagx-proxy

#Author
-------
S.P. Mohanty < sp.mohanty@cern.ch >