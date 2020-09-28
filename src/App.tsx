/**
 * @file [App]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-29 02:16:55
 */
import React, {PureComponent} from 'react';
import styles from './App.module.less';
import Clock from 'components/clock';
import AddClock from 'components/add-clock';

export interface ClockData {
    name: string;
    offset: number;
    id: number; // unique
}

interface Props { }
interface State {
    clockData: ClockData[];
}
class App extends PureComponent<Props, State> {
    state: State = {
        clockData: [],
    };


    render() {
        return (
            <div className={styles.container}>
                {this.state.clockData.map(clock => {
                    return <Clock key={clock.id} {...clock} />;
                })}
                <AddClock handleAddClock={this.handleAddClock} />
            </div>
        );
    }

    handleAddClock = (clock: string) => {
        console.log('handleAddClock::clock', clock);
        // todo: create clock;
        // todo: setState;
    };


}
export default App;
