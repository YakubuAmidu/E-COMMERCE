import React, { Component } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

export default Details extends Component {
    render() {
        return (
            <div>
                <h3>Hello from Default</h3>
            </div>
        )
    }
}