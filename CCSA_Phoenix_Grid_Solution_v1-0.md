# CCSA Phoenix Grid Solution v1.0

Last updated: August 06, 2025 01:40 PM MST

## Table of Contents
- 1. Introduction
- 2. Requirements
- 3. Implementation
- 4. Change Log

## 1. Introduction
1.1 Purpose: Handle Phoenix grid quirks (odd/even numbering, streets/avenues flip) with fuzzy checks.
1.2 Scope: v1.0; lat/long tolerance ?0.01 deg.

## 2. Requirements
2.1 Bounds: Lat 32-35, lon -113 to -109.
2.2 Tolerance: ?0.01 deg for edge cases.

## 3. Implementation
3.1 Formula: IF(AND(lat>32, lat<35, lon>-113, lon<-109), "", "Out of AZ?fix?").
3.2 GAS: onEdit trigger for real-time flag.

## 4. Change Log
| Date | Version | Change | Rationale |
|------|---------|--------|-----------|
| August 06, 2025 01:40 PM MST | v1.0 | Bumped from v0.1. | Aligned with user list. |