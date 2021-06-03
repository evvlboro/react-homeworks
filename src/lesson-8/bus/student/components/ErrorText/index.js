//Core
import React from 'react';

// Styles
import { ErrorContainer } from './styles'

export const ErrorText = ({ errorText }) => {
  return (
    Boolean(errorText)
      ? (
        <ErrorContainer>
          {errorText}
        </ErrorContainer>
      )
      : null
  )
}
