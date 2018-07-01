// Helper function
const isNumber = value => !Number.isNaN(parseFloat(value));

// Adding time intervals by milliseconds for easy usage
Date.convertTable = {
  second: 1000,
};
Date.convertTable.minute = Date.convertTable.second * 60;
Date.convertTable.hour = Date.convertTable.minute * 60;
Date.convertTable.day = Date.convertTable.hour * 24;
Date.convertTable.week = Date.convertTable.day * 7;
Date.convertTable.year = Date.convertTable.day * 365;

/**
 * Add a cretin unit of time the the date
 * @param {String} unit The unit of time to add, options:
 * * seconds
 * * minutes
 * * hours
 * * days
 * * weeks
 * * months
 * * years
 * @param {Number} value The value to add
 */
Date.prototype.add = function (unit, value) {
  if (!isNumber(value)) {
    throw new Error('Invalid value, must be a number');
  }

  // Force 's' in the end of the string to convert single to plural
  if (!unit.endsWith('s')) {
    unit += 's';
  }

  // Add by the unit
  if (unit === 'seconds') {
    this.setTime(this.getTime() + (Date.convertTable.second * value));
  } else if (unit === 'minutes') {
    this.setTime(this.getTime() + (Date.convertTable.minute * value));
  } else if (unit === 'hours') {
    this.setTime(this.getTime() + (Date.convertTable.hour * value));
  } else if (unit === 'days') {
    this.setTime(this.getTime() + (Date.convertTable.day * value));
  } else if (unit === 'weeks') {
    this.setTime(this.getTime() + (Date.convertTable.week * value));
  } else if (unit === 'months') {
    this.setUTCMonth(this.getMonth() + value);
  } else if (unit === 'years') {
    this.setUTCFullYear(this.getFullYear() + value);
  } else {
    throw new Error('Invalid date unit');
  }
};

/**
 * Subtract a cretin unit of time the the date
 * @param {String} unit The unit of time to add
 * * seconds
 * * minutes
 * * hours
 * * days
 * * weeks
 * * months
 * * years
 * @param {Number} value The value to add
 */
Date.prototype.subtract = function (unit, value) {
  this.add(unit, -value);
};

/**
 * Change date to the next day
 */
Date.prototype.nextDay = function () {
  this.add('days', 1);
};

/**
 * Change date to the next week
 */
Date.prototype.nextWeek = function () {
  this.add('weeks', 1);
};

/**
 * Change date to the next month
 */
Date.prototype.nextMonth = function () {
  this.add('months', 1);
};

/**
 * Change date to the next year
 */
Date.prototype.nextYear = function () {
  this.add('years', 1);
};

/**
 * Change date to the previous day
 */
Date.prototype.prevDay = function () {
  this.subtract('days', 1);
};

/**
 * Change date to the previous week
 */
Date.prototype.prevWeek = function () {
  this.subtract('weeks', 1);
};

/**
 * Change date to the previous month
 */
Date.prototype.prevMonth = function () {
  this.subtract('months', 1);
};

/**
 * Change date to the previous year
 */
Date.prototype.prevYear = function () {
  this.subtract('years', 1);
};

/**
 * Change date to the end of the day (23:59:59)
 */
Date.prototype.endOfDay = function () {
  this.setUTCMinutes(59);
  this.setUTCSeconds(59);
  this.setUTCHours(23);
};

/**
 * Change date to the end of the month and end of the day
 */
Date.prototype.endOfMonth = function () {
  this.setUTCMonth(this.getUTCMonth() + 1);
  this.setUTCDate(0);
  this.endOfDay();
};

/**
 * Change date to the end of the year and end of the day
 */
Date.prototype.endOfYear = function () {
  this.setUTCMonth(12);
  this.setUTCDate(0);
  this.endOfDay();
};

/**
 * Change date to the start of the day (00:00:00)
 */
Date.prototype.startOfDay = function () {
  this.setUTCMinutes(0);
  this.setUTCSeconds(0);
  this.setUTCHours(0);
};

/**
 * Change date to the start of the month and start of the day
 */
Date.prototype.startOfMonth = function () {
  this.setUTCDate(1);
  this.startOfDay();
};

/**
 * Change date to the start of the year and start of the day
 */
Date.prototype.startOfYear = function () {
  this.setUTCMonth(0);
  this.setUTCDate(1);
  this.startOfDay();
};