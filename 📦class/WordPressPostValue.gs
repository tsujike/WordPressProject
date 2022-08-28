class WordPressPostValue {
  /**
   * @param {object} - 
   * 分割代入でオブジェクトを受け取る
   */
  constructor({
    title,
    content,
    date,
    status = "draft",
    postId = "",
    slug,
    tagList = [],
    categoryList = [],
    featured_media = "",
    isSticky = false
  }) {

    // バリデーション
    if (Array.isArray(tagList) === false) throw "tagList は配列で指定してください"
    if (Array.isArray(categoryList) === false) throw "categoryList は配列で指定してください"
    if (["publish", "future", "draft", "pending", "private"].includes(status) === false) throw "statusはpublish, future, draft, pending, privateを指定してください"

    this.baseUrl = PropertiesService.getScriptProperties().getProperty("WP_SITE_URL");
    this.userName = PropertiesService.getScriptProperties().getProperty("WP_USER_NAME");
    this.pass = PropertiesService.getScriptProperties().getProperty("WP_ACCESS_TOKEN");

    this.wordPressValueObject = {
      title: title,
      content: content,
      date: date,
      status: status,
      postId: postId,
      slug: slug,
      tagList: tagList,
      categoryList: categoryList,
      featured_media: featured_media,
      isSticky: isSticky,
    }
  }

  /**
   * 
   * @return {}
   */
  getPayload() {
    return this.wordPressValueObject
  }
  getBaseUrl(){

  }
}
