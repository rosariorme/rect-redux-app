import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import getAllResults from '../../redux/actions/getAllResults';
import deleteById from '../../redux/actions/deleteById';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.goTo = this.goTo.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentDidMount() {
		const {
            getAllResults,
			results
        } = this.props;

        getAllResults();
	}
    goTo(path) {
        this.props.history.push(path);
    }
	deleteItem(i){
		deleteById(i);
	}
    render() {
        return (
            <Page
                results={this.props.results}
                goTo={this.goTo}
				deleteItem={this.deleteItem}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});
const mapDispatchToProps = {
    getAllResults,
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Results)
);
