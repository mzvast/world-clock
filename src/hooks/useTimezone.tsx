/**
 * @file [useTimezone]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-29 01:23:16
 */

// import React from 'react';
import timezonesData from 'model/timezones.json';

const useTimezone = () => {
    const timezones = Object.values(timezonesData);

    return {timezones};
};
export default useTimezone;