import { Button } from 'hds-react';

type SubmitButtonProps =  {
  disabled: boolean;
};

function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={disabled} className='hdbt-search__submit-button event-list__submit-button'>{Drupal.t('Search', {}, { context: 'React search' })}</Button>
  );
}

export default SubmitButton;
