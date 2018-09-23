import React, { Component } from 'react'
import { NavBar, Icon, SearchBar, Grid,Flex,WhiteSpace} from 'antd-mobile';
import './../asset/css/home.css';
import Container from './Container'
import Product from './Procduct'
import 'whatwg-fetch';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img2.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img3.png'),
                    text:"酒店"
                },
                {
                    icon:require('./../asset/img/img4.png'),
                    text:"娱乐"
                },
                {
                    icon:require('./../asset/img/img5.png'),
                    text:"外卖"
                },
                {
                    icon:require('./../asset/img/img6.png'),
                    text:"ktv"
                },
                {
                    icon:require('./../asset/img/img7.png'),
                    text:"周边游"
                },
                {
                    icon:require('./../asset/img/img8.png'),
                    text:"丽人"
                },
                {
                    icon:require('./../asset/img/img9.png'),
                    text:"小吃"
                },
                {
                    icon:require('./../asset/img/img10.png'),
                    text:"机票"
                },
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"电影"
                }
            ]
            , product:[]
        }
    }
    componentWillMount(){
        fetch('http://www.xiechenxi.cn/')
            .then((response) => {
                return response.json()
            }).then((data) => {
            this.setState({
                product:data
            })
            console.log(data)
        })
    }

    render(){
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent="哈尔滨"
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    <SearchBar placeholder="输入搜索内容" maxLength={8} />
                </NavBar>
                <Grid data={this.state.data} isCarousel columnNum={5} hasLine={false}/>
                <WhiteSpace size="lg"></WhiteSpace>
                <Flex>
                    <Flex.Item>
                        <h3 className="active-title active-title-green">我们约会吧</h3>
                        <span>恋人家人好朋友</span>
                        <img className="active-img" src={require("./../asset/img/activity1.png")}alt=""/>
                    </Flex.Item>
                    <Flex.Item>
                        <h3 className="active-title active-title-red">低价超值</h3>
                        <span>十元惠生活</span>
                        <img className="active-img" src={require("./../asset/img/activity2.jpg")} alt=""/>
                    </Flex.Item>
                    <Flex.Item>
                        <h3 className="active-title active-title-pink">工作简餐</h3>
                        <span>实惠方便选择多</span>
                        <img className="active-img" src={require("./../asset/img/activity3.png")}alt=""/>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg"></WhiteSpace>
                <Container title="猜你喜欢">
                    {this.state.product.map((elem,index)=>{
                        return <Product key={elem.product_id} elem={elem}></Product>
                    })}
                   </Container>

            </div>
        )
    }
}