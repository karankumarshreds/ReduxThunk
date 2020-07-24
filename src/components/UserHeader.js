import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        };

        return (
            <div>
                <h5>{user.name}</h5>
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    // good practice to do all the computation before sending the final data
    // you can use same props being sent to the component using 'ownProps'
    return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader);