import React from 'react';
import * as d3 from 'd3';
import $ from 'jquery';
class Arc extends React.Component {
  constructor (props) {
    super(props);
    this.arc = d3.arc()
  }

  render () {

    return (
    <path d={this.arc(this.props.data)}
      style={{fill: this.props.color}}

      ></path>
    )
  }
}

class LabeledArc extends Arc {
    constructor (props) {
      super(props);
      this.arc.innerRadius(this.props.innerRadius);
      this.arc.outerRadius(this.props.outerRadius);
      this.arc.cornerRadius(this.props.cornerRadius);


    }



    render() {
        let [labelX, labelY] = this.arc.centroid(this.props.data),
            labelTranslate = `translate(${labelX}, ${labelY})`;

        return (
            <g className="arc" onClick={()=>{$(this.props).innerRadius=100}}>
                {super.render()}
                <text transform={labelTranslate}
                      textAnchor="middle"
                      >
                    {this.props.data.data.label}
                </text>
            </g>
        );
    }
}

export default LabeledArc

// export default Arc
