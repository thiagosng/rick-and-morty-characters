import React from 'react';

import './styles.css';

import { Card } from 'antd';

const { Meta } = Card;


const CardCharacter = ({image, nome, status}) => {
   
    return (
      <div className="card">
        <Card
            hoverable
            style={{ width: 170 }}
            cover={<img alt="example" src={image} />}
          >
          <Meta title={nome} description={status} />
        </Card>
      </div>
    )
}

export default CardCharacter;