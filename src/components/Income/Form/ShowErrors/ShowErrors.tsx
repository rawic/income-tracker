import React from 'react';
import FadeInAnimation from 'components/FadeInAnimation/FadeInAnimation';
import Portal from 'components/Portal/Portal';
import Toast from 'components/Toast/Toast';
import { isEmptyObject } from 'utilities';

import ShowErrorsI from './ShowErrors.interface'

const ShowErrors: React.FC<{ errors: ShowErrorsI }> = React.memo(({ errors }) => {
  if (isEmptyObject(errors)) return null;

  return (
    <Portal>
      <Toast.Wrapper>
        {Object.entries(errors).map(([field, msg], i) => (
          <FadeInAnimation delay={i / 5} key={field}>
            <Toast>{msg}</Toast>
          </FadeInAnimation>
        ))}
      </Toast.Wrapper>
    </Portal>
  );
});

export default ShowErrors;
