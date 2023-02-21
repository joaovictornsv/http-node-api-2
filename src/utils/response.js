function response(res, data = {}, statusCode = 200, contentType = 'application/json') {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
  res.writeHead(statusCode, { 'content-type': contentType});
  res.write(JSON.stringify(data));

  return res.end();
}

module.exports = response;
