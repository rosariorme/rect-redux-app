import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import getDetailsById from '../../redux/actions/getDetailsById';

class Details extends Component {
    constructor(props) {
        super(props);

        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        const {
            match: { params: { itemId } },
            getDetailsById,
        } = this.props;

        getDetailsById(itemId);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            itemDetails,
        } = this.props;

        return (
            <Page
                itemDetails={itemDetails}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
    itemDetails: state.details,
});

const mapDispatchToProps = {
    getDetailsById,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
);
