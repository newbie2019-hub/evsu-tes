import fs from 'fs';
import csv from 'csv';
import C45 from 'c4.5';

function trainData(){
  console.log(fs)
  fs.readFile('data.csv', function(err, data) {
	if (err) {
	  console.error(err);
	  return false;
	}

	csv.parse(data, function(err, data) {
	  if (err) {
		console.error(err);
		return false;
	  }

	  var headers = data[0];
	  var features = headers.slice(1,-1); 
	  console.log(features);
	  var featureTypes = ['category','number','number','number','category','number'];
	  var trainingData = data.slice(1).map(function(d) {
		return d.slice(1);
	  });
	  var target = headers[headers.length-1]; // "isQualified"
	  var c45 = C45();

	  c45.train({
		  data: trainingData,
		  target: target,
		  features: features,
		  featureTypes: featureTypes
	  }, function(error, model) {
		if (error) {
		  console.error(error);
		  return false;
		}

		var testData = [
		  ['FALSE',1000,2000,1000,'FALSE',1],
		];
		console.log(model)
		console.log(model.classify(testData[0]) === 'TRUE');
	  });
	  
	  fs.writeFileSync('state.json', c45.toJSON())
	});
  });
}

trainData()
