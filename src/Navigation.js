import React, {PureComponent} from 'react';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default class extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    open = () => console.log('open') || this.setState({isOpen: true});
    close = () => console.log('close') || this.setState({isOpen: false});

    render() {
        console.log(this.state);
        return <>
            <Button onClick={this.open}>open</Button>
            <SwipeableDrawer
                anchor="left"
                open={this.state.isOpen}
                onClose={this.close}
                onOpen={this.open}
            >
                <div>
                    <div>aaaa</div>
                    <div>aaaa</div>
                    <div>aaaa</div>
                    <div>aaaa</div>
                    <div>aaaa</div>
                </div>

            </SwipeableDrawer>
        </>
    }

}
