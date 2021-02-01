(function(window, undefined) {
  var dictionary = {
    "1726b12d-f8dd-4f34-90a1-e4af5fe17dbd": "Bar_Lisbona",
    "1652f85f-b47a-416e-be6a-a097ac96b4b9": "Taranto",
    "fb7733d0-451d-4a3f-909d-beaeb890c9b3": "Intrattenimento_Lisbona",
    "a2dc8f24-c9e8-4c78-8253-b62e6059acca": "Cultura_Lisbona",
    "30a35191-71a4-4398-a04d-f0263a8bb678": "preferiti",
    "813b5211-dd55-4156-b50d-fe15bc9c09f3": "chiusura",
    "61a065f7-03bf-406b-865e-1c7c3a43de1d": "Roma",
    "3e2fa044-dd1e-4b90-9c62-a1dc4787e647": "Info_Taranto_1",
    "f91e1f45-8910-456b-826a-b491f1a2869b": "Bar_Taranto",
    "a0182407-d570-4054-9cc3-f0a1efcd8279": "Info_Roma",
    "83e79975-0ed1-4eb6-8387-92c095cf9e38": "Info_Milano",
    "520cb635-2a46-4b86-93d0-806850421f14": "Bar_Milano",
    "195e3225-b9a8-48bc-9447-8836cff1fedd": "Intrattenimento_Taranto",
    "1dc72e12-5a40-4ba0-b780-f75ebc93be80": "Intrattenimento_Milano",
    "e39fe98d-d4ab-4089-808f-6f0a9460fae5": "Intrattenimento_Roma",
    "4c1a81f6-1bf1-4e41-b541-7a8808d96f39": "LIsbona",
    "805f1a54-b356-45e4-b57f-d1b8a6bc426f": "Cultura_Milano",
    "7f704729-14ee-4fa1-8522-717208aa255d": "Bar_Roma",
    "c2dbf675-639b-4bb6-bb4d-374b80bf0b44": "recenti",
    "7f58ac63-6d95-4acd-af09-293a40c98e25": "Cultura_Taranto",
    "e6467407-ac15-45c6-b65b-f4bf9975bf35": "info",
    "e18bd362-0003-424a-b920-7ded66029317": "home",
    "48d15b0f-d099-4fb4-96a0-ca5fe8b6d91d": "Cultura_Roma",
    "34b5e102-9af1-4601-9d73-efe863787efa": "welcome",
    "9fafe05f-ac6b-4589-925d-0ff48e28fd6a": "Info_Lisbona",
    "06c152bb-d65d-4ef2-ac92-99dbba5bcb25": "Milano",
    "c09519ab-5a6d-4614-a162-c7e3530f4967": "Template 1",
    "02545bab-1fbc-4d40-b8af-96154b234b04": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);