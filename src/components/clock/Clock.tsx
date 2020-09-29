/**
 * @file [Clock]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-29 00:06:51
 */

import React, {useCallback} from 'react';
import {ClockData} from 'app';
import style from './Clock.module.less';

type Props = {key: number, onRemove: any} & ClockData;
const Clock: React.FC<Props> = ({name, id, onRemove}) => {
    const handleRemoveClock = useCallback(() => {
        onRemove(id);
    }, []);
    return (
        <div className={`${style.wrap} grid`}>
            <div className={style.close} onClick={handleRemoveClock}>
                X
            </div>
            <div>时区:{name}</div>
            <div>日期</div>
            <div>时间</div>
        </div>
    );
};
export default Clock;
