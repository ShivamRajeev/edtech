const SHEET_URL = "https://docs.google.com/spreadsheets/d/1taAWCS9Ae-Grw_cDhH17prL9YyhB6rPO6BnMPGbtI2o/edit?gid=0#gid=0";

function doPost(e) {
  try {
    const raw = e && e.postData && e.postData.contents ? e.postData.contents : '';
    const payload = (() => {
      if (!raw) {
        return e && e.parameter ? e.parameter : {};
      }

      try {
        if (e.postData && e.postData.type === 'application/json') {
          return JSON.parse(raw);
        }
      } catch (error) {
        // Ignore and fall back to form parameters below.
      }

      return e && e.parameter ? e.parameter : {};
    })();

    const spreadsheet = SpreadsheetApp.openByUrl(SHEET_URL);
    const sheet = spreadsheet.getSheetByName('Sheet1') || spreadsheet.getSheets()[0];

    const headers = [
      'Full Name',
      'Mobile Number',
      'Email Address',
      'Highest Qualification',
      'Interested Program',
      'Preferred Mode',
      'Message'
    ];

    const firstRow = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), headers.length)).getValues()[0];
    const hasCorrectHeaders = firstRow && firstRow.length >= headers.length &&
      firstRow[0] === headers[0] &&
      firstRow[1] === headers[1] &&
      firstRow[2] === headers[2] &&
      firstRow[3] === headers[3] &&
      firstRow[4] === headers[4] &&
      firstRow[5] === headers[5] &&
      firstRow[6] === headers[6];

    if (!hasCorrectHeaders) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }

    const values = [
      payload.fullName || '',
      payload.mobileNumber || '',
      payload.emailAddress || '',
      payload.qualification || '',
      payload.interestedProgram || '',
      payload.preferredMode || '',
      payload.message || ''
    ];

    sheet.appendRow(values);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, spreadsheetUrl: spreadsheet.getUrl(), sheetName: sheet.getName() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Google Sheets form receiver is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  return ContentService
    .createTextOutput('Google Sheets form receiver is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}
