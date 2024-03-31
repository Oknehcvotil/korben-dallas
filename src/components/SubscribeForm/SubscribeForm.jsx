import { EmailInput, Form, SubscribeBtn } from './SubscribeForm.styled';
import Icon from 'components/Icon/Icon';

const SubscribeForm = () => {
  return (
    <Form>
      <EmailInput
        name="email"
        placeholder="Enter your Email"
        type="email"
        required
      />
      <SubscribeBtn type="submit">
        Subscribe
        <Icon width="20" height="16" iconName="#icon-arrow" />
      </SubscribeBtn>
    </Form>
  );
};

export default SubscribeForm;
