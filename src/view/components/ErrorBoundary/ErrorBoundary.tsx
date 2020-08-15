import React, { ErrorInfo} from 'react'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import ErrorView from '../../pages/ErrorPage/ErrorPage'
import fetch from '../../../service/fetch'
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      return this.props.reportError ? fetch({
        method: 'POST',
        url: 'mock/report-error',
        data: { 
          error,
          errorInfo
        }
      }) : null
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.renderView ? 
          this.props.renderView() : 
        <ErrorView errorCode={'unknown'} />
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary