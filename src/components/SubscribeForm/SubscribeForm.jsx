import useResize from 'hooks/useResize';
import { EmailInput, Form, SubscribeBtn } from './SubscribeForm.styled';
import Icon from 'components/Icon/Icon';

const SubscribeForm = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <Form id={!isDesktop ? 'form' : undefined}>
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
