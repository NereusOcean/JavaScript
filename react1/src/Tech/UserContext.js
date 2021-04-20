import React, {Component} from "react";


const {Provider, Consumer: AuthConsumer} = React.createContext({
    isAuthorized: false
});

class AuthProvider extends  Component{
    state = { isAuthorized: false}

    authorize = () => {
        this.setState({isAuthorized: true})
    }

    deauthorize = () => {
        this.setState({isAuthorized: false})
    }

    render(){
        const{isAuthorized} = this.state;
        return(
            <Provider value={{isAuthorized, authorize: this.authorize, deauthorize: this.deauthorize}}>
                {this.props.children}
            </Provider>
        )
    }
}

export function withAuth(WrappedComponent){
    return class AutjHOC extends  Component{
        render() {
            return(

                <AuthConsumer>
                    {contexProps => (
                        <WrappedComponent {...contexProps}{...this.props}/>
                    )}
                </AuthConsumer>
            );
        }
    };

}

export {AuthProvider}