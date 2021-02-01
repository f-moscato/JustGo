function initData() {
  jimData.variables["ricerca"] = "ciccio";
  jimData.variables["Intrattenimento"] = "";
  jimData.datamasters["Recenti"] = [
  ];

  jimData.datamasters["Città"] = [
    {
      "id": 1,
      "datamaster": "Città",
      "userdata": {
        "Nome": "Roma",
        "preferiti": "false"
      }
    },
    {
      "id": 2,
      "datamaster": "Città",
      "userdata": {
        "Nome": "Milano",
        "preferiti": "false"
      }
    },
    {
      "id": 3,
      "datamaster": "Città",
      "userdata": {
        "Nome": "Taranto",
        "preferiti": "false"
      }
    },
    {
      "id": 4,
      "datamaster": "Città",
      "userdata": {
        "Nome": "Lisbona",
        "preferiti": "true"
      }
    }
  ];

  jimData.isInitialized = true;
}