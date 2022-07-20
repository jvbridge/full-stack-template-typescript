// import { FormEvent, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
// import auth from '../../util/auth';

function ErrorFallBack({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function Login() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <div>login</div>
      <Card>
        {/* <Card.Header>Login or sign up!</Card.Header> */}
        <Card.Body>Stuff goes here</Card.Body>
      </Card>
    </ErrorBoundary>
  );
}
