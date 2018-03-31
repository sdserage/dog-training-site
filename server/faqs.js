function getFaqs(req, res, next){
  const db = req.app.get('db');
  db.faqs.get_faqs().then(faqs=>{
    db.links.get_faqs_links().then(links=>{
      const linkedFaqs = faqs.map(faq=>{
        const { faq_id, question, answer } = faq;
        const linksArr = links.filter(link=> link.reference_key === faq_id);
        return {question, answer, links: linksArr};
      });
      res.status(200).send(linkedFaqs);
    })
  });
}

module.exports = function faqs(app){
  app.get('/api/faqs', getFaqs);
}
