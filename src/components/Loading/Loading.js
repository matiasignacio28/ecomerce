import React from "react";
import { Spinner } from 'react-bootstrap';

import './Loading.scss';

export default function Loading() {

    return (
        <div className="Loading">
            <Spinner animation="border" role="status" />
        <h5> CAGANDO ...</h5>
        </div>
    );
}