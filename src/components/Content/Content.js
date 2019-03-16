import React from 'react';

import './Content.scss';

const Content = props => {
    return (
        <div className='Content'>
            {this.props.children}
        </div>
    )
}

Content.propTypes = {

}

export default Content
