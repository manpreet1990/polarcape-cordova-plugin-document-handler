var viewDocument = function(successHandler, failureHandler, url, fileName) {
  cordova.exec(
    successHandler,
    failureHandler,
    'DocumentHandler',
    'HandleDocumentWithURL',
    [{ url: url, fileName: fileName }]
  );
};

var downloadDocument = function(
  successHandler,
  failureHandler,
  url,
  fileName,
  headers
) {
  cordova.exec(
    successHandler,
    failureHandler,
    'DocumentHandler',
    'DownloadDocument',
    [{ url: url, fileName: fileName, headers: headers }]
  );
};

var DocumentViewer = {
  previewFileFromUrlOrPath: function(
    successHandler,
    failureHandler,
    url,
    fileName
  ) {
    viewDocument(successHandler, failureHandler, url, fileName);
  },
  downloadFromUrl: function(
    successHandler,
    failureHandler,
    url,
    fileName,
    headers
  ) {
    downloadDocument(successHandler, failureHandler, url, fileName, headers);
  },
};

if (module && module.exports) {
  module.exports = DocumentViewer;
}
