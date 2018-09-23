import React, { Component } from 'react'
import 'whatwg-fetch';
export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: [],
            results: []
        }
    }

    conponentWillMount() {
        fetch('http://www.xiechenxi.cn/welcome/detail/'+this.props.match.params.id)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                        row: data.row,
                        results: data.results
                    }
                )
                console.log(data)
            })

    }

    render() {
        return (
            <div>
`
            </div>
        )
    }
}
