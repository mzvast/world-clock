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

interface Props {}
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
                    return (
                        <Clock
                            key={clock.id}
                            {...clock}
                            onRemove={this.handleRemoveClock}
                        />
                    );
                })}
                <AddClock handleAddClock={this.handleAddClock} />
            </div>
        );
    }

    componentDidMount() {
        this.initClocks();
    }

    handleAddClock = (clock: string) => {
        console.log('handleAddClock::clock', clock);
        // todo: create clock;
        // todo: setState;
    };

    handleRemoveClock = (clockId: number) => {
        console.log('handleAddClock::clockId', clockId);
        this.setState({
            clockData: this.state.clockData.filter(
                aClock => aClock.id !== clockId
            ),
        });
        // todo: create clock;
        // todo: setState;
    };

    initClocks = () => {
        // todo: get from localStorage;
        let localClocks = [
            {name: 'a', offset: 0, id: 1},
            {name: 'b', offset: 1, id: 2},
            {name: 'c', offset: 2, id: 3},
            {name: 'd', offset: 3, id: 4},
            {name: 'e', offset: 4, id: 5},
        ];
        this.setState({clockData: localClocks});
    };
}
export default App;
