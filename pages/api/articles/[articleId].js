import {articles} from "../../../data";
export default function handler(req, res) {
    const {articleId} = req.query;
    const article = articles.find(article => article.id === Number(articleId));
    res.status(200).json(article)
  }