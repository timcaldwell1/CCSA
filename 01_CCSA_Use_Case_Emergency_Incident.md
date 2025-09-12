# 01_CCSA_Use_Case_Emergency_Incident_Alert

Last updated: August 10, 2025 07:48 PM MST

## Table of Contents
- 1. Introduction
- 2. Description
- 3. Steps
- 4. Expected Outcome
- 5. Change Log

## 1. Introduction
1.1 Purpose: Detect and alert on high-risk incidents (risk score ?6) to ensure rapid response.
1.2 Scope: DEV v1.2; real-time monitoring near Crosswalk Church Laveen, AZ, 85339.

## 2. Description
This use case identifies emergencies (e.g., 07-02-2025 Violent Crime) within a 1-mile radius of 3921 W Baseline Rd, triggering immediate email notifications to the Safety Team.

## 3. Steps
3.1 Monitor incident_data for risk score ?6.
3.2 Geolocate incident to church radius.
3.3 Send email via MailApp.sendEmail to Safety Team with details (timestamp, location, risk).
3.4 Log in alert_log with action "Flagged".

## 4. Expected Outcome
Safety Team receives email within 1 minute; alert_log updated; dashboard flags incident red.

## 5. Change Log
| Date | Version | Change | Rationale |
|------|---------|--------|-----------|
| 08-05-2025 06:00 AM MST | v1.0 | Initial draft. | Base use case. |
| 08-10-2025 07:48 PM MST | v1.2 | Added timestamp validation check. | Enhanced data integrity per user request. |