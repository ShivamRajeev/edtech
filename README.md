# Career Dekho Website

Modern, responsive website for a Career Training and Placement Company offering job-oriented courses, interview preparation, and placement assistance.

## Pages and Sections Included

- Sticky header with smooth scrolling navigation
- Home hero with conversion-focused CTAs
- Program highlights and stats
- Our Process flow
- Featured flagship program
- About Us, Vision, Mission, Core Values
- Programs section with flagship + placeholder future programs
- Why Choose Us cards
- Placement Assistance step-by-step section + disclaimer
- FAQ accordion
- Contact section with map, enquiry form, and WhatsApp floating button
- Professional footer with quick links and disclaimer

## Tech Stack

- React 18
- Vite 5
- CSS3 (responsive custom UI)

## Project Structure

- `index.html` (Vite entry)
- `style.css` (global styles)
- `src/main.jsx` (React bootstrap)
- `src/App.jsx` (page composition)
- `src/components/*` (reusable page sections)
- `src/shared/*` (shared UI blocks)
- `src/data/siteData.js` (central content data)
- `src/hooks/useRevealOnScroll.js` (scroll reveal hook)

## Google Sheets Integration (Lead Capture)

The enquiry form is ready to send student details directly to a Google Sheet via Google Apps Script.

### 1) Create the Sheet

Create a Google Sheet with these columns in Row 1:

1. Timestamp
2. Full Name
3. Mobile Number
4. Email Address
5. Highest Qualification
6. Interested Program
7. Preferred Mode
8. Message
9. Lead Source
10. Submitted At (ISO)
11. Page URL
12. User Agent

### 2) Create Apps Script Web App

Open Extensions > Apps Script from your sheet and use this script:

```javascript
function doPost(e) {
	try {
		var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
		var data = JSON.parse(e.postData.contents);

		sheet.appendRow([
			new Date(),
			data.fullName || '',
			data.mobileNumber || '',
			data.emailAddress || '',
			data.qualification || '',
			data.interestedProgram || '',
			data.preferredMode || '',
			data.message || '',
			data.leadSource || '',
			data.submittedAt || '',
			data.pageUrl || '',
			data.userAgent || ''
		]);

		return ContentService
			.createTextOutput(JSON.stringify({ ok: true }))
			.setMimeType(ContentService.MimeType.JSON);
	} catch (error) {
		return ContentService
			.createTextOutput(JSON.stringify({ ok: false, error: error.toString() }))
			.setMimeType(ContentService.MimeType.JSON);
	}
}
```

Deploy as Web App:

- Execute as: Me
- Who has access: Anyone

Copy the Web App URL.

### 3) Connect URL in Website

Create a `.env` file in project root and add:

`VITE_GOOGLE_SHEET_WEB_APP_URL=YOUR_DEPLOYED_APPS_SCRIPT_URL`

This value is consumed in `src/components/ContactSection.jsx`.

## Run Locally

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Build for Production

1. `npm run build`
2. Output is generated in `dist/`
