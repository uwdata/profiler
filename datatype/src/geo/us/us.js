dt.geo.states_to_fips = {
  "alabama": "1",
  "alaska": "2",
  "arizona": "4",
  "arkansas": "5",
  "california": "6",
  "colorado": "8",
  "connecticut": "9",
  "delaware": "10",
  "district of columbia": "11",
  "florida": "12",
  "georgia": "13",
  "hawaii": "15",
  "idaho": "16",
  "illinois": "17",
  "indiana": "18",
  "iowa": "19",
  "kansas": "20",
  "kentucky": "21",
  "louisiana": "22",
  "maine": "23",
  "maryland": "24",
  "massachusetts": "25",
  "michigan": "26",
  "minnesota": "27",
  "mississippi": "28",
  "missouri": "29",
  "montana": "30",
  "nebraska": "31",
  "nevada": "32",
  "new hampshire": "33",
  "new jersey": "34",
  "new mexico": "35",
  "new york": "36",
  "north carolina": "37",
  "north dakota": "38",
  "ohio": "39",
  "oklahoma": "40",
  "oregon": "41",
  "pennsylvania": "42",
  "rhode island": "44",
  "south carolina": "45",
  "south dakota": "46",
  "tennessee": "47",
  "texas": "48",
  "utah": "49",
  "vermont": "50",
  "virginia": "51",
  "washington": "53",
  "west virginia": "54",
  "wisconsin": "55",
  "wyoming": "56"
};

dt.geo.us_state_names = [];
dt.geo.us_fips_codes = [];
for(var x in dt.geo.states_to_fips) {
  dt.geo.us_state_names.push(x);
  dt.geo.us_fips_codes.push(dt.geo.states_to_fips[x]);
};
