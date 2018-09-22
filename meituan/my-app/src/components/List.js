import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[
                {title:"我们约会吧",
                text:"恋人家人好朋友",
                img:require('./../asset/img/activity1.png')
                },
                {title:"我们约会吧",
                    text:"恋人家人好朋友",
                    img:require('./../asset/img/activity2.jpg')
                },
                {title:"我们约会吧",
                    text:"恋人家人好朋友",
                    img:require('./../asset/img/activity3.png')
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                {
                    this.state.list.map((item, index) => {
                        return <List item={item} key={item.img}></List>
                    })
                }
            </ul>
            </div>
        )
    }
}
