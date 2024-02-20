const API_KEY = "MBIjzAj8Yf8b2G0aGOAT1FAaQrAGe9Ew";
const APPLICATION_NAME = "tomtom-maps.neherdata.com";
const APPLICATION_VERSION = "1.0";

tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);

const SECRETARIAT = { lng: -74.0697479, lat: 40.3083382 };

var map = tt.map({
  key: API_KEY,
  container: "map",
  center: SECRETARIAT,
  zoom: 12,
});
