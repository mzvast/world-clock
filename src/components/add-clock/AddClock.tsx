import Selector from 'components/selector';
import useTimezone from 'hooks/useTimezone';
/**
 * @file [AddClock]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-29 00:10:46
 */

import React, {useCallback, useState} from 'react';
import styles from './AddClock.module.less';

interface Props {
    handleAddClock: (clock: string) => any;
}
const AddClock: React.FC<Props> = ({handleAddClock}) => {
    const [isEditing, setIsEditing] = useState(false);
    const {timezones} = useTimezone();
    const toggleMode = useCallback(() => {
        setIsEditing(!isEditing);
    }, [isEditing]);

    const setZone = useCallback(e => {
        handleAddClock(e);
    }, [handleAddClock]);

    return (
        <>
            {isEditing ? (
                <div className={styles.wrap}>
                    <Selector timezones={timezones} onChange={setZone} />
                </div>
            ) : (
                <div className={styles.wrap} onClick={toggleMode}>
                    <div className={styles.add}>+</div>
                </div>
            )}
        </>
    );
};
export default AddClock;
