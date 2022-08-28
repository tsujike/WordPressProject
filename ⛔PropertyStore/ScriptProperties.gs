/** プロパティストアに関する関数 */
function directionPropertyStore() {

  const codicToken = "3GsbohXwNlCkFEu7JIuoBcDvJ5fawt7W4j";
  PropertiesService.getScriptProperties().setProperty("CODIC_TOKEN", codicToken);


  const projecId = "hogehoge"
  PropertiesService.getScriptProperties().setProperty("CODIC_PROJECT_ID", projecId);


  //test
  console.log(PropertiesService.getScriptProperties().getProperty("CODIC_TOKEN"));
  console.log(PropertiesService.getScriptProperties().getProperty("CODIC_PROJECT_ID"));

}
