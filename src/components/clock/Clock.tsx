/**
 * @file [Clock]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-29 00:06:51
 */

import React from 'react';
import {ClockData} from 'App';
import styles from './Clock.module.less';

type Props = { key: number } & ClockData;
const Clock: React.FC<Props> = ({name}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.close}>x</div>
            <div>时区:{name}</div>
            <div>日期</div>
            <div>时间</div>
        </div>
    );
};
export default Clock;