# More To Come

Analyzing the data from [dev.to](https://dev.to/devteam/state-of-the-web-data---call-for-analysis-2o75) from the State of the Web survey.

## Dependencies

Here are a few otherwise unlisted dependencies:
- Node.js >=v9.11.1 (The only other version tested was __amyyf version__)
- npm >= 5.6.0 (The only other version test was __amyyf version__)
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) >= 4.0.1

## Getting Started

1. Download the CSV data from dev.to
1. Move the downloaded file without changing its filename into the data folder

## Data Clean-up

In order to convert the data to JSON, we had to manually modify the CSV file. For survey questions where multiple answers could be selected, the column header was identical, so answers were getting overwritten for people who had entered multiple responses. We modified the column number by adding letters (2.a, 2.b, 2.c, etc.) so each question and response would display.
