import React, { Component } from "react";
import NewsBlock from "../NewsBlock/NewsBlock";
import BtnChoose from "../BtnChoose/BtnChoose";
import style from "../Categories/categories.css"

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            newsActive: {title: 'Политика', content: 'Какой-то текст', open: false}
        }
    }

    changeNews = newValue => { 
        this.setState({
            newsActive: newValue
        })      
    }

    render() {
        return(
            <div className="categories__content">
                <div className="categories__btn">
                    {/* {this.state.btns.map((item, idx) => {
                        return <BtnChoose descr={item.choose}
                        changeNews={() => this.changeNews({
                            title: 'Спорт', 
                            content: 'Какие-то спортивные события'
                        })}
                        key={idx}
                        />
                    })} */}
                    <BtnChoose
                        descr={'Политика'}
                        changeNews={() => this.changeNews({
                            title: 'Политика', 
                            content: 'Новости о политике'
                        })}
                    />
                    <BtnChoose
                        descr={'Спорт'}
                        changeNews={() => this.changeNews({
                            title: 'Спорт', 
                            content: 'Какие-то спортивные события'
                        })}
                    />
                    <BtnChoose
                        descr={'Игры'}
                        changeNews={() => this.changeNews({
                            title: 'Игры', 
                            content: 'Новости из мира игр'
                        })}
                    />
                    <BtnChoose
                        descr={'Хобби'}
                        changeNews={() => this.changeNews({
                            title: 'Хобби', 
                            content: 'Чем можно себя занять?'
                        })}
                    />
                    <BtnChoose
                        descr={'Реклама'}
                        changeNews={() => this.changeNews({
                            title: 'Спорт', 
                            content: 'Здесь могла быть ваша реклама'
                        })}
                    />
                </div>
                <div className="categories__items">                    
                    <NewsBlock
                    title={this.state.newsActive.title}
                    content={this.state.newsActive.content}
                    />                                     
                </div>
            </div>
        )
    }
}


export default Categories