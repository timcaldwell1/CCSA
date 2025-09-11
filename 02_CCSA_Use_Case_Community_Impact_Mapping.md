# 02_CCSA_Use_Case_Community_Impact_Mapping

Last updated: August 10, 2025 07:48 PM MST

## Table of Contents
- 1. Introduction
- 2. Description
- 3. Steps
- 4. Expected Outcome
- 5. Change Log

## 1. Introduction
1.1 Purpose: Map low-threat incidents for community awareness.
1.2 Scope: DEV v1.2; dashboard pop-ups near Crosswalk Church Laveen, AZ, 85339.

## 2. Description
Maps incidents like the 05-26-2025 body found at Chavez Park Lake, showing low-risk events on the dashboard with a popup for community leaders.

## 3. Steps
3.1 Filter incident_data for risk <6.
3.2 Geolocate to church radius.
3.3 Display popup on dashboard with details (date, location, type).
3.4 Log in alert_log as "Community Note".

## 4. Expected Outcome
Popup appears within 60s; alert_log updated; map shows green marker.

## 5. Change Log
| Date | Version | Change | Rationale |
|------|---------|--------|-----------|
| 08-05-2025 06:00 AM MST | v1.0 | Initial draft. | Base use case. |
| 08-10-2025 07:48 PM MST | v1.2 | Added timestamp match check. | Ensured data consistency per user request. |