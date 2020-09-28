/**
 * @file [Selector]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020/9/29
 */
import React, {useCallback} from 'react';
// import styles from './Selector.module.less';

interface Props {
    timezones: string[];
    onChange: any;
}
const Selector: React.FC<Props> = ({timezones, onChange}) => {

    const hanldeChange = useCallback((e: any) => {
        onChange(e.target.value);
    }, [onChange]);

    return (
        <><label htmlFor="cars">选择时区:</label>

            <select name="cars" id="cars" onChange={hanldeChange}>
                {timezones.map((zoneName: string) =>
                    (<option key={zoneName} value={zoneName}>{zoneName}</option>))}
            </select>
        </>
    );
};

export default Selector;