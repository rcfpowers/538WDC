// Example of Standard Connections in Web Data Connectors using JSONPlaceholder JSON endpoints
// Tableau 10.1 - WDC API v2.1

// Define our Web Data Connector
(function(){
  var myConnector = tableau.makeConnector();

  myConnector.getSchema = function (schemaCallback) {
    var house_cols = [{
      id: "question_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "poll_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cycle",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.state_province
    }, {
      id: "pollster_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pollster",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "sponsor_ids",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sponsors",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "display_name",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fte_grade",
      alias: "grade",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sample_size",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "population",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "population_full",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "methodology",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "office_type",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "seat_number",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "seat_name",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.congressional_district
    }, {
      id: "start_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "end_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "election_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "sponser_candidate",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "internal",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "partisan",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "tracking",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "nationwide_batch",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "ranked_choice_reallocated",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "created_at",
      dataType: tableau.dataTypeEnum.datetime
    },{
      id: "notes",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "url",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "stage",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cand_id",
      dataType: tableau.dataTypeEnum.int
    },{
      id: "answer",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_party",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pct",
      alias: "percentage_answer_for",
      dataType: tableau.dataTypeEnum.float
    }];

    var houseTableSchema = {
      id: "house_polls",
      columns: house_cols
    };

    var senate_cols = [{
      id: "question_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "poll_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cycle",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.state_province
    }, {
      id: "pollster_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pollster",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "sponsor_ids",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sponsors",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "display_name",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fte_grade",
      alias: "grade",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sample_size",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "population",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "population_full",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "methodology",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "office_type",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "seat_number",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "seat_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "start_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "end_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "election_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "sponser_candidate",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "internal",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "partisan",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "tracking",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "nationwide_batch",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "ranked_choice_reallocated",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "created_at",
      dataType: tableau.dataTypeEnum.datetime
    },{
      id: "notes",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "url",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "stage",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cand_id",
      dataType: tableau.dataTypeEnum.int
    },{
      id: "answer",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_party",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pct",
      alias: "percentage_answer_for",
      dataType: tableau.dataTypeEnum.float
    }];

    var senateTableSchema = {
      id: "senate_polls",
      columns: senate_cols
    };

    var governor_cols = [{
      id: "question_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "poll_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cycle",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.state_province
    }, {
      id: "pollster_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pollster",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "sponsor_ids",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sponsors",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "display_name",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fte_grade",
      alias: "grade",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sample_size",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "population",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "population_full",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "methodology",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "office_type",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "seat_number",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "seat_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "start_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "end_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "election_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "sponser_candidate",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "internal",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "partisan",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "tracking",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "nationwide_batch",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "ranked_choice_reallocated",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "created_at",
      dataType: tableau.dataTypeEnum.datetime
    },{
      id: "notes",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "url",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "stage",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "race_id",
      dataType: tableau.dataTypeEnum.int
    },{
      id: "answer",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_party",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pct",
      alias: "percentage_answer_for",
      dataType: tableau.dataTypeEnum.string
    }];

    var governorTableSchema = {
      id: "governor_polls",
      columns: governor_cols
    };

    var pres_primary_cols = [{
      id: "question_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "poll_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cycle",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.state_province
    }, {
      id: "pollster_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pollster",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "sponsor_ids",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sponsors",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "display_name",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fte_grade",
      alias: "grade",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sample_size",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "population",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "population_full",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "methodology",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "office_type",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "start_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "end_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "sponser_candidate",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "internal",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "partisan",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "tracking",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "nationwide_batch",
      dataType: tableau.dataTypeEnum.bool
    },{
      id: "created_at",
      dataType: tableau.dataTypeEnum.datetime
    },{
      id: "notes",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "url",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "stage",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "party",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "answer",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pct",
      alias: "percentage_answer_for",
      dataType: tableau.dataTypeEnum.float
    }];

    var primaryPresTableSchema = {
      id: "president_primary_polls",
      columns: pres_primary_cols
    };

    var pres_general_cols = [{
      id: "question_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "poll_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cycle",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.state_province
    }, {
      id: "pollster_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pollster",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "sponsor_ids",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sponsors",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "display_name",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fte_grade",
      alias: "grade",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sample_size",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "population",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "population_full",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "methodology",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "office_type",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "seat_number",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "seat_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "start_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "end_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "election_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "sponser_candidate",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "internal",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "partisan",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "tracking",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "nationwide_batch",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "ranked_choice_reallocated",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "created_at",
      dataType: tableau.dataTypeEnum.datetime
    },{
      id: "notes",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "url",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "stage",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "race_id",
      dataType: tableau.dataTypeEnum.int
    },{
      id: "answer",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "candidate_party",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pct",
      alias: "percentage_answer_for",
      dataType: tableau.dataTypeEnum.float
    }];

    var generalPresTableSchema = {
      id: "president_polls",
      columns: pres_general_cols
    };

    var pres_approval_cols = [{
      id: "question_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "poll_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.state_province
    }, {
      id: "politician_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "politician",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pollster",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "sponsor_ids",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sponsors",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "display_name",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fte_grade",
      alias: "grade",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sample_size",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "population",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "population_full",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "methodology",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "start_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "end_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "sponser_candidate",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "tracking",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "created_at",
      dataType: tableau.dataTypeEnum.datetime
    },{
      id: "notes",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "url",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "source",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "yes",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "no",
      dataType: tableau.dataTypeEnum.float
    }];

    var approvalPresTableSchema = {
      id: "president_approval_polls",
      columns: pres_approval_cols
    };

    var congress_ballot_cols = [{
      id: "question_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "poll_id",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "cycle",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string,
      geoRole: tableau.geographicRoleEnum.state_province
    },{
      id: "pollster_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "sponsor_ids",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sponsors",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "partisan",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "display_name",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "pollster_rating_name",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fte_grade",
      alias: "grade",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "sample_size",
      dataType: tableau.dataTypeEnum.int
    }, {
      id: "population",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "population_full",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "methodology",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "office_type",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "seat_number",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "start_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "end_date",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "sponser_candidate",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "tracking",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "nationwide_batch",
      dataType: tableau.dataTypeEnum.bool
    }, {
      id: "created_at",
      dataType: tableau.dataTypeEnum.datetime
    },{
      id: "notes",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "url",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "stage",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "dem",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "rep",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "ind",
      dataType: tableau.dataTypeEnum.float
    }];

    var congressBallotTableSchema = {
      id: "generic_ballot_polls",
      columns: congress_ballot_cols
    };

    schemaCallback([houseTableSchema, senateTableSchema, governorTableSchema, primaryPresTableSchema, generalPresTableSchema, approvalPresTableSchema, congressBallotTableSchema]);
  };

  myConnector.getData = function (table, doneCallback) {
    $.ajax({
      url: "https://projects.fivethirtyeight.com/polls-page/" + table.tableInfo.id + ".csv",
      data: "text"
    }).done(sort_data);

    function sort_data (text_data) {

      var table_data = [];
      var rows = text_data.replace(/"([^"]*)"/g, function(v) { return v.replace(/\b([\r\n]+)\b|[\r\n]+/g, ' ')}).split("\n");

      for (var i = 0; i < rows.length; i++) {

        if (i != 0){
          var clean = rows[i].replace(/"(.*?)"/g, function(v) { return v.replace('"', '').replace(/,/g ," | ").replace('"', '')});

          var cells = clean.split(",");
          x = cells;
          table_data.push(x);
        }
      }

      table.appendRows(table_data);
      doneCallback();
    }


  };

  tableau.registerConnector(myConnector);

  myConnector.init = function(initCallback) {
    initCallback();
    tableau.submit();
};


})();
