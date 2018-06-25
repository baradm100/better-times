# Better Times

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

## Time unit

* seconds
* minutes
* hours
* days
* weeks
* months
* years

## Contribute

PRs and issues are more then welcome.