import * as React from 'react';
import { H1 } from 'native-base'; 


interface EState {
    hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, EState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error: any) {
        return {hasError: true}
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error(error), errorInfo;
    }

    render() {
        if (this.state.hasError) {
            return <H1>Ooops</H1>
        }

        return this.props.children;
    }
}