import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShopItemFunc.module.css';
import ShopItemModel from '../../models/ShopItemModel'

function ShopItemFunc(props) {
    const {item} = props;

    return (
        <div className={styles.mainContent}>
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">
                {item.descriptionFull}
            </div>
            <div className={clsx(styles.highlightWindow, styles.mobile)} >
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{item.currency}{item.price}.00</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

ShopItemFunc.prototype = {
    item: PropTypes.instanceOf(ShopItemModel).isRequired
}

export default ShopItemFunc;
