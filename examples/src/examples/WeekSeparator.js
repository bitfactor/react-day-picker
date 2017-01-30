import React from 'react';
import DayPicker from '../../../src';

const style ={
  visible: {
  },

  hidden: {
    display: "none",
  },
};

export default class WeekSeparator extends React.Component {

  state ={
    selected: {}
  };

  sepa =(i) => {
    const w = document.getElementsByClassName('DayPicker-Body')[0];
    const width = w ? w.clientWidth + 1 : 0;
    let idx = -1;
    if (i) {
      idx = i.map(Number).indexOf(+this.state.selected);
    }
    return (
      <div style={idx !== -1 ? style.visible : style.hidden }>
        <div style={{width: width, backgroundColor: "pink"}}>
            <p>This is a separator paragraph and wraps</p>
          </div>
      </div>
    )
  }

  render() {
  return (
      <DayPicker
        weekSeparator={ this.sepa }
        onDayClick={(e, val) => this.setState({selected: val})}
      />
    )
  }
}
