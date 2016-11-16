var soap = require("soap");
var url = "http://www.kraftfoods.com/ws/RecipeWS.asmx?wsdl";
var args = {};

var recipeClient;

soap.createClient(url, function(err, client) {
  if (err) {
    console.error(err);
  } else {
    recipeClient = client;
    getRecipeById(191150);
    //getRecipesByKeywords("mango chicken")
  }
});

var getRecipeById = function(id) {
  recipeClient.GetRecipeByRecipeID({
    iRecipeID: id,
    iBrandId: 0,
    iLangId: 0,
    bStripHTML: true
  }, function(err, result) {
    console.log(err);
    console.log(result);
  });
};

var getRecipesByKeywords = function(keywords) {
  recipeClient.GetRecipesByKeywords({
    sKeyword1: "mango",
    sKeyword2: "chicken",
    iBrandId: 0,
    iLangId: 0
  }, function(err, result) {
    console.log(err);
    console.log(result);
  });
};
