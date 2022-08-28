//https://codic.jp/my/api_status
/**
 * 
 * Note : https://codic.jp/my/api_status
 */
class Codic {
  constructor() {
    this.baseUrl = "https://api.codic.jp"
    this.token = PropertiesService.getScriptProperties().getProperty("CODIC_TOKEN");
    this.projectId = PropertiesService.getScriptProperties().getProperty("CODIC_PROJECT_ID");
  }
  /**
   * 
   */
  get(text) {
    const url = this.baseUrl + "/v1/engine/translate.json"
    const payload = {
      text: text,
      project_id: this.projectId,
      casing: "lower underscore",
      acronym_style: "camel strict"
    }
    const options = this.getOptions_(payload)
    const response = UrlFetchApp.fetch(url, options);
    const resObject = JSON.parse(response.getContentText());
    const translatedText = resObject[0].translated_text
    return translatedText
  }
  /**
   * 
   */
  showProjectId() {
    const url = this.baseUrl + "/v1/user_projects.json"
    const payload = {

    }
    const options = this.getOptions_(payload)
    const response = UrlFetchApp.fetch(url, options);
    const resObject = JSON.parse(response.getContentText());
    return resObject
  }

  /**
   * 
   */
  getOptions_(payload) {

    const options = {
      'method': "POST",
      'headers': { Authorization: ` Bearer ${this.token}` },
      'payload': payload,
      'muteHttpExceptions': true
    };
    return options
  }
}






function testCodic() {
  const codic = new Codic()
  const name = "未分類"
  console.log(codic.get(name))
  console.log(codic.showProjectId())

}







