import React from 'react';
import { render } from 'react-dom';
import {Button} from '../src/index';

render(
    <div className="row">
        <h1 className="page-header">Button</h1>
        <h2>shape</h2>
        <Button shape='default' >default</Button>
        <Button shape='primary' >primary</Button>
        <Button shape='success' >success</Button>
        <Button shape='warning' >warning</Button>
        <Button shape='danger' >danger</Button>
        <Button shape='info' >info</Button>
        <Button shape='link' >link</Button>

        <h2>Size</h2>
        <Button size='lg' >large</Button>
        <Button size='md' >medium</Button>
        <Button size='sm' >small</Button>
        <Button size='xs' >xsmall</Button>
    </div>,
    document.getElementById('button_wrapper')
);
