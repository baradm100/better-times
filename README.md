# Better Times

[![CircleCI](https://circleci.com/gh/baradm100/better-times.svg?style=svg)](https://circleci.com/gh/baradm100/better-times)

Better times is a small .js file that makes dates (in JavaScript) fun again.

## Table of Content

* [Goal](#goal)
* [Functions](#functions)
    * [Date.prototype.add](#date.prototype.add)
    * [Date.prototype.subtract](#date.prototype.subtract)
    * [Date.prototype.nextDay](#date.prototype.nextDay)
    * [Date.prototype.nextWeek](#date.prototype.nextWeek)
    * [Date.prototype.nextYear](#date.prototype.nextYear)
    * [Date.prototype.prevDay](#date.prototype.prevDay)
    * [Date.prototype.prevWeek](#date.prototype.prevWeek)
    * [Date.prototype.prevYear](#date.prototype.prevYear)
    * [Date.prototype.endOfDay](#date.prototype.endOfDay)
    * [Date.prototype.endOfMonth](#date.prototype.endOfMonth)
    * [Date.prototype.endOfYear](#date.prototype.endOfYear)
    * [Date.prototype.startOfDay](#date.prototype.startOfDay)
    * [Date.prototype.startOfMonth](#date.prototype.startOfMonth)
    * [Date.prototype.startOfYear](#date.prototype.startOfYear)
* [Time unit](#time-unit)
* [Contribute](#contribute)

## Goal

The goal of Better Times is to make date manipulation in JavaScript easier and safer.

## Functions

The following functions are added to the `Date.prototype`

### Date.prototype.add

Add to the date the relevant [time unit](#time-unit).

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.add('years', 1); // change date to: 2011-01-01T00:00:00.000Z
```

### Date.prototype.subtract

Subtract to the date the relevant [time unit](#time-unit).

#### Usages

```javascript
let date = new Date('2011-01-01T00:00:00.000Z');
date.subtract('years', 1); // change date to: 2010-01-01T00:00:00.000Z
```

### Date.prototype.nextDay

Change date to the next day

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.nextDay(); // change date to: 2010-01-02T00:00:00.000Z
```

### Date.prototype.nextWeek

Change date to the next week

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.nextWeek(); // change date to: 2010-01-08T00:00:00.000Z
```

### Date.prototype.nextMonth

Change date to the next month

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.nextMonth(); // change date to: 2010-02-01T00:00:00.000Z
```

### Date.prototype.nextYear

Change date to the next year

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.nextYear(); // change date to: 2011-01-01T00:00:00.000Z
```

### Date.prototype.prevDay

Change date to the previous day

#### Usages

```javascript
let date = new Date('2010-01-02T00:00:00.000Z');
date.prevDay(); // change date to: 2010-01-01T00:00:00.000Z
```

### Date.prototype.prevWeek

Change date to the previous week

#### Usages

```javascript
let date = new Date('2010-01-08T00:00:00.000Z');
date.prevWeek(); // change date to: 2010-01-01T00:00:00.000Z
```

### Date.prototype.prevMonth

Change date to the previous month

#### Usages

```javascript
let date = new Date('2010-02-01T00:00:00.000Z');
date.prevMonth(); // change date to: 2010-01-01T00:00:00.000Z
```

### Date.prototype.prevYear

Change date to the previous year

#### Usages

```javascript
let date = new Date('2010-02-01T00:00:00.000Z');
date.prevYear(); // change date to: 2010-01-01T00:00:00.000Z
```

## Date.prototype.endOf

### Date.prototype.endOfDay

Change date to the end of the day.

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.endOfDay(); // change date to: 2010-01-01T23:59:59.000Z
```

### Date.prototype.endOfMonth

Change date to the end of the month and day.

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.endOfMonth(); // change date to: 2010-01-31T23:59:59.000Z
```

### Date.prototype.endOfYear

Change date to the end of the year and day.

#### Usages

```javascript
let date = new Date('2010-01-01T00:00:00.000Z');
date.endOfYear(); // change date to: 2010-12-31T23:59:59.000Z
```

## Date.prototype.startOf

### Date.prototype.startOfDay

Change date to the start of the day.

#### Usages

```javascript
let date = new Date('2010-01-01T23:59:59.000Z');
date.startOfDay(); // change date to: 2010-01-01T00:00:00.000Z
```

### Date.prototype.startOfMonth

Change date to the start of the month and the day.

#### Usages

```javascript
let date = new Date('2010-01-31T23:59:59.000Z');
date.startOfMonth(); // change date to: 2010-01-01T00:00:00.000Z
```

### Date.prototype.startOfYear

Change date to the start of the year and the day.

#### Usages

```javascript
let date = new Date('2010-12-31T23:59:59.000Z');
date.startOfYear(); // change date to: 2010-01-01T00:00:00.000Z
```

## Time unit

> Note: All time units should end with an 's', if not, the 's' is added automatically

* seconds
* minutes
* hours
* days
* weeks
* months
* years

## Contribute

PRs and issues are more then welcome.