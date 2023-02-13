import React, {Component} from "react";
import style from '../styles/copm-styles.css'

class NewsBlock extends Component {
    render() {
        return(
            <div className="categories__item">
                <h2 className="categories__title">
                   {this.props.title}
                </h2>
                <p className="categories__descr">
                    {this.props.content}
                </p>
            </div>
        )
    }   
}

export default NewsBlock